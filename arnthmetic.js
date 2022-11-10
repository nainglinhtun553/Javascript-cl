// let name="Naing Lin Htun";
let name;

// multiple variable decleartion
let first,second;

first ="naing Lin";
second="htun";

name="Naing Lin Htun";
console.log(name);

console.log(first+" "+second);


// this is global scope
var scope="global";



function checkscope(){
	// this is local scope...
	var scope ="local";
	document.write(scope);
}
checkscope();





let num1=10;
let num2=20;
let result=num1%num2;

// this is increasement
num2++;
//++num2;

// this is decreasement
num1--;
//--num1;

document.write("<br>"+result+"<br>");
document.write("the increasement of num2 is"+" "+num2+"<br>");
document.write("the decreasement of num1 is"+" "+num1+"<br>");



// comparsion operator
//>,<.==.!=,>=.<=.===
// ==  = value
// === =value+datatype

let number1=10;
let number2=50;

document.write(number1 != number2);





