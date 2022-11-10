// white loop
//while loop is checking from start.
// let number=1;

// while(number<=10) {
// 	document.write("the number is"+" "+ number+"<br>");
// 	number++;
// }
// console.log("end");


// do while loop
// do while loop is checking from end.

//do while loop is user allowed doing right or wrong of the first time.

// let number =100;
// let number =1;

// do{
// 	console.log("the number is "+number);
// 	number++;
// }while(number <=10);
// console.log("the end");





// for looping
// format
// for(declearation, condition, icreasement or decreasment){}
// for(let number=0; number<=5;number++){
// 	console.log(number);

// }



let num1,num2;
num1=parseInt(prompt("Enter number1 less than or equal to 5"));
//
while(num1 > 5) {
	num1=parseInt(prompt("Enter number1 less than or equal to 5"));
}


num2=parseInt(prompt("Enter number2 grater than 5"));
while(num2 <= 5){
	num2=parseInt(prompt("Enter number2 grater than 5"));
}

for(num1;num1<=num2;num1++) {
	console.log(num1);
}


