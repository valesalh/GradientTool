var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

css.textContent = "linear-gradient(to right, " + "rgb(255,0,0)" + ", " + "rgb(255,255,0)" + ");";

function changeGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function generateRandomGradient() {
	color1.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	color2.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	changeGradient();
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
random.addEventListener("click", generateRandomGradient);