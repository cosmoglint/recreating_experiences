

function app(x_loc,y_loc,app_name){
  this.loc_x = x_loc;
  this.loc_y = y_loc;
  this.app_name = app_name;
  this.size = 20;
}

app.prototype.show = function(xdiff,ydiff){
  circle(xdiff+this.loc_x,ydiff+this.loc_y,this.size);
}
