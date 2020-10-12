var canvas;
var the_watch;

function resize_canvas(){
  init();
}

window.addEventListener('resize',resize_canvas);

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);

  the_watch = new face(ww/2,wh/2);

}

function setup(){
  rectMode(CENTER);
  init();

  // circle(ww/2,wh/2,300);
}
function draw(){
  the_watch.show();

}
