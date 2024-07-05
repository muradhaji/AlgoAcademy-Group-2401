// let x = 0;
// let a = 3;

// x += a;
// x += a;
// x += a;

// while(condition) {
//   // body
// }

// while(x < 10) {
//   x += a;
// }

// 1: 0 < 10 ? x = 3
// 2: 3 < 10 ? x = 6
// 3: 6 < 10 ? x = 9
// 4: 9 < 10 ? x = 12
// 5: 12 < 10 ? x = 12

// while (x + a < 10) {
//   x += a;
// }

// 1: 3 < 10 ? x = 3
// 2: 6 < 10 ? x = 6
// 3: 9 < 10 ? x = 9
// 4: 12 < 10 ? x = 9

// console.log(x);

// -------------------------------- //
// -------------------------------- //

// let sum = 0;
// let x = 0;

// x += 1;
// sum += x;

// x += 1;
// sum += x;

// x += 1;
// sum += x;

// x += 1;
// sum += x;

// x += 1;
// sum += x;

// while (x <= 5) {
//   x += 1;
//   sum += x;
// }

/*
1) 0 <= 5 : x-1 sum-1
2) 1 <= 5 : x-2 sum-3
3) 2 <= 5 : x-3 sum-6
4) 3 <= 5 : x-4 sum-10
5) 4 <= 5 : x-5 sum-15
6) 5 <= 5 : x-6 sum-21
6) 6 <= 5 : x-6 sum-21
*/

// console.log(x);
// console.log(sum);

// -------------------------------- //
// -------------------------------- //

// let sum = 0;
// let x = 1;

// while (x <= 5) {
//   sum += x;
//   x += 1;
// }

/*
1) 1 <= 5 : sum-1 x-2 
2) 2 <= 5 : sum-3 x-3
2) 3 <= 5 : sum-6 x-4
2) 4 <= 5 : sum-10 x-5
2) 5 <= 5 : sum-15 x-6
2) 6 <= 5 : sum-15 x-6
*/

// console.log(x);
// console.log(sum);

// -------------------------------- //
// -------------------------------- //

// let sum = 0n;
// let x = 1n;

// while (x <= 99999999n) {
//   sum += x;
//   x += 1n;
// }

// console.log(x);
// console.log(sum);

// let a = Number(prompt('Enter number!'));

// let x = 2;
// let isPrime = true;

// while (x < a) {
//   if (a % x == 0) {
//     isPrime = false;
//   }
//   x += 1;
// }

/*
a 4
x 2
isPrime true

2 < 4 -> 4 % 2 == 0 -> isPrime = false
3 < 4 -> 4 % 3 == 1 -> isPrime = false
4 < 4 -> end
*/

// console.log(isPrime ? 'Prime' : 'Not Prime');

// -------------------------------- //
// -------------------------------- //

// let a = Number(prompt('Enter A:'));
// let b = Number(prompt('Enter B:'));

// let x = a;
// let s = 1;

// while (x <= b) {
//   s = s * x;
//   x += 1;
// }

// console.log(s);

// -------------------------------- //
// -------------------------------- //

// let a = Number(prompt('Enter A:'));
// let b = Number(prompt('Enter B:'));

// let x = a;
// let s = 1;

// while(x <= b) {
//   s = s * x;
//   x += 1;
// }

/*
a = 5;
b = 7;
x = 5;
s = 1;

5 <= 7 ? -> s = 5, x = 6;
5 <= 7 ? -> s = 30, x = 7;

*/

// -------------------------------- //
// -------------------------------- //

// let a = Number(prompt('Enter A:'));
// let b = Number(prompt('Enter B:'));

// while (a <= b) {
//   console.log(a);
//   a += 1;
// }

// -------------------------------- //
// -------------------------------- //

// let a = Number(prompt('Enter A:'));
// let b = Number(prompt('Enter B:'));

// let x = a;

// while (x <= b) {
//   console.log(x);
//   x += 1;
// }

// -------------------------------- //
// -------------------------------- //

let a = Number(prompt('Enter A:'));
let operator = prompt('Enter operator');
let b = Number(prompt('Enter B:'));
let c = Number(prompt('Enter C:'));

let x = a;
// let sum = 0;

while (x <= b) {
  console.log(x);
  // sum += x;
  if (operator == '*') {
    x *= c;
  } else if (operator == '+') {
    x += c;
  }
}

// console.log(sum);
