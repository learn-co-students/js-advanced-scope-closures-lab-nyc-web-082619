function produceDrivingRange(blockRange) {
    return function(str1, str2){
        let distance = Math.abs(parseInt(str2) - parseInt(str1))
        if (blockRange <= distance) {
            return `${distance - blockRange} blocks out of range`
        } else {
            return `within range by ${Math.abs(distance - blockRange)}`
        }
    }
}

function produceTipCalculator(tipPercent) {
    return function(amount){
        return amount * tipPercent
    }
}

function createDriver(){
    let driverId = 0;
    return (class Driver {
        constructor(name){
            this.name = name;
            this.id = ++driverId
        }
    })
}