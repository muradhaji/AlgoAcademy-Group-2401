// start
// condition
// block
// iteration

// let x = 7; // start
// let s = 0;

// //condition
// while (x < 5) {
//   s += x; // block
//   x += 2; // iteration
// }

// console.log(s);

/* ------------------------------------ */

// let x = 7;
// let s = 0;

// do {
//   s += x;
//   x += 2;
// } while (x < 5);

// console.log(s);

/* ------------------------------------ */

// for( start ; condition ; iteration ) {
//   block
// }

// for (let x = 1, s = 0; x < 5; x += 2) {
//   s += x;
// }
// console.log(s);

// let s = 0;

// for (let x = 1; x < 5; x += 2) {
//   s += x;
// }

// console.log(s);

// for (1 step; 2 step; 4 step) {
//   3 step
// }
// for (; 5 step; 7 step) {
//   6 step
// }
// for (; 8 step; 10 step) {
//   9 step
// }

// let s = 0;
// let x = 1;

// for (; x < 5; ) {
//   s += x;
//   x += 2;
// }

// console.log(s);

/* ------------------------------------ */

// let a = Number(prompt('Enter A:'));
// let b = Number(prompt('Enter B:'));

// let z = 10000;
// let x = a;

// while (x <= b) {
//   if (x % 4 == 0) {
//     z -= x;
//   }
//   x += 1;
// }

/* ------------------------------------ */

// let x = 0;

// while (x < 10) {
//   if (x == 5) {
//     break;
//   }
//   console.log(x);
//   x++;
// }

// while (x < 10) {
//   if (x == 5) {
//     x++;
//     continue;
//   }
//   console.log(x);
//   x++;
// }

/* ------------------------------------ */

// let users = ['John', 'Mike', 'Elcan', 'Nuran', 'Murad', 'Eli', 'Fariz'];

// for (let x = 0; x < users.length; x += 2) {
//   console.log(users[x]);
// }

/* ------------------------------------ */

// let nums = [5, -3, 10, 0, 23, 12, 20, -7, 13];

// Hər bir task üçün fərqli ədədlərdən ibarət array yaradın

// Task 1: mənfilərin cəmini tapmaq
// Task 2: müsbətlərin cəmini tapmaq
// Task 3: 0-dan fərqlilərin hasilini tapmaq
// Task 4: ən böyük olanı tapmaq
// Task 5: ən kiçik olanı tapmaq
// Task 6: tək ədədləri consola çıxartmaq
// Task 7: cüt ədədləri consola çıxartmaq
// Task 8: 5-ə qalıqsız bölünənləri consola çıxartmaq
// Task 9: bütün elementlərin ədədi ortasını tapmaq

/* ------------------------------------ */

// Task 3 solution
// let nums = [5, -3, 10, 0, 23, 12, 20, -7, 13];
// let s = 1;

// for (let x = 0; x < nums.length; x++) {
//   if (nums[x] != 0) {
//     s *= nums[x];
//   }
// }

/* ------------------------------------ */

// Task 4 solution
// let nums = [-20, -7, -3, -13];
// let max = -Infinity;
// let max = nums[0];
// for (let x = 0; x < nums.length; x++) {
//   if (nums[x] > max) {
//     max = nums[x];
//   }
// }

// console.log(max);

/* ------------------------------------ */

// Task 6 solution
// let nums = [5, -3, 10, 0, 23, 12, 20, -7, 13];

// for (let x = 0; x < nums.length; x++) {
//   if (nums[x] % 2 == 0) {
//     console.log(nums[x]);
//   }
// }

/* ------------------------------------ */

// Task 9 solution
// let nums = [5, -3, 10, 0, 23, 12, 20, -8, 13];
// let s = 0;

// for (let x = 0; x < nums.length; x++) {
//   s += nums[x];
// }

// console.log(s / nums.length);

/* ------------------------------------ */

/* ------------------------------------ */
