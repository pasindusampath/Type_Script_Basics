//->	Interfaces in ts
//->	when caling function point we should agree to the interface policy and we cannot send another data except 
//		object that agree to this interface
//->	It gives more Accuracy 

interface Point{
	x:number;
	y:number;
	draw:(ob:Point)=>void

}

function point(ob:Point){
	console.log(ob.x);
}

//Here we creating object using Point Interface Like Java Anonymous Inner Class And Passing it to point function
point({x:20,y:10,draw:()=>{}});