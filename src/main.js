const electron = require('electron')
const url = require('url')
const path = require('path')
var log = require('electron-log');

log.info('App is starting');

const {
  app,
  BrowserWindow,
	Menu
} = electron;

let mainWindow;

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
//create Menu Template
const mainMenuTemplate= [
	{
		label:'File',
    submenu:[
      {
        label:  'Add Table'
      },
      {
        label: 'Clear Tables'
      },
      {
        label: 'Quit',
        click(){
          log.info('App is closing');
          app.quit();
        }
      }
    ]
	}
];
