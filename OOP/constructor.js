// constructor 
var str="hello";// string
var ob=new String("hello");// object


// literal
const book= {
	title:"Myanmar",
	year: "2021",
	getTitle: function (){
		return `this title is ${this.title}`;

	},
};
console.log(book.getTitle());
console.log(Object.values(book));

// constructor
function Magazine(title,author,year){
	this.title=title;
	this.author=author;
	this.year=year;
	this.getTitle= function (){
		return `this title is ${this.title}`;
	};

}
// create objects
var maga=new Magazine("english","Mg Mg","2021");
console.log(maga);
console.log(maga.getTitle());

