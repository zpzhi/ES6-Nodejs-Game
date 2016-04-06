export function random_int_inc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

export function random_result(){
	let array = [];
	console.log("get the data from client");
	for (let i=0; i<3; i++){
		array[i] = random_int_inc(0, 5);	
	}
	return array;
}

export function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

        