"use strict";

const { contextBridge, ipcRenderer, clipboard } = require("electron");

const electronAPI = {
    readClipboardText : () => clipboard.readText(),
    sendSyncIPCRequest : (channelName, message) => ipcRenderer.sendSync(channelName, message),
    IPCSend : (message) => ipcRenderer.send(message)
}

contextBridge.exposeInMainWorld("electronAPI", electronAPI);

const browserAction = import('electron-chrome-extensions/dist/browser-action.js')

// Inject <browser-action-list> element into our page
if (location.href === 'webui://browser-chrome.html') {
  browserAction.injectBrowserAction()
}