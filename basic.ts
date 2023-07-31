//type let only valid for its scope 
//type var is valid within the nearest function scope
//when compiling this there is a Compile error that the varible i cannot access but it gives output cause tsp convert let to var


function test(){
	for(let i = 0 ; i<10 ; i++){
		console.log(i);
	}

	console.log("Finally : "+i);
	
}

test();