

function app(x_loc,y_loc,app_name,face){
  this.father = face;
  this.loc_x = x_loc;
  this.loc_y = y_loc;
  this.app_name = app_name;
  // this.size = 40;
  this.size = app_size;

  this.bound_low_x = this.father.xloc-this.father.size;
  this.bound_high_x = this.father.xloc+this.father.size;
  this.bound_low_y = this.father.yloc-this.father.size;
  this.bound_high_y = this.father.yloc+this.father.size;
}

app.prototype.show = function(xdiff,ydiff){
  fill(color(150,150,255));

  strokeWeight(1);

  var curloc_x = xdiff+this.loc_x;
  var curloc_y = ydiff+this.loc_y;

  // console.log(curloc_x,curloc_y);

  if (dist(curloc_x,curloc_y,this.father.x_loc,this.father.y_loc) < this.father.size/2){
    // if (curloc_x > 0 && curloc_x < 8000 && curloc_y > 0 && curloc_y < 8000){
    circle(curloc_x,curloc_y,this.size) ;
  }
}
