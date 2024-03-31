"use strict";
//operators
//atithmetic
//addition
let q = 3;
let r = 5;
let add = q + r;
console.log(add);
//addition
let x = 3;
let y = 6;
let add1 = x + y;
let add2 = "x" + "y";
let add3 = "xy" + add1;
let add4 = "xy" + x + y;
console.log(add1);
console.log("add" + add1);
console.log("add" + add2);
console.log("add" + add3);
//subtraction
let subtraction = x - y;
console.log(subtraction);
//multiplication
let multiplication = x * y;
console.log(multiplication);
//division
let division = x / y;
//exponentation
let exponentation = x ** y;
console.log(exponentation);
//comparison
let o = 3;
console.log(o == 0);
console.log(o === 1); //compare number with number value wtih value
console.log(o != 0); //
console.log(o < 1);
console.log(o > 5);
console.log(o <= 3);
console.log(o <= 5);
//logical AND OR NOT
let w = 33;
console.log(w >= 33 || w < 55); // OR operator pipe sign
console.log(w == 33 || w > 55);
console.log(w >= 33 || w < 55);
console.log(w >= 33 && w < 55); //
console.log(w < 33 && w < 55);
console.log(w > 33 && w < 55);
console.log(!(w > 33 && w < 55)); //! NOT operator
console.log(!(w == 33 || w > 55));
//assignment
//increment operator ++ / decrement operator --
let n = 5;
n += 15;
n++; //n=n+1
console.log(n);
//
n = n + 2;
let p = 6;
p += 15;
p--;
console.log(p);
//use of if , Else, Else If statements
let z = 100;
let correctAnswer = 10;
if (z == 100) {
    console.log(correctAnswer);
}
//2nd condition // else need if
let t = 99;
let correct = 11;
if (t == 100) {
    console.log(correctAnswer);
}
else {
    console.log(correct);
}
//if else if
if (w <= 12) {
    console.log("child");
}
else if (w >= 13 && w < +19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
// odd and even
if (w % 2 == 0) {
    console.log("Even");
}
else {
    console.log("odd");
}
