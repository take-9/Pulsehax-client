function completeSetup() {
  Object.defineProperty(globalThis, "calcLevelStars", {
    get: () => {
      return Bn;
    },
    set: (val) => {
      Bn = val;
    },
  });
  Object.defineProperty(globalThis, "clevels", {
    get: () => {
      return Rt;
    },
    set: (val) => {
      Rt = val;
    },
  });
  Object.defineProperty(globalThis, "clickMenu", {
    get: () => {
      return fs;
    },
    set: (val) => {
      fs = val;
    },
  });
  Object.defineProperty(globalThis, "copyLevel", {
    get: () => {
      return Mo;
    },
    set: (val) => {
      Mo = val;
    },
  });
  Object.defineProperty(globalThis, "copyObject", {
    get: () => {
      return X;
    },
    set: (val) => {
      X = val;
    },
  });
  Object.defineProperty(globalThis, "drawScreens", {
    get: () => {
      return gs;
    },
    set: (val) => {
      gs = val;
    },
  });
  Object.defineProperty(globalThis, "ease", {
    get: () => {
      return At;
    },
    set: (val) => {
      At = val;
    },
  });
  Object.defineProperty(globalThis, "editorAction", {
    get: () => {
      return kn;
    },
    set: (val) => {
      kn = val;
    },
  });
  Object.defineProperty(globalThis, "executePlay", {
    get: () => {
      return en;
    },
    set: (val) => {
      en = val;
    },
  });
  Object.defineProperty(globalThis, "fitText", {
    get: () => {
      return Dt;
    },
    set: (val) => {
      Dt = val;
    },
  });
  Object.defineProperty(globalThis, "game", {
    get: () => {
      return Tt;
    },
    set: (val) => {
      Tt = val;
    },
  });
  Object.defineProperty(globalThis, "getLevelDownloadState", {
    get: () => {
      return qo;
    },
    set: (val) => {
      qo = val;
    },
  });
  Object.defineProperty(globalThis, "getObject", {
    get: () => {
      return te;
    },
    set: (val) => {
      te = val;
    },
  });
  Object.defineProperty(globalThis, "hitbox", {
    get: () => {
      return Ft;
    },
    set: (val) => {
      Ft = val;
    },
  });
  Object.defineProperty(globalThis, "img", {
    get: () => {
      return St;
    },
    set: (val) => {
      St = val;
    },
  });
  Object.defineProperty(globalThis, "lang", {
    get: () => {
      return Pt;
    },
    set: (val) => {
      Pt = val;
    },
  });
  Object.defineProperty(globalThis, "langList", {
    get: () => {
      return U;
    },
    set: (val) => {
      U = val;
    },
  });
  Object.defineProperty(globalThis, "langSel", {
    get: () => {
      return xt;
    },
    set: (val) => {
      xt = val;
    },
  });
  Object.defineProperty(globalThis, "langs", {
    get: () => {
      return F;
    },
    set: (val) => {
      F = val;
    },
  });
  Object.defineProperty(globalThis, "levels", {
    get: () => {
      return Ht;
    },
    set: (val) => {
      Ht = val;
    },
  });
  Object.defineProperty(globalThis, "loadLevel", {
    get: () => {
      return qi;
    },
    set: (val) => {
      qi = val;
    },
  });
  Object.defineProperty(globalThis, "loadStartScreens", {
    get: () => {
      return Cs;
    },
    set: (val) => {
      Cs = val;
    },
  });
  Object.defineProperty(globalThis, "lvlHowl", {
    get: () => {
      return Qt;
    },
    set: (val) => {
      Qt = val;
    },
  });
  Object.defineProperty(globalThis, "matrix", {
    get: () => {
      return zt;
    },
    set: (val) => {
      zt = val;
    },
  });
  Object.defineProperty(globalThis, "menu", {
    get: () => {
      return Bt;
    },
    set: (val) => {
      Bt = val;
    },
  });
  Object.defineProperty(globalThis, "menuMusic", {
    get: () => {
      return to;
    },
    set: (val) => {
      to = val;
    },
  });
  Object.defineProperty(globalThis, "musicManager", {
    get: () => {
      return cs;
    },
    set: (val) => {
      cs = val;
    },
  });
  Object.defineProperty(globalThis, "nav", {
    get: () => {
      return c;
    },
    set: (val) => {
      c = val;
    },
  });
  Object.defineProperty(globalThis, "newGrabLevel", {
    get: () => {
      return m;
    },
    set: (val) => {
      m = val;
    },
  });
  Object.defineProperty(globalThis, "newGrabLevelMeta", {
    get: () => {
      return H;
    },
    set: (val) => {
      H = val;
    },
  });
  Object.defineProperty(globalThis, "newGrabUser", {
    get: () => {
      return Ut;
    },
    set: (val) => {
      Ut = val;
    },
  });
  Object.defineProperty(globalThis, "newSettingsMenu", {
    get: () => {
      return Jo;
    },
    set: (val) => {
      Jo = val;
    },
  });
  Object.defineProperty(globalThis, "popupMessage", {
    get: () => {
      return Gn;
    },
    set: (val) => {
      Gn = val;
    },
  });
  Object.defineProperty(globalThis, "prmpt", {
    get: () => {
      return Ri;
    },
    set: (val) => {
      Ri = val;
    },
  });
  Object.defineProperty(globalThis, "prmpting", {
    get: () => {
      return g;
    },
    set: (val) => {
      g = val;
    },
  });
  Object.defineProperty(globalThis, "prmptingString", {
    get: () => {
      return Nt;
    },
    set: (val) => {
      Nt = val;
    },
  });
  Object.defineProperty(globalThis, "promptRes", {
    get: () => {
      return ki;
    },
    set: (val) => {
      ki = val;
    },
  });
  Object.defineProperty(globalThis, "saveGameData", {
    get: () => {
      return Qn;
    },
    set: (val) => {
      Qn = val;
    },
  });
  Object.defineProperty(globalThis, "screen", {
    get: () => {
      return He;
    },
    set: (val) => {
      He = val;
    },
  });
  Object.defineProperty(globalThis, "scrollTimeline", {
    get: () => {
      return qn;
    },
    set: (val) => {
      qn = val;
    },
  });
  Object.defineProperty(globalThis, "server", {
    get: () => {
      return v;
    },
    set: (val) => {
      v = val;
    },
  });
  Object.defineProperty(globalThis, "theme", {
    get: () => {
      return $;
    },
    set: (val) => {
      $ = val;
    },
  });
  Object.defineProperty(globalThis, "themes", {
    get: () => {
      return qe;
    },
    set: (val) => {
      qe = val;
    },
  });
  Object.defineProperty(globalThis, "toLoad", {
    get: () => {
      return Ne;
    },
    set: (val) => {
      Ne = val;
    },
  });
  Object.defineProperty(globalThis, "user", {
    get: () => {
      return T;
    },
    set: (val) => {
      T = val;
    },
  });
  Object.defineProperty(globalThis, "welcome", {
    get: () => {
      return s;
    },
    set: (val) => {
      s = val;
    },
  });
  game.pulseHax = {};
  window.dispatchEvent(new CustomEvent("SetupComplete"));
}
eval(`
    hs = function(${
      hs
        .toString()
        .replace(
          hs.toString().split("{")[0],
          hs.toString().split("{")[0].split("(")[1]
        )
        .slice(0, -1) + ";completeSetup()}"
    }
`);
const importMapAction = document.createElement("input");
importMapAction.type = "file";
importMapAction.style.display = "none";
importMapAction.accept = ".phz, .pls";
importMapAction.multiple = "true";
document.body.appendChild(importMapAction);
importMapAction.addEventListener("change", function () {
  for (file of importMapAction.files) {
    let zip = new JSZip();
    if (/.pls$|.phz$/.exec(file.name)) {
      zip.loadAsync(file).then(function (zip) {
        zip.files[Object.keys(zip.files)[0]]
          .async("string")
          .then(function (fileData) {
            let vtest = JSON.parse(fileData);
            if (
              Object.hasOwn(vtest, "beat") &&
              Object.hasOwn(vtest, "effects")
            ) {
              levels.saved.push(vtest);
              levels.search = levels.saved;
            } else {
              window.alert(
                `Invalid .${
                  file.name.split(".")[file.name.split(".").length - 1]
                } file selected (${file.name})`
              );
            }
          });
      });
    } else {
      window.alert(
        `Invalid File Extension ".${
          file.name.split(".")[file.name.split(".").length - 1]
        }"`
      );
    }
  }
});

window.addEventListener("SetupComplete", function () {
  game.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };
  game.rgbToHex = function (r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  };
  game.pulseHax.params = {
    NSMItem:
      newSettingsMenu.prototype.draw.toString()[
        newSettingsMenu.prototype.draw.toString().indexOf(`.type`) - 2
      ] === "="
        ? newSettingsMenu.prototype.draw.toString()[
            newSettingsMenu.prototype.draw.toString().indexOf(`.type`) - 1
          ]
        : newSettingsMenu.prototype.draw.toString()[
            newSettingsMenu.prototype.draw.toString().indexOf(`.type`) - 1
          ] +
          newSettingsMenu.prototype.draw.toString()[
            newSettingsMenu.prototype.draw.toString().search(`.type`) - 2
          ],
  };
  const themeNames = {
    theme_addt_gufo: "Gufo's theme",
    theme_addt_floopy: "Floopy's theme",
    theme_addt_shia: "Shia's theme",
    theme_addt_lilyyy: "Lilyyy's theme",
    theme_addt_axye: "Axye's theme",
    theme_CUSTOM: "Custom theme",
  };
  langs[langSel] = {
    ...langs[langSel],
    ...themeNames,
  };
  themes.push(
    {
      // Custom
      main: color(35, 50, 60),
      text: color(255, 255, 255),
      overlayShade: color(32, 45, 54),
      shade: color(20, 35, 45),
      buttonDown: color(240, 240, 240),
      buttonUp: color(255, 255, 255),
      buttonText: color(0, 0, 0),
      textDown: color(200, 200, 200),
      select: color(60, 50, 35),
      modText: color(255, 175, 0),
      scrollbar: color(255, 255, 255),
      lightTheme: !1,
      checkmark: color(0, 175, 255),
      dropdown: color(225, 225, 225),
    },
    {
      // Gufo
      main: color(0, 0, 0),
      text: color(64, 255, 64),
      overlayShade: color(16, 16, 16),
      shade: color(0, 0, 0),
      buttonDown: color(32, 32, 32),
      buttonUp: color(48, 48, 48),
      buttonText: color(64, 255, 64),
      textDown: color(32, 128, 32),
      select: color(30, 30, 30),
      modText: color(75, 175, 255),
      scrollbar: color(75, 175, 255),
      lightTheme: 1,
      checkmark: color(75, 175, 255),
      dropdown: color(24, 24, 24),
    },
    {
      // Floopy
      main: color(20, 20, 20),
      text: color(255, 175, 175),
      overlayShade: color(10, 10, 10),
      shade: color(20, 20, 20),
      buttonDown: color(50, 50, 50),
      buttonUp: color(75, 75, 75),
      buttonText: color(255, 200, 200),
      textDown: color(170, 100, 100),
      select: color(75, 75, 75),
      modText: color(255, 150, 100),
      scrollbar: color(225, 225, 225),
      lightTheme: 0,
      checkmark: color(225, 225, 225),
      dropdown: color(50, 50, 50),
    },
    {
      // Shia
      main: color(10, 10, 10),
      text: color(255, 255, 255),
      overlayShade: color(10, 10, 10),
      shade: color(20, 20, 20),
      buttonDown: color(50, 50, 50),
      buttonUp: color(75, 75, 75),
      buttonText: color(255, 255, 255),
      textDown: color(150, 150, 150),
      select: color(75, 75, 75),
      modText: color(180, 100, 255),
      scrollbar: color(180, 100, 255),
      lightTheme: 1,
      checkmark: color(180, 100, 255),
      dropdown: color(180, 100, 255),
    },
    {
      // Lily
      main: color(238, 153, 255),
      text: color(255, 255, 255),
      overlayShade: color(204, 140, 217),
      shade: color(190, 130, 201),
      buttonDown: color(251, 299, 255),
      buttonUp: color(246, 204, 255),
      buttonText: color(143, 41, 163),
      textDown: color(246, 204, 255),
      select: color(219, 150, 233),
      modText: color(246, 204, 255),
      scrollbar: color(255, 255, 255),
      lightTheme: 1,
      checkmark: color(225, 77, 255),
      dropdown: color(234, 128, 255),
    },
    {
      // Axye
      main: color(31, 12, 21),
      text: color(244, 234, 179),
      overlayShade: color(83, 34, 42),
      shade: color(63, 24, 32),
      buttonDown: color(238, 134, 89),
      buttonUp: color(255, 213, 122),
      buttonText: color(31, 12, 21),
      textDown: color(225, 186, 132),
      select: color(143, 60, 45),
      modText: color(255, 51, 51),
      scrollbar: color(255, 213, 122),
      lightTheme: 1,
      checkmark: color(127, 41, 71),
      dropdown: color(226, 120, 75),
    }
  );

  window.addEventListener("StorageToGame", function () {
    const JSZipScript = document.createElement("script");
    JSZipScript.src = game.pulseHaxIcon.replace(
      "game/icon.ico",
      "script/jszip.min.js"
    );
    (document.head || document.documentElement).appendChild(JSZipScript);
    let clickMenuBuffer = clickMenu.screens;
    eval(`
        promptRes = function${
          promptRes
            .toString()
            .replace(
              promptRes.toString().split("{")[0],
              game.functionParams(promptRes)
            )
            .slice(0, -1) + `,game.toggleQuickPlay(true);}`
        };
        clickMenu.screens = function${clickMenu.screens
          .toString()
          .replace(
            clickMenu.screens
              .toString()
              .slice(
                clickMenu.screens.toString().indexOf("5,height/24)&&") +
                  "5,height/24)&&".length,
                clickMenu.screens.toString().indexOf("lvl.searchSent=!1}})") +
                  "lvl.searchSent=!1}})".length
              ),
            "(" +
              clickMenu.screens
                .toString()
                .slice(
                  clickMenu.screens.toString().indexOf("5,height/24)&&") +
                    "5,height/24)&&".length,
                  clickMenu.screens.toString().indexOf("lvl.searchSent=!1}})") +
                    "lvl.searchSent=!1".length
                ) +
              ",game.toggleQuickPlay(true)}}),game.toggleQuickPlay(false))"
          )
          .replace(
            ".time),",
            ".time, game.pulseHax.editor.customPlaybackRate = game.playbackRate),"
          )
          .replace(":.5===", ":0<")
          .replace(
            `.editorMode){`,
            `.editorMode){
                if (hitbox("rcorner", 0, height / 16 * 8/3, width / 4, height / 16 * 31/3)) {
                    game.extrasNSM.click()
                }`
          )
          .replace(
            clickMenu.screens.toString().split("{")[0],
            game.functionParams(clickMenu.screens)
          )};
        loadLevel = function${loadLevel
          .toString()
          .replace(
            `{`,
            `{if(!game.edit && menu.PHSettings.preferredFS !== "" && menu.PHSettings.preferredFS !== 0){
                    foresight = clevels[menu.lvl.sel]?.local ? (clevels[menu.lvl.sel].ar <= 0 ? 1 : clevels[menu.lvl.sel].ar) : newGrabLevelMeta(clevels[menu.lvl.sel], "id").ar <=0 ? 1 : newGrabLevelMeta(clevels[menu.lvl.sel], "id").ar;
                    foresight = Math.round(menu.PHSettings.preferredFS / foresight * 100) / 100;
                    if(foresight<.25) {foresight = .25};
                    if(foresight>2) {foresight = 2};
                    game.mods.foresight = foresight;
                };`
          )
          .replace(
            loadLevel.toString().split("{")[0],
            game.functionParams(loadLevel)
          )};
        drawScreens = function${drawScreens
          .toString()
          .replace(
            `${musicManager.name}(),`,
            `(${musicManager.name}(),
                (!game.edit && (game.disMode === 1 || game.disMode === 2) && screen === "game" && game.mods.startPos === 0) && (
                    game.mods.startPos = game.beat[0][1] < 0 ? 60000 / game.beat[0][9] * game.beat[0][1] - 1 : -1
                    )),`
          )
          .replace(
            drawScreens.toString().split("{")[0],
            game.functionParams(drawScreens)
          )};
        editorAction = function${
          editorAction
            .toString()
            .replace(`.snap===1/12&&(`, `.snap>0&&(`)
            .replace(`&&(.25`, `&&((.25`)
            .replace(
              editorAction.toString().split("{")[0],
              game.functionParams(editorAction)
            )
            .slice(0, -1) +
          `, game.pulseHax.editor.customSnap = Math.round(1000 * (10**(game.snap.toString().split(".")[1]?.length || 0) / (game.snap * 10**(game.snap.toString().split(".")[1]?.length || 0)))) / 1000)}`
        };
        game.menuNSM.pages[0].items[10].event = ${
          game.menuNSM.pages[0].items[10].event.toString().slice(0, -1) +
          ",game.mods.hidden=false}"
        };
        saveGameData = function${saveGameData
          .toString()
          .replace(
            "{",
            `{
                var pulseHaxColorBank = game.pulseHax.colorBank;
                var pulseHaxColorBanksAdded = game.pulseHax.colorBanksAdded;
                localStorage.setItem("pulseHaxColorBankNew", JSON.stringify(pulseHaxColorBank));
                localStorage.setItem("pulseHaxColorBanksAdded", JSON.stringify(pulseHaxColorBanksAdded));
                `
          )
          .replace(
            saveGameData.toString().split("{")[0],
            game.functionParams(saveGameData)
          )};
        scrollTimeline = function${scrollTimeline
          .toString()
          .replace("{", "{if(game.extrasNSM.data.dropdownHitbox) {return;};")
          .replace(
            scrollTimeline.toString().split("{")[0],
            game.functionParams(scrollTimeline)
          )};
        newSettingsMenu.prototype.draw = ${newSettingsMenu.prototype.draw
          .toString()
          .replace(`hue:e.hue,`, `hue:e.hue, after: e.after,`)
          .replace(
            `open}})`,
            `open; if(!game.pulseHax.dropdownClosed) {
                        let interval = setInterval(() => {
                            if(e.animation.height === 0) {
                                clearInterval(interval);
                                e.after?.();
                            }
                        }, 500)
                    }; game.pulseHax.dropdownClosed = false}})`
          )
          .replace(
            `${game.pulseHax.params.NSMItem}.animation.height=0,`,
            `(${game.pulseHax.params.NSMItem}.animation.height = 0, game.pulseHax.dropdownClosed = false),`
          )};
        `);

    //non cancer injections by yours truly
    //THIS CANNOT BE HOISTED OR ELSE THE OTHER ONE WINS
    Pt = function (e, t, i, o, n, s, r) {
      t = F[Qe ? "en" : t];
      return t
        ? (t[e] ?? F.en[e])
            ?.replace("`1`", i)
            .replace("`2`", o)
            .replace("`3`", n)
            .replace("`4`", s)
            .replace("`5`", r) ?? e
        : "Loading...";
    };

    Bt.settings.showConsole = false;
    
    function msgEnableConsole() {
      window.top.postMessage("enableConsole", "*");
    }

    function msgtogglePulsehax() {
      window.top.postMessage("togglePulsehax", "*");
    }

    c.logo = function() {
      push(),
      rectMode(CENTER),
      push(),
      translate(width / 2, height / 2),
      noStroke(),
      rotate("menu trans" === Bt.screen ? -s.theta : 0),
      rectMode(CENTER),
      fill(255),
      rect(0, 0, 5 * s.cross, height * s.cross),
      rotate(-s.theta),
      pop(),
      push(),
      translate(width / 2, height / 2),
      translate((width < height ? width : height) / 500 * 5, (width < height ? width : height) / 500 * 5),
      fill(0, 100),
      noStroke(),
      rotate(s.theta),
      rect(0, 0, s.w * s.pulse * ((width < height ? width : height) / 3) + .05 * s.size * ((width < height ? width : height) / 3), s.h * s.pulse * ((width < height ? width : height) / 3) + .05 * s.size * ((width < height ? width : height) / 3)),
      pop(),
      push(),
      translate(width / 2, height / 2),
      rotate(s.theta),
      fill(s.fillC[0], s.fillC[1] / 175 * 125, s.fillC[2] / 255 * 205, s.fillC[3]),
      strokeWeight(.05 * s.size * ((width < height ? width : height) / 3)),
      stroke(s.strC[0], s.strC[1], s.strC[2], s.strC[3]),
      rect(0, 0, s.w * s.pulse * ((width < height ? width : height) / 3), s.h * s.pulse * ((width < height ? width : height) / 3)),
      pop(),
      push(),
      translate(width / 2, height / 2),
      translate((width < height ? width : height) / 500 * 5, (width < height ? width : height) / 500 * 5),
      fill(0, 100),
      noStroke(),
      rotate(s.theta),
      rotate(22.5),
      rect(0, 0, s.w * (s.pulse / 3 * 2 + 1 / 3) * ((width < height ? width : height) / 3) + .05 * s.size * ((width < height ? width : height) / 3), s.h * (s.pulse / 3 * 2 + 1 / 3) * ((width < height ? width : height) / 3) + .05 * s.size * ((width < height ? width : height) / 3)),
      pop(),
      push(),
      translate(width / 2, height / 2),
      rotate(s.theta),
      rotate(22.5),
      fill(s.fillC[0], s.fillC[1], s.fillC[2], s.fillC[3]),
      strokeWeight(.05 * s.size * ((width < height ? width : height) / 3)),
      stroke(s.strC[0], s.strC[1], s.strC[2], s.strC[3]),
      rect(0, 0, s.w * (s.pulse / 3 * 2 + 1 / 3) * ((width < height ? width : height) / 3), s.h * (s.pulse / 3 * 2 + 1 / 3) * ((width < height ? width : height) / 3)),
      noStroke(),
      rotate(-22.5),
      rotate(-s.theta),
      textStyle(BOLD),
      $e = "",
      textAlign(CENTER, CENTER),
      textSize(s.size * (s.pulse / 3 + 2 / 3) / 500 * 250 * ((width < height ? width : height) / 3)),
      fill(0, s.strC[3] / 255 * 100),
      text("Pulsehax", 0 + (width < height ? width : height) / 500 * 5, 0 + (width < height ? width : height) / 500 * 5),
      fill(s.strC[0], s.strC[1], s.strC[2], s.strC[3]),
      text("Pulsehax", 0, 0),
      (push(),
      scale(s.size * (s.pulse / 3 + 2 / 3)),
      textSize((width < height ? width : height) / 3 * .5 / 5),
      fill(0, s.strC[3] / 255 * 100),
      text("Unofficial Client", 4 * -kt + (width < height ? width : height) / 500 * 1.15, 3 * kt + (width < height ? width : height) / 500 * 1.15),
      fill(s.strC[0], s.strC[1], s.strC[2], s.strC[3]),
      text("Unofficial Client", 4 * -kt, 3 * kt),
      pop()),
      !0 === Xe.active && (fill(255, 0, 0, s.strC[3]),
      text("ADMIN", 0, height / 4)),
      pop(),
      pop(),
      fill(s.strC[0], s.strC[1], s.strC[2], s.strC[3]),
      textAlign(CENTER, BOTTOM),
      textSize(kt),
      text("Access the Pulsehax menu and Developer console in settings!", width / 2, height - kt),
      Kt(width - 7 * kt, height - 7 * kt * (s.strC[3] / 255), 6 * kt, 6 * kt, "", Bt.account.buttonHover, 19, {
          discord: !0
      })
    };

    function Cs() {
      background(255);
      var e = width > height ? width / 64 : height / 64
        , t = (fill(0, s.textA),
      textSize(100),
      textAlign(CENTER, CENTER),
      Pt("welcome", xt) + (1 === s.wave ? " o/" : ""))
        , i = (fill(0, 0),
      Dt(t, width / 2, height / 2, width / 4, height / 4),
      split(t, ""));
      textAlign(LEFT, CENTER),
      textSize(5 * e),
      noStroke();
      for (var o, n = 0; n < i.length; n++)
          void 0 !== Ze[n] ? (push(),
          translate(0, 8 * e * Ze[n]),
          fill(0, 255 - 255 * (abs(Ze[n]) < .25 ? 4 * abs(Ze[n]) : 1)),
          o = textWidth(t.substr(0, n)),
          text(i[n], width / 2 + o - textWidth(t) / 2, height / 2),
          s.drop ? Ze[n] += At(pow(-1, n), Ze[n], .15 * Ze.length / 7 * (n < Ze.length - 1 ? abs(Ze[n + 1]) : 1)) : Ze[n] += At(0, Ze[n], (.075 - .03 * n / i.length) * (0 < n ? abs(abs(Ze[n - 1]) - 1) : 1)),
          pop()) : Ze[n] = pow(-1, n);
      !1 === s.drop && (rectMode(CORNER),
      fill(190),
      rect(0, 0 - height / 2 * (1 - abs(Ze[3])) * 1, width, height / 2),
      rect(0, height / 2 + height / 2 * (1 - abs(Ze[3])) * 1, width, height / 2),
      fill(130),
      rect(0, 0 - height / 2 * (1 - abs(Ze[2])) * 1, width, height / 2),
      rect(0, height / 2 + height / 2 * (1 - abs(Ze[2])) * 1, width, height / 2),
      fill(70),
      rect(0, 0 - height / 2 * (1 - abs(Ze[1])) * 1, width, height / 2),
      rect(0, height / 2 + height / 2 * (1 - abs(Ze[1])) * 1, width, height / 2),
      fill(10),
      rect(0, 0 - height / 2 * (1 - abs(Ze[0])) * 1, width, height / 2),
      rect(0, height / 2 + height / 2 * (1 - abs(Ze[0])) * 1, width, height / 2),
      fill(255),
      textAlign(CENTER, CENTER),
      Dt(Pt("clickToPlay", xt), width / 2, height - height / 8 + height / 2 * (1 - abs(Ze[0])) * 1, width, height / 32),
      5e3 <= millis() - s.startTime) && (s.drop = !0,
      s.dropTime = millis()),
      !1 === s.drop ? s.textA += At(255, s.textA, .1) : (s.textA += At(0, s.textA, .1),
      push(),
      rectMode(CENTER),
      translate(width / 2, s.boxY),
      noStroke(),
      rotate("menu trans" === Bt.screen ? -s.theta : 0),
      rectMode(CENTER),
      fill(255),
      rect(0, 0, 5 * s.cross, height * s.cross),
      rotate(-s.theta),
      fill(s.fillC[0], s.fillC[1] / 175 * 125, s.fillC[2] / 255 * 205, s.fillC[3]),
      strokeWeight(.05 * s.size * ((width < height ? width : height) / 3)),
      stroke(s.strC[0], s.strC[1], s.strC[2], s.strC[3]),
      rect(0, 0, s.size * ((width < height ? width : height) / 3), s.size * ((width < height ? width : height) / 3)),
      rotate(22.5 * s.size),
      fill(s.fillC[0], s.fillC[1], s.fillC[2], s.fillC[3]),
      strokeWeight(.05 * s.size * ((width < height ? width : height) / 3)),
      stroke(s.strC[0], s.strC[1], s.strC[2], s.strC[3]),
      rect(0, 0, s.size * ((width < height ? width : height) / 3), s.size * ((width < height ? width : height) / 3)),
      noStroke(),
      rotate(-22.5 * s.size),
      rotate(s.theta),
      textStyle(BOLD),
      $e = "",
      textAlign(CENTER, CENTER),
      textSize(+s.size / 500 * 250 * ((width < height ? width : height) / 3)),
      fill(0, s.strC[3] / 255 * 100),
      text("Pulsehax", 0 + (width < height ? width : height) / 500 * 5, 0 + (width < height ? width : height) / 500 * 5),
      fill(s.strC[0], s.strC[1], s.strC[2], s.strC[3]),
      text("Pulsehax", 0, 0),
      (push(),
      scale(+s.size),
      textSize((width < height ? width : height) / 3 * .5 / 5),
      fill(0, s.strC[3] / 255 * 100),
      text("Unnoficial Client", 4 * -e + (width < height ? width : height) / 500 * 1.15, 3 * e + (width < height ? width : height) / 500 * 1.15),
      fill(s.strC[0], s.strC[1], s.strC[2], s.strC[3]),
      text("Unnoficial Client", 4 * -e, 3 * e),
      pop()),
      !0 === Xe.active && (fill(255, 0, 0, s.strC[3]),
      text("ADMIN", 0, height / 4)),
      pop(),
      millis() < s.dropTime + 1e3 ? (s.boxY = Bi(millis() - s.dropTime, millis() - s.dropTime, 0, height / 2, 999),
      s.size = fi(millis() - s.dropTime, millis() - s.dropTime, 100, 250, 999) / 350,
      s.theta = fi(millis() - s.dropTime, millis() - s.dropTime, 0, -540, 999),
      s.fillC[0] = vi(millis() - s.dropTime, millis() - s.dropTime, 0, 0, 999),
      s.fillC[1] = vi(millis() - s.dropTime, millis() - s.dropTime, 0, 175, 999),
      s.fillC[2] = vi(millis() - s.dropTime, millis() - s.dropTime, 0, 255, 999),
      s.fillC[3] = vi(millis() - s.dropTime, millis() - s.dropTime, 255, 0, 999),
      s.strC[0] = vi(millis() - s.dropTime, millis() - s.dropTime, 0, 255, 999),
      s.strC[1] = vi(millis() - s.dropTime, millis() - s.dropTime, 0, 255, 999),
      s.strC[2] = vi(millis() - s.dropTime, millis() - s.dropTime, 0, 255, 999),
      s.strC[3] = vi(millis() - s.dropTime, millis() - s.dropTime, 255, 0, 999)) : (s.fillC[0] = 0,
      s.fillC[1] = 175,
      s.fillC[2] = 255,
      s.fillC[3] = 255,
      s.strC[0] = 255,
      s.strC[1] = 255,
      s.strC[2] = 255,
      s.strC[3] = 255,
      s.boxY = height / 2,
      s.size = 1,
      s.w = s.size,
      s.h = s.size,
      to(),
      He = "menu"))
  }
  

    Bt.settings.menu.pages[0].items.push({
      type: "button",
      hint: "NOTE: YOU NEED TO SWITCH THE IFRAME FROM top TO play/ AT THE TOP OF YOUR CONSOLE FOR IT TO WORK",
      name: "Enable Developer Console",
      event: msgEnableConsole
    });

    Bt.settings.menu.pages[0].items.push({
      type: "button",
      hint: "Brings up Pulsehax",
      name: "Show Pulsehax Settings",
      event: msgtogglePulsehax,
    });

    clickMenu.screens.accountSignedIn = clickMenuBuffer.accountSignedIn;
    clickMenu.screens.accountSignedOut = clickMenuBuffer.accountSignedOut;
    clickMenu.screens.click = clickMenuBuffer.click;
    clickMenu.screens.logo = clickMenuBuffer.logo;
    clickMenu.screens.header = clickMenuBuffer.header;
    clickMenu.screens.nav = clickMenuBuffer.nav;
    musicManager.musicTime = function () {
      var e;
      1 === soundManager.getSoundById("menuMusic").playState &&
        (soundManager.stop("menuMusic"),
        soundManager.setVolume(game.song, menu.settings.musicVolume)),
        !1 === game.edit &&
          (!1 === game.preLevelStart && (game.preLevelStart = millis()),
          5e3 <=
            millis() -
              game.preLevelStart +
              (game.songOffset + game.mods.offset + menu.settings.offset) &&
          !game.songPlaying &&
          !game.paused
            ? (lvlHowl[game.song].rate(game.mods.bpm),
              lvlHowl[game.song].volume(menu.settings.musicVolume / 100),
              (e = lvlHowl[game.song].play()),
              lvlHowl[game.song].seek(
                (game.songOffset + game.mods.offset + menu.settings.offset) /
                  1e3 +
                  ((game.skipIntro ? game.beat[0]?.[1] || 0 : 0) *
                    game.mods.bpm) /
                    (game.bpm / 60) -
                  5,
                e
              ),
              (game.songPlaying = !0))
            : game.paused &&
              (lvlHowl[game.song].pause(), (game.songPlaying = !1))),
        game.edit ||
          !1 !== game.songEnded ||
          lvlHowl[game.song].on("end", function () {
            game.songEnded = [millis(), lvlHowl[game.song].duration];
          }),
        !1 !== game.edit ||
          game.paused ||
          1 !== game.disMode ||
          (!1 !== game.songPlaying ||
          (!1 !== toLoad && "hidden" !== toLoad) ||
          !1 === game.preLevelStart
            ? (-1e3 <
                (((e =
                  (((!1 === game.songEnded
                    ? lvlHowl[game.song].seek()
                    : lvlHowl[game.song].duration() +
                      (!1 === game.songEnded
                        ? 0
                        : ((millis() - game.songEnded[0]) / 1e3) *
                          game.mods.bpm)) -
                    (game.songOffset +
                      game.mods.offset +
                      menu.settings.offset) /
                      1e3) *
                    (game.bpm / 60)) /
                  game.mods.bpm) -
                  game.time) *
                  game.mods.bpm) /
                  (game.bpm / 60) ||
                "set" === game.time) &&
              (game.time = e)
            : (game.time =
                (((millis() - game.preLevelStart - 5e3) / 1e3) *
                  (game.bpm / 60)) /
                game.mods.bpm));
    };
    if (menu.PHSettings.customTheme) {
      menu.settings.menu.pages[0].items[2].options.push(10);
      menu.settings.menu.pages[0].items[2].labels.push("theme_CUSTOM");
    }
    if (menu.PHSettings.additionalThemes) {
      menu.settings.menu.pages[0].items[2].options.push(11, 12, 13, 14, 15);
      menu.settings.menu.pages[0].items[2].labels.push(
        "theme_addt_gufo",
        "theme_addt_floopy",
        "theme_addt_shia",
        "theme_addt_lilyyy",
        "theme_addt_axye"
      );
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.shiftKey && e.ctrlKey && menu.screen === "lvl") {
      if (e.code === "KeyC") {
        if (getLevelDownloadState(clevels[menu.lvl.sel]) == 2) {
          if (
            confirm(
              `Copy ${newGrabLevelMeta(clevels[menu.lvl.sel], "id").title}?`
            )
          )
            if (typeof clevels[menu.lvl.sel] == "number") {
              copyLevel(clevels[menu.lvl.sel]);
              levels.saved[levels.saved.length - 1].stars = calcLevelStars(
                clevels[menu.lvl.sel]
              );
            } else {
              levels.saved.push(copyObject(clevels[menu.lvl.sel]));
              levels.saved[levels.saved.length - 1].title += "(copy)";
            }
          if (menu.lvl.tab == 0) {
            levels.search = levels.saved;
          }
        }
      } else if (e.code === "KeyE" && clevels[menu.lvl.sel]?.local) {
        if (!confirm(`Export ${clevels[menu.lvl.sel].title}.phz?`)) {
          return;
        }
        let zip = new JSZip();
        let response = clevels[menu.lvl.sel];
        zip.file(
          `${response.title.replace(/[^a-zA-Z0-9 ]/g, "")}.json`,
          JSON.stringify(response)
        );
        zip
          .generateAsync({ type: "blob", compression: "DEFLATE" })
          .then(function (blob) {
            const a = document.createElement("a");
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = `${response.title}.phz`;
            a.click();
            URL.revokeObjectURL(url);
          });
      } else if (e.code === "KeyI") {
        if (!confirm("Import Maps?")) {
          return;
        }
        importMapAction.click();
      }
    }
    if (menu.screen === "lvl" && clevels.length > 0 && screen === "menu") {
      let maxScroll =
        height -
        (height / 16 +
          height / 24 +
          (height - (height / 16 + height / 24)) / 12);
      if (e.code === "F1") {
        menu.lvl.sel = parseInt(Math.random() * clevels.length);
        menu.lvl.scroll = (menu.lvl.sel * maxScroll) / (clevels.length - 1);
        lowLag.play("scroll", menu.PHSettings.sfxVolume / 100);
      }
      if (e.code === "ArrowUp") {
        let selBuffer = menu.lvl.sel;
        menu.lvl.sel -= 0 === menu.lvl.sel ? 0 : 1;
        menu.lvl.scroll = (menu.lvl.sel * maxScroll) / (clevels.length - 1);
        if (selBuffer === menu.lvl.sel) {
          return;
        }
        lowLag.play("scroll", menu.PHSettings.sfxVolume / 100);
      }
      if (e.code === "ArrowDown") {
        let selBuffer = menu.lvl.sel;
        menu.lvl.sel =
          clevels.length - 1 === menu.lvl.sel
            ? menu.lvl.sel
            : menu.lvl.sel === false
            ? 0
            : menu.lvl.sel + 1;
        menu.lvl.scroll = (menu.lvl.sel * maxScroll) / (clevels.length - 1);
        if (selBuffer === menu.lvl.sel) {
          return;
        }
        lowLag.play("scroll", menu.PHSettings.sfxVolume / 100);
      }
      if (e.code === "Enter" && game.quickPlayEnabled) {
        if (getLevelDownloadState(clevels[menu.lvl.sel]) == 2 && !game.edit) {
          game.edit = false;
          game.replay.on = false;
          loadLevel(menu.lvl.sel);
          lowLag.play("load", menu.PHSettings.sfxVolume / 100);
        } else {
          server.newGLRequested[Rt[menu.lvl.sel]] = true;
          newGrabLevel(clevels[menu.lvl.sel], "id", true);
        }
      }
    }
    if (
      e.code === "Tab" &&
      game.edit === false &&
      game.disMode === 1 &&
      screen === "game"
    ) {
      game.retry = true;
      game.quickRetry = true;
      lowLag.play("retry", menu.PHSettings.sfxVolume / 100);
    }
  });
});

window.addEventListener(
  "InjectedScriptEval",
  function (evt) {
    try {
      response = JSON.parse(
        JSON.stringify(eval(evt.detail) ?? null, getCircularReplacer())
      );
    } catch (error) {
      console.error(error);
      response = undefined;
    }
    var evalEvent = new CustomEvent("InjectedScriptResponse", {
      detail: response,
    });
    window.dispatchEvent(evalEvent);
  },
  false
);

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
