// Logical Operator 

// math
// comparision >

//  or  : ||

// false || true || false => true
// false || false => false
// true  || false => true
// true  || true  => true

//  and : &&
// true && false => false
// false && true => false
// false && false => false
// true && true  => true

// not operator
// !
// true => false
// false => true

// let result = !(10 > 50);
// console.log(result)

//  not : !

// Ternary Operator 
// ? => 

// let var1 = (condition) ? value1 : value2

//
// let num1 = 100
// let num2 = 100

// let status = (num1 > num2) ? "Num1 is greater" : "Num2 is greater";

// document.write(status);
// 08:46
// 

let date = new Date();
console.log(date);

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let session = (hour > 12) ? "PM" : "AM";

hour = (hour > 12) ? hour - 12 : hour;

hour = (hour < 10) ? "0" + hour : hour;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;

let result = hour + ":" + minutes + ":" + seconds + " " + session;
document.write(result);