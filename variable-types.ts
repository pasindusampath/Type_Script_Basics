//Variable Type Declare In TYPE SCRIPT

let o:any ;//Any Type
let a:number;//Only Numbers Any of java byte,short,int,long,double,float
let b:boolean;//Only Boolean values true,false
let c:string;//string type same as java String
let d:number[]  = [1,2,3];
let f:any[] = [1,true , 'a'];

a=50;
//type casting
c=<string><unknown>a;
a=<number><unknown>c;

console.log(a,c);

const COLOR_RED = 0;
const COLOR_GREEN = 0;
const COLOR_BLUR = 0;

//ENUM Declaring in type Script
enum Color{ RED=0 , GREEN = 1 , BLUE = 2 };
let backgroundColor = Color.BLUE;
console.log(backgroundColor);

