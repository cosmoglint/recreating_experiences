var canvas;
var the_watch;
var app_count = 20;
var the_app_list;
var watch_size = 400;


function create_arr(width,height){
  arr = new Array(width);
  for (let i=0; i<arr.length; i++){
    arr[i] = new Array(height);
  }
  return arr
}

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





function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);



  // for (let i=0; i<the_app_list.length; i++){
  //   for (let j=0; j<the_app_list[0].length; j++){
  //     the_app_list[i][j] = new app(random_name_gen());
  //   }
  // }


  console.log(the_app_list);

  the_watch = new face(ww/2,wh/2);
  the_watch.add_apps();


}

function setup(){
  rectMode(CENTER);
  init();

  // circle(ww/2,wh/2,300);
}
function draw(){
  the_watch.show();

}
