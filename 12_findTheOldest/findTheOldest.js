const findTheOldest = function(array) {
    return array.reduce((oldest,currentPerson) => 
        {if (getAge(oldest)>getAge(currentPerson)){
            return oldest;
        }
        else{
            return currentPerson;
        }
    }
    );
};


function getAge(person){
    if(!("yearOfDeath" in person)){
        return ((new Date().getFullYear()) - person.yearOfBirth);
    }
    return person.yearOfDeath - person.yearOfBirth;
}
// Do not edit below this line
module.exports = findTheOldest;
