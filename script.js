//I create a table with colors
var numSquares = 6;
var colors = generateRandomColors(numSquares);
// [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]
//Now I want to asign to all of the squares colors from the table. I will use a loop to do it.
//selecting squares
var squares = document.querySelectorAll('.square');
//starting with picked color
var pickedColor = pickColor();
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    numSquares = 3;
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
      if(colors[i]){
        squares[i].style.background = colors[i];
      } else{
        squares[i].style.display = "none";
      }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    //change colors of squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});


//adding span with class colorDisplay to html h1 element and selecting it by id
var colorDisplay = document.getElementById('colorDisplay');

var messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;


//looping through the squares from the table and a matching colors with squares
for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "steelblue";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color){
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
        }
 }


function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors to array
    for(var i=0; i <num; i++){
    //get random color and push into array
    arr.push(randomColor())
    }
    //return that array
    return arr;
}
function randomColor(){
    //   pick red from 0 - 255
     var r = Math.floor(Math.random()*256);
    //   pick green from 0 - 255
     var g = Math.floor(Math.random()*256);
    //   pick blue from 0 - 255
     var b = Math.floor(Math.random()*256);
    //rgb
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
