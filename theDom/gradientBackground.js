var css = document.querySelector('h3');
var color = document.querySelector('.color');
var color1 = document.querySelector('.color1');
var body = document.getElementById('gradient')

function colorchanger() {
	body.style.background = 
	"linear-gradient(to right, "
	 + color.value +", "
	 + color1.value 
	 + ")";
	 css.textContent = body.style.background + ";";
}

color.addEventListener("input",colorchanger);
color1.addEventListener("input",colorchanger);