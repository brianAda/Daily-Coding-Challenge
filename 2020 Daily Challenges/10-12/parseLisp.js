/*
 * Given a basic Lisp-like string expression, parse it (where the available functions are add, subtract, multiply, and divide, and they all take in 2 values).
 *
 * Examples:
 *   Input: babyLisp('(add 1 2)')
 *   Output: 3
 *
 *   Input: babyLisp('(multiply 4 (add 2 3))')
 *   Output: 20
 * From @cassidoo's weekly newsletter:
 * https://buttondown.email/cassidoo/archive/4b882f72-2fc1-4b77-b574-0118a37f480c
 *
 */

/* eslint-disable */

//TODO - THIS CHALLENGE IS INCOMPLETE
// Assumes only 2 operands per operator

function babyLisp(str) {
//  parsedArr = str.split('(';
parsedArr
  // Base case: No nested open parens, return eval (str)
  if (parsedArr.length === 2) return eval(parsedArr[1]);

  // Recursive case
  babyLisp

}

// Recursive Case:
    // Find open parens
    // make recursive call = return variable
    // return eval on str concat with return variable


function eval(str) {
  str = str.replace(')', '');

  let arr = str.split(' ');
  let num1 = Number.parseInt(arr[1]);
  let num2 = Number.parseInt(arr[2]);

  let result;
  switch (arr[0]) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
  }
  return result;
}


// const test1 = babyLisp('(add 1 2)'); //3
const test2 = babyLisp('(multiply 4 (add 2 3))'); //20



let str = '(add 1 (add 2 3))';
let myArr = str.split('(');

