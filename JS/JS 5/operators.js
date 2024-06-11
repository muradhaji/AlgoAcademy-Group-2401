let a = 5;
let a1 = -8;
let b = 13n;
let c = 'hello';
let c1 = 'John';
let d = null;
let e = undefined;
let f = true;
let f1 = false;

// console.log(a + a1);
// console.log(a + 8);
// console.log(5 + a1);
// console.log(5 + 8);
// console.log(+a1);
// console.log(-a1);
// console.log(+c);
// console.log(+'4.5');
// console.log(Number('4.5'));
// console.log(Number(b));
// console.log(+b);
// console.log(+true);
// console.log(Number(true));
// console.log(+false);
// console.log(Number(false));
// console.log(+null);
// console.log(Number(null));
// console.log(+undefined);
// console.log(Number(undefined));
// console.log(0.1 + 0.2); Problem
// console.log(1.2 - 0.1); Problem

// let apples = '2';
// let oranges = '3';
// console.log(+apples + +oranges);
// console.log(+apples - +oranges);

// console.log(c + c1);
// console.log(c - c1);
// console.log(a - a1);

// console.log(a * a1);
// console.log(c * c1);
// console.log(a * e);

// console.log(a / a1);
// console.log(a1 / a);

// console.log(0.6 / 2);
// console.log(2 ** 4 + 2 ** 2);
// console.log(2 ** 3 ** 2);
// console.log(16 ** 0.5);
// console.log(16 ** 0.25);
// console.log(27 ** (1 / 3));

// console.log(2 % 3);
// console.log(12 % 6);
// console.log(12 % 5);
// console.log(-12 % 5);
// console.log(-12 % -5);

// Precedence
// console.log(2 ** (3 ** 4));
// console.log(((2 * 3) / 4) % 5);
// console.log(2 + 3 - 4);
// console.log(2 + 3 - 4.5 * 2 / 3 % 4);
// let x = 2 + 3 - 4.5 * 2 / 3 % 4;

// let x = 4 + 3;
// let z = x * 2;
// console.log(z = 3);
// console.log(z = 3 + z);

// let x = 2;
// let y = 2;
// let z = 2;
// let x = y = z = 2;
// console.log(x, y, z);

// let x = 16;
// x = x + 3;
// x += 3;
// x = x - 10;
// x -= 10;
// x = x * 2;
// x *= 2;
// x = x / 7;
// x /= 7;
// x = x ** 0.5;
// x **= 0.5;
// x = x % 20;
// x %= 20;
// x = 9 ** (1 / 2) + x;
// x += 9 ** (1 / 2);
// console.log(x);

let x = 5;
// x = x + 1;
// x += 1;
// x++; // Post Increment
// ++x; // Pre Increment
// x--; // Post Decrement
// --x; // Pre Decrement

// console.log(x++); // 5
// console.log(x); // 6
// console.log(++x); // 6

// console.log(x--); // 5
// console.log(x); // 4
// console.log(--x); // 4
// console.log(x); // 4

// let y = x++ + x++;
let y = ++x + ++x;
console.log(x);
console.log(y);
