const { app, BrowserWindow,screen } = require("electron");
const path = require("path");


require("@electron/remote/main").initialize();

function createWindow() {
  // Create the browser window.
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  const win = new BrowserWindow({
    width,
    height,
    // fullscreen: true, // Set the app to open in fullscreen mode
    // resizable: false, // Set the app to be non-resizable
    icon: path.join(__dirname, "transparent-logo.ico"),
    webPreferences: {
      enableRemoteModule: true,
    },
  });
  //enableRemoteModule
  // this will allow us to run functions in
  // the background process triggered by
  // events happening in react components 
  win.setMinimumSize(800, 700) 
  win.loadURL("http://localhost:3000");
  
} 

app.on("ready", createWindow);

app.whenReady().then(() => {
  const iconPath = path.join(__dirname, "transparent-logo.ico");
  app.setWindowIcon(iconPath);
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
