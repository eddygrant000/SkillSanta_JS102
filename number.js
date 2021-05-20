// Numbers 

// var num1 = 20;
// var num2 = 12.5;
// var num3 = 125.22445566;

// var num4 = 20 / 3;

// let result = num4.toFixed(3)


// Math functions
// Rounding 
// floor : round down 
// ceil  : round up 
// round : round to the nearest integer
//          0-4 < 5-9 > 
// random : generate a random number less then 1
// document.write(result);

// var num1 = 12.6;
// var num2 = 12.4;
// var num3 = 15.555;
// var num4 = -10.6;

// document.write(Math.floor(num4));
// document.write(Math.ceil(num2));
// document.write(Math.floor(12.444));
// document.write(Math.round(num3));

// let num1 = Math.floor(10 * Math.random());

// let num1 = Math.floor(Math.random() * (20 - 10)) + 10;

// document.write(num1);

// function sendemail(receiver, otp) {
//     mail(receiver, otp)
// }


function getRandomNumber(lowerNumber, largestNumber) {
    let num = Math.floor(Math.random() * (largestNumber - lowerNumber)) + lowerNumber;
    return num
}

let otp = getRandomNumber(100000, 999999);
document.write(otp);
// sendemail('eddygrant000@gmail.com', otp)

// document.write(getRandomNumber(1000, 9999));