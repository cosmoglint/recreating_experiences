

function app(x_loc,y_loc,app_name){
  this.loc_x = 0;
  this.loc_y = 0;
  this.size = 5;
}

app.prototype.show = function(){
  circle(this.loc_x,this.loc_y,this.size);
}
