"use strict";

const electron = require("electron");
const url = require("url");
const path = require("path");

//const { ElectronChromeExtensions } = require("electron-chrome-extensions");

const { app, BrowserWindow, ipcMain, session } = electron;

const { clipboard } = require("electron");

//discord-rpc
const RPC = require("discord-rpc");
const rpc = new RPC.Client({
  transport: "ipc",
});

function copyObject(a) {
  return JSON.parse(JSON.stringify(a));
}

rpc.on("ready", () => {
  console.log("RPC On!");

  rpc.setActivity({
    details: "RPC Test",
    state: "RPC State Test",
    startTimestamp: new Date(),
    largeImageKey: "default",
    largeImageText: "Hello World",
    smallImageKey: "default",
    smallImageText: "helloworld",
  });
});

rpc.login({
  clientId: "770491262997889055",
});

let mainWindow;
var prevData = { screen: [0, 0] };

//Listen for the app to be ready
app.on("ready", function () {
  //create new window
  mainWindow = new BrowserWindow({
    frame: true,
    resizeable: true,
    width: 1260,
    height: 570,
    fullscreenable: true,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));

  console.log("loading extensions");
  session.defaultSession
    .loadExtension(path.join(__dirname, "0.11.3_0"))
    .then(() => {
      //const extensions = new ElectronChromeExtensions();
      //extensions.addTab(mainWindow.webContents, mainWindow);
      console.log("done");
    });

  /** Define channel name and message */
  const CHANNEL_NAME = "main";
  const MESSAGE = "pong";

  ipcMain.on(CHANNEL_NAME, (event, data) => {
    if (data.type === "rpc") {
      var details = "";
      var state = undefined;
      var diff = undefined;
      var diffText = undefined;
      var gameInfo = undefined;

      if (data.screen[0] === "game") {
        details = "Playing a Level";

        if (data.screen[1] === "local") {
          state = undefined;
        } else {
          state =
            data.title +
            " by " +
            (data.author === undefined ? "Player" : data.author);

          switch (Math.floor(data.stars)) {
            default:
              diff = "insane";
              break;

            case 0:
              diff = "easy";
              break;

            case 1:
              diff = "normal";
              break;

            case 2:
              diff = "hard";
              break;

            case 3:
              diff = "advanced";
              break;
          }

          if (data.special) {
            diff = "special";
          }

          if (data.ranked) {
            diff += "ranked";
          } else {
            diff += "unranked";
          }

          diffText = String(Math.floor(data.stars * 100) / 100) + " Stars";

          if (data.through < 0) {
            data.through = 0;
          }

          gameInfo =
            Math.round(data.acc * 100) / 100 +
            "% - " +
            data.score +
            " - " +
            data.combo +
            "x | " +
            Math.floor(data.through * 10000) / 100 +
            "% Complete";
        }
      } else if (data.screen[0] === "edit") {
        details = "Editing a Level";
      } else {
        details = "Browsing Menus";
      }

      rpc.setActivity({
        details: details,
        state: state,
        largeImageKey: "default",
        largeImageText: gameInfo,
        smallImageKey: diff,
        smallImageText: diffText,
      });

      prevData = copyObject(data);
    } else if (data.type === "fullscreen") {
      mainWindow.setFullScreen(!mainWindow.fullScreen);
    } else if (data.type === "copyText") {
      clipboard.writeText(data.copy);
    }



    event.returnValue = MESSAGE; // send a response for a synchronous request
  });

  ipcMain.on("enableConsole", () => {
    mainWindow.webContents.openDevTools();
  })

  mainWindow.setMenuBarVisibility(false);
});
