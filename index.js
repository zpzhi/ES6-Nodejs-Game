import { random_result, random_int_inc } from './modules/helper';
let game = require('./modules/game');

let gm = new game();
gm.initialize();
let io = gm.start();

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('hi');
  socket.on('bingo request', function (data) {
        let array = random_result();
        let win = gm.return_win(array);
        array.push(win);
        array.push("no bonus");
        if (random_int_inc(0, 5) == 5 && array.length == 5){
          array[4] = "bonus";
        }

        //io.emit('myClick', "some data");
        socket.emit('bingo response', array);
    });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
 