function produceDrivingRange(blockRange){
    return function(street1, street2){
        num1 = parseInt(street1);
        num2 = parseInt(street2)
        if (num1>num2){
            const diff = num1-num2
            if (diff>blockRange){
                return `${diff-blockRange} blocks out of range`
            } else{
                return `within range by ${blockRange-diff}`
            }
        }else {
            const diff = num2-num1
            if (diff>blockRange){
                return `${diff-blockRange} blocks out of range`
            } else{
                return `within range by ${blockRange-diff}`
            }
        } 
    }
}

function produceTipCalculator(tip){
    return function(fare){
        return fare*tip
    }
}


function createDriver(){
    let driverId = 0;
    return class Driver{
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}
