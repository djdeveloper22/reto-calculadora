class Blender {
  constructor(brand, off, speed) {
    this.brand = brand;
    this.off = off;
    this.speed = speed;
  }

  on(off) {
    return off;
  }

  speedCurrent(currentSpeed) {
    return currentSpeed;
  }
  
}

module.exports = { Blender };
