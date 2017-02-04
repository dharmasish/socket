var socket

function setup() {
  //console.log("hello")
  createCanvas(600,400);
  background(51);
  var socket = io.connect('http://localhost/3000');
}

function draw() {
 
	noStroke();
	background(51);
	ellipse(mouseX,mouseY,60,60);
  
}