function face(x_loc,y_loc){
  this.x_loc = x_loc;
  this.y_loc = y_loc;

  this.size = 400;
  this.app_list;

}

face.prototype.show = function () {
  rect(this.x_loc,this.y_loc,this.size,this.size,this.size/10);
};
face.prototype.insert_apps = function() {
  this.app_list = add_apps();
}
