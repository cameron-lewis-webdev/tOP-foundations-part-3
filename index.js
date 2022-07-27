// Exercise 1

function add7 (n) {
  return (n + 7);
}

console.log(add7(11)); // 18

// Exercise 2

function multiply (x, y) {
  return (x*y);
}

console.log(multiply(5, 9)); // 45

// Exercise 3

// The below function separates the string into two categories: The first letter that will always be capitalized
// and the rest of the string that will always be lowercase.  After creating a variable for each category
// I used the return function to put the two categories together.  The first letter will always be capitalized
// and the rest of the letters in the string will be lowercase even if they are typed as uppercase.

function capitalize (string) {
  const upr = string[0];
  const lowr = string.slice(1, );
  return (upr.toUpperCase() + lowr.toLowerCase());
}

console.log(capitalize('pROgraMming')); // 'Programming'

// Exercise 4

// This took some googling.  I found that by using the .slice method, I could give it a value of '-1' and in return
// that would retrieve me the last letter of whichever string I give for the lastLetter variable.

function lastLetter (string) {
  const letter = string.slice(-1);
  return letter;
}

console.log(lastLetter('Programming')); // 'g'