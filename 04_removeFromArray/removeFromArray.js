const removeFromArray = function(list, number) {
    let tempList = list;
    for (let i = 1; i<arguments.length; i++){
        for (let j = tempList.length; j>=0;j--){
            if (tempList[j] === arguments[i]){
                tempList.splice(j,1);

            }
        }
    //TOP solution is the following
    //const newArray = [];
    //tempList.forEach((item) => {
    //if (!args.inclusdes(items)){newArray.push(item);}
    //}
    //this is one line shorter and basically says loop through each item in the original array, if the elemnt is not include in the arguments, push it to our newArray
    }
    return tempList;
};

// Do not edit below this line
module.exports = removeFromArray;
