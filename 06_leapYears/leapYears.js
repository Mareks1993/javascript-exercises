const leapYears = function(year) {
    let isLeapYear = false;
    if (year%4 == 0 && year%100 != 0) isLeapYear = true;
    else if (year%100 == 0 && year%400 == 0) isLeapYear = true;
    return isLeapYear;

    //TOP SOLUTION
    //return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
    //same as mine, they just combined both of my conditional statements into one and had the return be that output
};

// Do not edit below this line
module.exports = leapYears;
