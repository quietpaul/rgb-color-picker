var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headerBG = document.querySelector("#header");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	// Mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
};

function setupModeButtons(){
	for (var i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	};
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
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
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none"
		}
	}
	headerBG.style.backgroundColor = "steelblue"
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
});

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

