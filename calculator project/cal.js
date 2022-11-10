
/*declearation*/
let btn=document.getElementById("btnCalculate");
let result=document.getElementById("result");
let finalResult;
let numOneError=document.getElementById("numOneError");
let NumTwoError=document.getElementById("numTwoError");
let operatorError=document.getElementById("operatorError");
let numOneStatus,
	 numTwoStatus, 
	 operatorStatus=false; // ok false



// firstly hide the error message.
numOneError.style.display="none";
numTwoError.style.display="none";
operatorError.style.display="none";



// writing function for click condition 
btn.addEventListener("click", function (){
	let num1=document.getElementById("firstNumber");
let num2=document.getElementById("secNumber");	
let operator=document.getElementById("operation");
// checkingvalidationstatus
checkValidation(num1,num2,operator);

	
	// checking has or hasn't data in text box.
	if(numOneStatus == false && numTwoStatus == false && operatorStatus == false){
		//convert string to number.
	num1=parseInt(num1.value);
	num2=parseInt(num2.value);
	switch(operator.value) {
		case 'add': 
		finalResult=num1 + num2;
		break;

		case 'subtract': 
		finalResult=num1 - num2;
		break;

		case 'multiply': 
		finalResult=num1 * num2;
		break;

		case 'devide': 
		finalResult=num1 / num2;
		break;


		case 'default': 
		console.log("operation error");
		break;

	}

	//insert to resultbox.
	result.innerHTML=finalResult;
	}
	
});



// creating validation stutus function to check the null error.
function checkValidation(num1,num2,operator) {
	// checking condition for num1 status.
if(num1.value=="" || num1.value == null || num1.value == undefined){
	numOneError.style.display ="block";
	numOneStatus=true;
}else {
	numOneError.style.display="none";
	numOneStatus=false;
}

// checking condition for num2 status.
if(num2.value=="" || num2.value == null || num2.value == undefined){
	numTwoError.style.display ="block";
	numTwoStatus=true;
}else {
	numTwoError.style.display="none";
	numTwoStatus=false;
}

// checking condition for operator status.
if(operator.value=="empty"){
	operatorError.style.display ="block";
	operatorStatus=true;
}else {
	operatorError.style.display="none";
	operatorStatus=false;
}
}


