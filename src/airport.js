function Airport(){
  this.planes = [];
}

Airport.prototype.landPlane = function(plane){
  this.planes.push(plane);
  return this.planes;
};

Airport.prototype.takeOff = function(){
  this.planes.pop();
  return this.planes;
};
