function produceDrivingRange(range) {
  return (startPoint, endPoint) => {
    let start = parseInt(startPoint);
    let end = parseInt(endPoint);
    let distance = Math.abs(end - start);
    if(distance > range) {
      let diff = distance - range;
      return `${diff} blocks out of range`;
    } else {
      let diff = range - distance;
      return `within range by ${diff}`;
    }
  }
}

function produceTipCalculator(percentage) {
  return (value) => percentage * value;
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ driverId;
    }
  }
}