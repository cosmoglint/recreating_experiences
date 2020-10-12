var canvas;


function resize_canvas(){
  init();
}

window.addEventlistener('resize',resize_canvas);

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
}

function setup(){
  init();
}
function draw(){

}
