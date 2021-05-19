// Functions ---> 
// Large --> small 
// modular approch

// console.log()
// alert("hello!")
// alert("hi sachin!")

// keyword -> function
// def 

// function hello() {
//     document.write("Hello all from Linux World! <br>");
//     document.write("Hello all from SkillSanta <br>");
//     document.write("Hello all from Eddy Grant! <br>");
// }

// hello();
// hello();
// hello();
// parameter / argument

// function add() {
//     let num1 = 10;
//     let num2 = 20;
//     let result = num1 + num2;
//     document.write('Num1: ' + num1 + "<br>");
//     document.write('Num2: ' + num2 + "<br>");
//     document.write('Result: ' + result + "<br>");
// }

// add();
// add();
// add();

// function add(num1, num2 = 0) {
//     let result = num1 + num2;
//     document.write('Num1: ' + num1 + "<br>");
//     document.write('Num2: ' + num2 + "<br>");
//     document.write('Result: ' + result + "<br>");
//     document.write("--------------<br>")
// }

// add(5);
// add(15, 10);
// add(12, 20);
// add(50, 100);


// function add(num1 = 0, num2 = 0) {
//     let result = num1 + num2;
//     // document.write('Num1: ' + num1 + "<br>");
//     // document.write('Num2: ' + num2 + "<br>");
//     document.write('Result: ' + result + "<br>");
//     document.write("--------------<br>")
// }

// add();
// add(5);
// add(15, 10);

// function add() {
//     console.log(arguments)
// }

// add();
// add(5);
// add(15, 10);
// add(10, 20, 50, 40, 50);

// return : --> special keyword -> exit function

// username = 'eddygrant000';
// password = 'red@123';

// prompt("Enter username: ")

// function login(user_username, user_password) {
//     if (user_username == username) {
//         if (user_password == password) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }

// console.log(login('eddygrant000', 'red@123'));
// console.log(login('sachin', '123'));

// if (login('eddygrant000', 'red@123')) {
//     document.write("Login Success!");
// } else {
//     document.write("Invalid Login!");
// }

// function add(a = 0, b = 0) {
//     console.log('a', a);
//     console.log('b', b);
//     return a + b;
// }

// let result1 = add(b = 30);

// let result2 = add(100, 30);

// console.log(result1);
// console.log(result2);