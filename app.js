// app.ts//
var myCalculation;
(function (myCalculation) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    myCalculation.calcCircumference = calcCircumference;
    function calcRect(width, length) {
        return width * length;
    }
    myCalculation.calcRect = calcRect;
})(myCalculation || (myCalculation = {}));
var PI = 2.32;
console.log(myCalculation.calcCircumference(2));
console.log(myCalculation.calcRect(10, 20));
console.log(PI);
