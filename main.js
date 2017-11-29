const electron = require('electron')
const url = require('url')
const path = require('path')


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
		label:'File'
	}
];
