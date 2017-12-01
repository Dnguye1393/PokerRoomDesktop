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

//Handle Create add Window
function createAddWindow(){
  addWindow = new BrowserWindow({
    width: 300,
    height: 600,
    title:'New Table'
  });
  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'addWindow.html'),
    protocol: 'file:',
    slashes: true
  }));
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
          app.quit();
        }
      }
    ]
	}
];
