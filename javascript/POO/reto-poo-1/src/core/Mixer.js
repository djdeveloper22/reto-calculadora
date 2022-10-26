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
    if(statusOn !== 'Y')
      throw 'Opcion no valida para el encendido de la licuadora...escoja la correcta';
    return true;
  }

  speedCurrent(currentSpeed){
    return currentSpeed;
  }

  speedLevel(){
    return this.current.join(' * ');  
  } 
}

module.exports = { Blender };
