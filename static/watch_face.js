function face(x_loc,y_loc){
  this.x_loc = x_loc;
  this.y_loc = y_loc;

  this.size = watch_size;
  this.app_list;
  this.app_array;

}

face.prototype.show = function () {
  rect(this.x_loc,this.y_loc,this.size,this.size,this.size/10);
  for (let i=0; i<this.app_array.length ; i++){
    this.app_list[this.app_array[i]].show();
  }
}


face.prototype.insert_apps = function() {
  temp  = add_apps();
  this.app_list = temp[0];
  this.app_array = temp[1];
}
