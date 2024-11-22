/*exercice 1*/

let superheroes = [
  "Superman",
  "Batman",
  "Iron Man",
  "Wonder Woman",
  "Black Widow",
  "Mighty Thor",
];
for (heroes of superheroes) {
  console.log(heroes);
}

/*exercice 2*/

let numbers = [23, 54, 145, 325, 42, 987, -21];

for (number of numbers) {
  if (number >= 100) {
    console.log(number);
  }
}

/*exercice 3*/

let data = [
  ["George", "Barack", "Donald"],
  [43, 44, 45],
  ["Superman", "Batman", "Iron Man"],
  ["Clark", "Bruce", "Tony"],
];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    console.log(data[i][j]);
  }
}

/*exercice 4*/

let ages = [23, 45, 67, 42, 23, 21, 41, 54, 45, 68, 48, 42];
let unique_Ages = [];

for (let i = 0; i < ages.length; i++) {
  let age = ages[i];
  let unique = true;
  for (let j = 0; j < unique_Ages.length; j++) {
    if (age === unique_Ages[j]) {
      unique = false;
      break;
    }
  }
  if (unique) {
    unique_Ages.push(age);
  }
}

console.log(unique_Ages);

/*exercice 5*/

let grades = [
  [12, 11, 18],
  [13, 17, 9],
  [10, 15, 8],
  [14, 18, 13],
];

let averages = [];

for (let i = 0; i < grades.length; i++) {
  let average = 0;
  for (let j = 0; j < grades[i].length; j++) {
    average += grades[i][j];
  }
  average /= grades[i].length;
  averages.push(average);
}

console.log(averages);
