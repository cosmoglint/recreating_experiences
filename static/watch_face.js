function face(x_loc,y_loc,app_list){
  this.x_loc = x_loc;
  this.y_loc = y_loc;

  this.size = watch_size;
  this.app_list = create_arr(5,5);

  this.padding = 10;

}

face.prototype.show = function () {
  fill('red');
  rect(this.x_loc,this.y_loc,this.size,this.size,this.size/10);
  for (let i=0; i<this.app_array.length ; i++){
    for (let j=0; j<this.app_list.lenth ; j++ ){
      this.app_list[this.app_array[i]].show();
    }
  }
}


face.prototype.add_apps = function() {
  for (let i=0; i<this.app_list.length; i++){
    for (let j=0; j<this.app_list[0].length; j++){
      this.app_list[i][j] = new app(i*this.padding,j*this.padding,random_name_gen());
    }
  }
}
