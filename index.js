function produceDrivingRange(range){
    return function blockRange(start,end){
        const difference = parseInt(end) - parseInt(start)
        if (difference >= range)
            return (Math.abs(difference - range) + " blocks out of range")
        else    
            return "within range by " + Math.abs(range - difference)
    }
}

function produceTipCalculator(tip){
    return function calculateTip(fare){
        return Math.abs(fare*tip)
    }
}

function createDriver(){
    let driverId = 0;
    return class Driver{
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}
