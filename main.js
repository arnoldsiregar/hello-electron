const electron = require('electron');   // electron
const url = require('url');             // node
const path = require('path');           // node

const { app, BrowserWindow, Menu } = electron;

// Declare main window
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow();

    // Load html into mainWindow
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    }));

    // Construct menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // set app's main menu
    Menu.setApplicationMenu(mainMenu);

});

const mainMenuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Submenu 1"
            },
            {
                label: "Submenu 2"
            }
        ]
    },
    {
        label: "Menu1"
    },
    {
        label: "Menu2"
    }
]