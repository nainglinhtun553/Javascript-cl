// array
var number=new Array(1,2,3,"mg mg","Naing Lin Htun");
console.log(number[3]);


// simple array
var fruits=["mango","banana","apple","orange"];

for(var i=0; i<fruits.length;i++){
	console.log(i+"."+fruits[i]);
}


//associated array

var associatedArray=[];
associatedArray["name"]="mg mg";
associatedArray['age']=20;


var asso1={
	'name':'Kyaw Kyaw',
	'age': 30,

	greeting(){
		console.log(`Hello ${this.name}`);
	},

};



var num1=[1,2,3];

num1.push(4,5,6);


num2=[num1,4,5,6];
// num1.unshift(4,5,6);







// add data
console.log(num2);




console.log(fruits);
console.log(associatedArray["name"]);
console.log(asso1.greeting());






