// const book={
// 	title:"BB",
// 	year:"2022",
// 	getTitle:function(){
// 		return`this title ${this.title}`;
// 	},

// };

// book.title="222";
// console.log(book);


// // var book1=Object.create(book);
// // // console.log(book1);
// // book1.title="book1";
// // book1.year="3000";
// // console.log(book1.year);


// var book1=Object.create(book,{
// 	title:{value:"mynmar"},
// 	year:{value:4000},
// });
// console.log(book1);


// class
class Book{
	constructor(title,author,year){
		this.title=title;
		this.author=author;
		this.year=year;

	}

	// create a function in constructor.
	settitle(){
		this.title="english";
	}
	static show(){
		console.log("morning");
	}

	greeting(){
		console.log("good night");
	}
}
const book1=new Book("myanmar","mg mg",1000);
console.log(book1);

// call a settitle function constructor
// book1.settitle();

// output the result
// console.log(book1);

book1.greeting();

// declearation with static keyboards so call with a class and function.
Book.show();



class Magazine extends Book{
	constructor(title,author,year,month){
		super(title,author,year);

		
	}
}

var maga=new Magazine("OOP","aung",2020,"Augest");
console.log(maga);