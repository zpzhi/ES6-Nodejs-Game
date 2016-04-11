window.onload = function() {

"use strict";
window.WebSocket = window.WebSocket || window.MozWebSocket;

    // if browser doesn't support WebSocket, just show some notification and exit
if (!window.WebSocket) {
     console.log("doesn't support websocket");
}

// open connection
var connection = new WebSocket('ws://localhost:3000');

var winresult = document.getElementById("win-results");

connection.onopen = function () {
    //alert("connection setup");
    console.log("connection setup");
};


document.getElementById("imgbutton").onclick = function() {
	connection.send('bingo request');
};

/*document.getElementById("imgbutton").addEventListener("touchstart", touchHandler, false);

function touchHandler(e) {
  if (e.type == "touchstart") {
  	alert("click on mobile");
    connection.send('bingo request');
  } 
}
*/
connection.onmessage = function (event) {
	console.log("return back: " + event.data);
	try {
		var json = JSON.parse(event.data);
	} catch (e) {
		console.log('This doesn\'t look like a valid JSON: ', event.data);
		return;
	}

	if (json.type === 'welcome') {
		var message = json.data;
		winresult.innerHTML = message; 
	} 
	else if(json.type == "bingo response"){

		var data = json.data;
   		if (data.length > 3){
			drawImage(data);
		}
		if (data.length == 5 && data[4] == "bonus"){
			alert("You get a bonus: One more chance will be tringger automaically");
			connection.send('bingo request');
		}
	}
}

connection.onerror = function (error) {
    // just in there were some problems with conenction...
    console.log("there is some problem with your connection or the server is down.");
};


function drawImage(data){
	document.getElementById("image1").src="Symbol_"+data[0]+".png";
	document.getElementById("image2").src="Symbol_"+data[1]+".png";
	document.getElementById("image3").src="Symbol_"+data[2]+".png";
   
  	var result = data[3];
  	winresult.innerHTML = result; 
}

};



