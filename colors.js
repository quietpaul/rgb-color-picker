var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headerBG = document.querySelector("#header");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	// Generate all new colors
	colors = generateRandomColors(numSquares);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// Change colors of squares on page
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	// Reset Header color
	headerBG.style.backgroundColor = "steelblue"
	// Reset "reset" button
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	// Add click listeners to squares
	squares[i].addEventListener("click", function(){
		// Grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// Compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			headerBG.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
};

function changeColors(color){
	// Loop through all squares.
	for(var i = 0; i < squares.length; i++)
		// Change each one to match given color.
		squares[i].style.backgroundColor = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
};

function generateRandomColors(num){
	// Make an array
	var arr = []
	// Add 'num' random colors to array - repeat 'num' times.
	for(var i = 0; i < num; i++){
		// Get random color and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
};

function randomColor(){
	// pick a "red" 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};

