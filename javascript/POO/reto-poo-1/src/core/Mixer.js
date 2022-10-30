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
    if(!statusOn) 
      throw 'Opcion no valida para el encendido de la licuadora...escoja la correcta';
    
    return true;
  }

  speedCurrent(currentSpeed){
    return currentSpeed;
  }

  speedShow(){
    return this.current.join(' * ');  
  } 

  opSpeeds(level){
    if(!this.current.find(elemento => elemento === level))
      throw `Opciones de licuado correctas ${this.speedShow()}`;
    return true;
  }
}

module.exports = { Blender };
