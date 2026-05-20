const { app, BrowserWindow } = require('electron');

const path = require('path');



function createWindow() {

    const win = new BrowserWindow({

        width: 1400,
        height: 900,

        minWidth: 1000,
        minHeight: 700,

        backgroundColor: '#0f172a',

        webPreferences: {

            contextIsolation: true,
            nodeIntegration: false,

            preload: path.join(
                __dirname,
                'preload.js'
            )

        }

    });



    win.loadFile(
        path.join(
            __dirname,
            'src/index.html'
        )
    );



    // DEVTOOLS
    win.webContents.openDevTools();
    win.removeMenu();

}




app.whenReady().then(() => {

    createWindow();


});



app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {

        app.quit();

    }

});



app.on('activate', () => {

    if (
        BrowserWindow.getAllWindows().length === 0
    ) {

        createWindow();

    }

});