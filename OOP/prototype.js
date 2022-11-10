// 1.constructor
function Magazine(title,author,year){
	this.title=title;
	this.author=author;
	this.year=year;
	
}

	//2.prototype
	Magazine.prototype.getTitle= function (){
		return `this title is ${this.title} written by ${this.author} & production at ${this.year}`;
	};

	Magazine.prototype.getYears=function(){
		const year=new Date().getFullYear()-this.year;
		console.log(year);
		return `this ${this.title} is written by ${this.author} and years =${year}`;

	}

var maga=new Magazine("OOP","Aung Aung","2000");
console.log(maga.getTitle());

// 3.call constructor with prototype.
console.log(maga.getYears());