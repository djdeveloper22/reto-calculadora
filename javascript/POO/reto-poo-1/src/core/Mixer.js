class Blender {

  brander;
  statusOn;
  speed;
  current = [];

  constructor(brander, statusOn, speed){
    this.brander = brander;
    this.statusOn = statusOn;
    this.speed = speed;
  }

  status(statusOn){
    return statusOn;
  }

  speedCurrent(currentSpeed){
    return currentSpeed;
  }

  speedLevel(){
    return this.current.join(' * ');  
  } 
}

module.exports = { Blender };
