var canvas;
var the_watch;
var app_count = 20;
var the_app_list;

function random_name_gen(){
  ret_name = "";
  for (let i=0; i<6; i++){
    val = random(97,122);
    ret_name += String.fromCharCode(val);
  }
  return ret_name;
}

function resize_canvas(){
  init();
}

window.addEventListener('resize',resize_canvas);


function add_apps(){
  the_app_list = new app_list();
  for (let i=0; i<app_count; i++){
    app_name = random_name_gen();
    the_app_list[app_name] = new app(app_name);
  }
  return the_app_list;
}



function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);

  the_watch = new face(ww/2,wh/2);
  the_watch.insert_apps();

  add_apps();

}

function setup(){
  rectMode(CENTER);
  init();
  console.log(the_watch.app_list);

  // circle(ww/2,wh/2,300);
}
function draw(){
  the_watch.show();

}
