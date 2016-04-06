import { random_result, random_int_inc, htmlEntities } from './modules/helper';

let game = require('./modules/game');

let gm = new game();
gm.initialize();
let wsServer = gm.start();

wsServer.on('request', request=> {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

    var connection = request.accept(null, request.origin); 
    connection.sendUTF(JSON.stringify( { type: 'welcome', data: "Welcome to play"} ));
    console.log("send welcome message");
   
    // user sent some message
    connection.on('message', function(message) {
        if (message.type === 'utf8') { // accept only text
            console.log(' Received Message from client:' + message.utf8Data);
            if (htmlEntities(message.utf8Data) === "bingo request"){
              let array = random_result();
              let win = gm.return_win(array);
              array.push(win);
              array.push("no bonus");
              if (random_int_inc(0, 5) == 5 && array.length == 5){
                array[4] = "bonus";
              }

              let json = JSON.stringify({ type:'bingo response', data: array });
              connection.sendUTF(json);
            }
        }
    });

    // user disconnected
    connection.on('close', function(connection) {
        console.log((new Date()) + " Peer "
                + connection.remoteAddress + " disconnected.");
    });

});