$(document).ready(function() {

var rows = 8;
var columns = 8;
var $row = $("<div />", {
	class: 'row'
});
var $square = $("<div />", {
	class: 'square'
});





/* Click Button, fade out old grid, get new grid!
 create a span, create div x times
 repeat x times */

var addDiv = function(columns, rows) {
	alert("addDiv");
	$('.int-wrapper').remove();
  	$('wrapper').prepend('<div />', {
  	 class: 'int-wrapper'
	});
  	alert("asking for dimensions");
	var columns = prompt("What height square grid would you like?");
	var rows = prompt("What width square grid would you like?");
		if (columns || rows > 64) {
			alert("Too Big!");
		}  else if (isNaN(columns || rows)){

			alert("Please enter a number! I know it's lame that it's a square, but why would you want a 1 x 9000 etch-a-sketch?");

		} else {
	
		for (var i = 0; i < columns; i++) {
			$row.append($square.clone());
		}
		for (var i = 0; i <rows; i++); {
			$(".int-wrapper").append($row.clone());
			}
				}

$(".new-grid").click(addDiv);

}

});


/*
	on button click ask for dimensions x,y
	check if dimensions are a number
	wipe old grid
	make new grid
	grid is x, y big

	on mouse enter 50 percent opacity black, on mouse leave back off of some of the opacity.

	on button click ask for new width and height and then create new width and height 

	

*/


