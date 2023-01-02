const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    fib = [];
    
    for ( let i = 0; i < index;i++){
        if(i < 2){
            fib.push(1);
        }
        else{
            fib.push(fib[i-1]+fib[i-2]);
        }
    }

    return fib[index-1];



};

// Do not edit below this line
module.exports = fibonacci;
