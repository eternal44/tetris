// #########
// # BOARD #
// #########

// TODO:
//   persist shapes once they reach the bottom or previous shape

var bw = 300;
var bh = 660;
var p = 10;
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
function drawBoard(){
  for (var x = 0; x <= bw; x += 30) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, bh + p);
  }

  for (var x = 0; x <= bh; x += 30) {
    context.moveTo(p, 0.5 + x + p);
    context.lineTo(bw + p, 0.5 + x + p);
  }

  context.strokeStyle = "black";
  context.stroke();
}

drawBoard();

// ##########
// # SHAPES #
// ##########

// TODO: 
//   instantiate shapes from class
//   randomly select from them

var xPosition = 130
var yPosition = -20
var w = 60
var h = 60

// vector variables to make shape 'fall' to the bottom of the board
var vx = 0
var vy = 30

// renders shape on board
function draw() {
  context.clearRect(0,0,canvas.width, canvas.height);

  xPosition += vx
  yPosition += vy
  drawBoard()
  context.fillRect(xPosition,yPosition,w,h)
}

var dropShape = setInterval(function() {
  draw()

  if(yPosition > 600)
    clearInterval(dropShape)
}, 1000)

function moveShape(e) {
  var code = e.keyCode
  switch (code) {
    case 37: xPosition -= 30; break; // left key
    case 39: xPosition += 30; break; // right key
  }
}

