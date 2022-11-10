// document.getElementById("clickbtn").addEventListener("click",function(){
// 	alert("h1");
// });

// let title=document.querySelector(".title");
// click event 
// document.getElementById("red").addEventListener("click",function(){
// 	alert("Are you sure to change the text with red color.");
// 	title.innerHTML="RED";
// 	title.style.color="red";
// });


// document.getElementById("blue").addEventListener("click",function(){
// 	alert("Are your sure to change the text with blue color.");
// 	title.innerHTML="BLUE";
// 	title.style.color="blue";
// });



// mouseover event

let title=document.querySelector(".title");

document.getElementById("red").addEventListener("mouseover",function(){
	// alert("Are you sure to change the text with red color.");
	title.innerHTML="RED";
	title.style.color="white";
	title.style.backgroundColor="red";
});



// mouseout
document.getElementById("blue").addEventListener("mouseout",function(){
	// alert("Are your sure to change the text with blue color.");
	title.innerHTML="BLUE";
	title.style.color="white";
	title.style.backgroundColor="blue";
});










