const fs = require("fs");
const path = require("path");
const { BrowserWindow, ipcMain } = require("electron");

function updateStyle(webContents) {
  const csspath = path.join(__dirname, "style.css");
  fs.readFile(csspath, "utf-8", (err, data) => {
    if (!err) {
      webContents.send("LiteLoaderQQNT.custom_css.updateStyle", data);
    }
  });
}

function onLoad() {
  ipcMain.on("LiteLoaderQQNT.custom_css.rendererReady", (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    updateStyle(window.webContents);
  });
}

module.exports = {
  onLoad,
};
