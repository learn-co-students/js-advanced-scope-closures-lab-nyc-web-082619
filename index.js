function produceDrivingRange(range) {
  return (arg1, arg2) => {
    const value = Math.abs(parseInt(arg1) - parseInt(arg2));
    if (range > value) {
      return `within range by ${value}`;
    } else {
      return `${value - range} blocks out of range`;
    }
  };
}

function produceTipCalculator(tipPercent) {
  return function(amount) {
    return amount * parseFloat(tipPercent);
  };
}

function createDriver(name) {
  id = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++this.id;
    }
  };
}
