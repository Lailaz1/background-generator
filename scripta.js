var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var favbtn=document.getElementById("fav");





function setGradient(){
	body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + "," 
        + color2.value 
        + ")";
       
       //window.addEventListener('load', function() {
        css.textContent = body.style.background + ";";

}

function randomize(){
	color1.value='#'+Math.floor(Math.random()*16777215).toString(16);
	color2.value='#'+Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}



//window.addEventListener('load', function() {
	//color1.value = body.style.background;
//})

window.addEventListener("onload", setGradient());   //match background 

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

favbtn.addEventListener("click", randomize)	;


