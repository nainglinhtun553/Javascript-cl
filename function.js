// function


// building a function
// argument function
// function getname(){
// 	console.log("this is a function");

// }

// // call a function.
// getname();



// // one argument function
// function getNumber(num1=100){
// 	console.log(num1);

// }
// getNumber();


// // multi argument function
// function sum(num1=0,num2=0){
// 	console.log(num1+num2);
// }

// sum(10,20);




// // type function vs void function

// // global variable
// var num10=100;

// function testing(){
// 	// local variable
// 	var num1=10;
// 	console.log("from function> " +num1);
// }
// testing();

function typefunction(num1,num2){
 return num1+num2;
}

function voidfunction(num1,num2){

}

var result=typefunction(100,200);
console.log(result);


var greeting =function(name){
	console.log(name);
}

//function with ES6 style

var greeting= (name)=>{
	console.log(name)
}


let gre=()=> {
	console.log("Hello ES6");
}

var one=()=>console.log("Hello");
var two=(a,b)=>console.log(a+b);

greeting("Naing lin Htun");

greeting("Htet Myat Kyaw")

gre();

one();
 two(1,2);





