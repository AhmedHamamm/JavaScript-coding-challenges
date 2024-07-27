'use strict';

// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅


Afterwards, test with your own test data!

*/

// const textTest = 'underscore_case';

// const correctText = textTest.split('_');
// console.log(correctText);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');

  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )} `;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

/*

underscore_case
  first_name
Some_Variable
   delayed_departure
calculate_AGE

underscore_case => underscoreCase 
  first_name => firstName 
Some_Variable => someVariable 
   delayed_departure => delayedDeparture 
calculate_AGE => calculateAge

*/
