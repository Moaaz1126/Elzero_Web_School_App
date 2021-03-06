const { app, BrowserWindow } = require('electron');
const { Menu } = require('electron')
const path = require('path');
const { electron } = require('process');
const { shell } = require('electron')
const AppUpdate = require('./js/update')
// const Menu = electron.Menu
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();

}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 700,
    icon: __dirname + '/img/icon.ico',
    // webPreferences: {
      // devTools: false
    // }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function() {
  createWindow()
  const template = [
    {
      label: "File",
      submenu: [
        { role: 'quit' }
      ]
    },
    {
      label: "Edit",
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    }, 
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' },
        { role: 'close' }
      ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: "WebSite",
          click: function() {
             shell.openExternal("https://elzerowebschoolapp.firebaseapp.com/")
          }
        },
        {
          label: "Updates",
          click: function() {
             shell.openExternal("https://elzerowebschoolapp.firebaseapp.com/update/")
          }
        },
        {
          label: "About",
          click: function() {
             shell.openExternal("https://elzerowebschoolapp.firebaseapp.com/#se")
          }
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
