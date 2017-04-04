// app.ts//

namespace myCalculation {                       //  providing name to namespace
const PI=3.14;
export function calcCircumference(diameter:number){      // making function available outside namespace
return diameter*PI
}
export function calcRect(width:number,length:number){   // making function available outside namespace
return width*length;
}
}
const PI= 2.32;
console.log(myCalculation.calcCircumference(2));
console.log(myCalculation.calcRect(10,20));
console.log(PI);