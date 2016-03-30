var socket = io();

$('#imgbutton').on('click', function(event){
    socket.emit('bingo request', {id: event.target});
});

socket.on('bingo response', function (data) {
	console.log('return back: ', data);
	if (data.length > 3){
		drawImage(data);
	}
	if (data.length == 5 && data[4] == "bonus"){
		alert("You get a bonus: One more chance will be tringger automaically");
		socket.emit('bingo request', {id: event.target});
	}
});

socket.on('hi', function (data) {
    $('#win-results').text("Welcome to Play!");
});


function drawImage(data){

        $('#image1').attr("src","Symbol_"+data[0]+".png");
        $('#image2').attr("src","Symbol_"+data[1]+".png");
        $('#image3').attr("src","Symbol_"+data[2]+".png");
   
  	var result = data[3];
  	$('#win-results').text(result);
}




