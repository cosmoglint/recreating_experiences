function face(x_loc,y_loc,app_list){
  this.x_loc = x_loc;
  this.y_loc = y_loc;

  this.size = watch_size;

  this.xnum = 9;
  this.ynum = 9;

  this.app_list = create_arr(this.xnum,this.ynum);

  // this.padding = 50;
  this.padding = watch_padding;

  this.x_corn = this.x_loc - this.size/2 + this.padding/2;
  this.y_corn = this.y_loc - this.size/2 + this.padding/2;


  this.orig_lefx = this.x_loc - this.app_list.length/2 * this.padding + this.padding/2;
  this.orig_lefy = this.y_loc - this.app_list[0].length/2 * this.padding + this.padding/2;

  this.lefx = this.x_loc - this.app_list.length/2 * this.padding + this.padding/2;
  this.lefy = this.y_loc - this.app_list[0].length/2 * this.padding + this.padding/2;

  this.click_loc = createVector(this.x_loc,this.y_loc);

}

face.prototype.show = function () {
  fill('red');
  rect(this.x_loc,this.y_loc,this.size,this.size,this.size/10);
  for (let i=0; i<this.app_list.length ; i++){
    for (let j=0; j<this.app_list[0].length ; j++ ){

      // var dev = (j%2==0) ? 0 : this.padding/2;
      var dev = 0;
      var xdev = 0;
      var ydev = 0;
      xdev = (this.xnum%2==0)? -this.padding/2 : 0;
      ydev = (this.ynum%2==0)? -this.padding/2 : 0;

      this.app_list[i][j].show(this.lefx+dev+xdev,this.lefy+ydev);
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


face.prototype.set_clicker = function(){
  this.click_loc = createVector(mouseX,mouseY);
  console.log(this.click_loc);
}

face.prototype.dragger = function() {
  d = dist(mouseX,mouseY,this.orig_lefx,this.orig_lefy);

  or_vector = createVector(this.click_loc.x,this.click_loc.y);
  mvector = createVector(mouseX,mouseY);

  d_vector = p5.Vector.sub(mvector,or_vector);

  this.lefx = this.orig_lefx + (d_vector.x);
  this.lefy = this.orig_lefy + (d_vector.y);

  this.show();
}

face.prototype.releaser = function(){
  this.lefx = this.orig_lefx;
  this.lefy = this.orig_lefy;
}
