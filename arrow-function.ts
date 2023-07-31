
//->	Basic Way
let test_function = function doSomething(ob){
	console.log(ob);
}
//calling function
test_function('Hello');

//->	Using Arrow Function
//->	This Same As Java Lambda Expression
//->	If There is more than 1 code lines we can add Curly brackets After (=>)
//->	The ob is a Argument We can add more aguments using (,)
let ar_function = (ob)=>console.log(ob);


//calling arrow function same as basic
ar_function('Hello');
