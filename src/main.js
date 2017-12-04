const electron = require('electron')
const url = require('url')
const path = require('path')
var log = require('electron-log');
var maindb = require('./db/casino-main-database.js');



log.info('App is starting');
maindb.initDatabase();
const {
  app,
  BrowserWindow,
	Menu
} = electron;

let mainWindow;

//test.printHello();

// Listen for the app to be ready
app.on('ready', function() {
  //create a new window
  mainWindow = new BrowserWindow({});
  //load html file
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));

	//Build menu from the Template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	//Insert menu
	Menu.setApplicationMenu(mainMenu);
});

//Handle Create add Window
function createAddWindow(){
  addWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title:'New Table'
  });
  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'addWindow.html'),
    protocol: 'file:',
    slashes: true
  }));

  addWindow.on('close', function(){
    addWindow = null;
  })
}


//create Menu Template
const mainMenuTemplate= [
	{
		label:'File',
    submenu:[
      {
        label:  'Add Table',
        click(){
          createAddWindow();
        }
      },
      {
        label: 'Clear Tables'
      },
      {
        label: 'Quit',
        //Shortcut
        accelerator: process.platform == 'darwin' ? 'Command+Q': 'Ctrl+Q',
        click(){
          log.info('App is closing');
          app.quit();
        }
      }
    ]
	}
];
