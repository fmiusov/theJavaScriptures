const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert('The random number is greater than or equal to 0.7!');
} else {
  alert('Not greater or equal to 0.7');
}

const loopArray = [1, 2, 3, 4, 5];

for (let i = 0; i < loopArray.length; i++) {
  console.log(loopArray[i]);
}

for (const entry of loopArray) {
  console.log(entry);
}

let counter = 0;
while (counter < loopArray.length) {
  console.log(loopArray[counter]);
  counter++;
}

// for loop => backwards
for (let i = loopArray.length - 1; i >= 0; i--) {
  console.log(loopArray[i]);
}

const randomNumber2 = Math.random();

if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert('Both random numbers are greater than 0.7 or smaller than 0.2');
}
