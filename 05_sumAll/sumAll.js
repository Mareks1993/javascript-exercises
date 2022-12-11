const sumAll = function(args) {
    if(Number.isInteger(arguments[0]) && arguments[0] > 0 && Number.isInteger(arguments[1]) &&  arguments[1] >0){
        let count = Math.min(arguments[0],arguments[1]);
        let sum = 0;
        while (count <= Math.max(arguments[0],arguments[1])){
            sum += count;
            count++;
        }
        return sum;
    }
    else{
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
