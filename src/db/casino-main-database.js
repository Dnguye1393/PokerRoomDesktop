var Datastore = require('nedb');
const path = require('path')
var log = require('electron-log');

exports.initDatabase = function(){
  //Add Option later for Verbose debugging
  //log.info( 'Loading Database at: ' + path.join(__dirname,'data/casino.db'));
  var db = new Datastore({filename: path.join(__dirname,'data/casino.db'), autoload:true});

  log.info('Initalize Database');

  db.loadDatabase(function(err){

  });
};
