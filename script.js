//I create a table with colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
//Now I want to asign to all of the squares colors from the table. I will use a loop to do it.
//selecting squares
var squares = document.querySelectorAll('.square');
//starting with picked color
var pickedColor = colors[3];
//adding span with class colorDisplay to html h1 element and selecting it by id
var colorDisplay = document.getElementById('colorDisplay');
//looping through the squares from the table and a matching colors with squares

for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            alert("well done!");
        }else {
            alert("WRONG!");
        }
    });
}
