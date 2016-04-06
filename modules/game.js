import express from 'express';
import path from 'path';

export class game {
  constructor() {
    this.app = express(); 
    this.win_dec = "Big Win!";
    this.nwin_dec = "No Win";
    this.swin_dec = "Small Win :)";
  }

  start (){
    let webSocketServer = require('websocket').server;
    let server = this.app.listen(3000, () => {
      console.log('listening on:3000'); 
    });
    let wsServer = new webSocketServer({
      httpServer: server
    });
    return wsServer;
  }
  
 initialize() {
    // Set Express routes.
    this.app.use(express.static('static'));
    this.app.use(express.static('images'));
    this.app.use(express.static('css'));
    this.app.get('/', (req, res) => {
      res.sendFile(path.resolve('views/index.html'));
    });
  }

  set win_dec(d){
    this._win_dec = d;
  }

  set nwin_dec(d){
    this._nwin_dec = d;
  }

  set swin_dec(d){
    this._swin_dec = d;
  }

  get win_dec() {
    return this._win_dec;
  }

  get swin_dec() {
    return this._swin_dec;
  }

  get nwin_dec() {
    return this._nwin_dec;
  }


  return_win(data){
    if (data.length < 3){
      return false;
    }

    if (data[0] == data[1] && data[0] == data[2]){  
      return this.win_dec;
    }
    else if(data[0] == data[1] || data[0] == data[2] || data[1] == data[2] ){
      return this.swin_dec;
    }
    else {
      return this.nwin_dec;
    }
  }
}

module.exports = game;