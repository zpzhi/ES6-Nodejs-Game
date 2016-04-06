# ES6-Nodejs-Game

Description: Small game simulating bet online.

Development platform: ES6, Nodejs, babel. Test Environment: Mocha, Chai, babel.

How to run:

- Please install nodejs, to be able to use npm
- To start the server, open terminal, run command: npm run dev
- Wait, until display "listening on:3000" in terminal
- Open browser, enter: http://localhost:3000
- To test in different browser and devices, if in the same wifi, get running server ip address, and replace localhost with 
that IP address, and also replace the client.js { var connection = new WebSocket('ws://localhost:3000'); } the localhost with the server ip 
address.

To run unit test:

- run command: npm run test.
- The unit tests are for experiment purposes, only two unit tests will be run.

Tested devices and browsers:

- Mac OSX EI: chrome version 49.0.2623.87, firefox version 45.0.1
- Windows 7: chrome version 49.
- IPhone 5s: safari, chrome version 47.0
- IPad air: safari, chrome version 49.
