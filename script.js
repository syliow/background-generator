var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("background");

var baseColour1 = document.getElementById("intcolor1").value;
var baseColour2 = document.getElementById("intcolor2").value;

// var intColour2 = document.querySelector(


console.log(baseColour1);
console.log(baseColour2);















function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	+color1.value 
	+ "," 
	+ color2.value 
	+")";

	css.textContent = body.style.background + ";";
}

// Color1
color1.addEventListener("input",setGradient);


// Colour2 
color2.addEventListener("input",setGradient);




// color2.addEventListener("input",function(){
// 	body.style.background = 
// 	"linear-gradient(to right, "
// 	+color1.value 
// 	+ "," 
// 	+ color2.value 
// 	+")";
// })

