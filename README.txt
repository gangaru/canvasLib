canvasLib is JavaScript library for canvas element(HTML5).

use fast and easy.
Canvas methods can use when you include 'canvasLib' and set new object with id of canvas element.

example:
<script src="canvaslib-.js"></script>
var canvas;
onload = function(){
	canvas = new canvaslib('canvas-id');
};



method chain
'canvasLib' can use method chain. All canvas methods are available. Properties can set like method chain.

 example:
canvas.beginPath()
	.lineWidth(2)
	.strokeStyle("orange")
	.fillStyle("#EEEEEE")
		.rect(100,100,90,90)
		.moveTo(100,130).lineTo(190,130)
		.moveTo(100,160).lineTo(190,160)
		.moveTo(130,100).lineTo(130,190)
		.moveTo(160,100).lineTo(160,190)
	.fill()
	.stroke();


