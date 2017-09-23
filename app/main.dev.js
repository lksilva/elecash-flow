/* eslint global-require: 1, flowtype-errors/show-errors: 0 */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */
import { app, BrowserWindow } from 'electron';
import MenuBuilder from './menu';
import { MongoClient } from 'mongodb';
import { dialog } from 'electron';
import { shell } from 'electron';
// import { exec } from 'child_process';
import { execFile } from 'child_process';
// import { spawn } from 'child_process';

function execute() {
  // return new Promise((resolve, reject) => {
  //   spawn('npm', ['run', ' mongo-win'], { shell: true }, (error, stdout, stderr) => {
  //     if (error) {
  //       reject(stderr);
  //     } else {
  //       resolve(stdout);
  //     }
  //   });
  // });
  return new Promise((resolve, reject) => {
    execFile('npm', ['run', ' mongo-win'], (error, stdout, stderr) => {
      if (error) {
        console.log('####Error', error);
        console.log('####STDERR', stderr);
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}

function connectToMongoDB() {
  return new Promise(resolve => {
    execute().then((stdout, stderr) => {
      console.log('Promisse resolved');
      resolve(stdout);
    }).catch(stderr => {
      console.log('Promisse catch');
      resolve(stderr);
    });
  });
}

let mainWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
  require('electron-debug')();
  const path = require('path');
  const p = path.join(__dirname, '..', 'app', 'node_modules');
  require('module').globalPaths.push(p);
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ];

  return Promise
    .all(extensions.map(name => installer.default(installer[name], forceDownload)))
    .catch(console.log);
};


/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  console.log('Conectando a base de dados...');
  await connectToMongoDB();
  console.log('Conectado a base de dados...');

  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  const url = 'mongodb://localhost:27017/oticas-db';
  MongoClient.connect(url, (err, db) => {
    if (err) {
      shell.beep();
      dialog.showErrorBox('ERRO DE CONEXÃO', 'Houve uma falha ao tentar conectar-se com o banco de dados. Para o correto funcionamento do aplicação regularize sua conexão!!!');
      return;
    }
    global.db = db;
  });

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.maximize();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();
});
