function app_list(){
}



function app(app_name){
  this.loc_x = 0;
  this.loc_y = 0;
  this.size = 0;
}

app.prototype.show(){
  circle(this.loc_x,this.loc_y,this.size);
}
