const totalmarks = 300;
const mohib = {
    mathmarks: 75,
    englishmarks: 64,
    urdumarks: 67,
  },
  arshman = {
    mathmarks: 40,
    englishmarks: 60,
    urdumarks: 25,
  },
  junaid = {
    mathmarks: 58,
    englishmarks: 64,
    urdumarks: 78,
  };

const mmarks = mohib.englishmarks + mohib.mathmarks + mohib.urdumarks;
const amarks = arshman.englishmarks + arshman.mathmarks + arshman.urdumarks;
const jmarks = junaid.englishmarks + junaid.mathmarks + junaid.urdumarks;

const mpercentage = (mmarks / totalmarks) * 100;
const apercentage = (amarks / totalmarks) * 100;
const jpercentage = (jmarks / totalmarks) * 100;

console.log("total marks in exam" + " " + totalmarks);
console.log("---------------------------------");
console.log("---------------------------------");

console.log("Mohib's Result");
console.log("Mohib gets" + " " + mmarks);
console.log("Mohib's percentage" + " " + mpercentage);
if (mpercentage > 45) {
  console.log("you are Pass");
} else "you are fail";

if (mpercentage > 60) {
  console.log("your grade is B");
}

console.log("---------------------------------");
console.log("---------------------------------");

console.log("Arshman's Result");
console.log("Arshman gets" + " " + amarks);
console.log("Arshman's percentage" + " " + apercentage);
if (apercentage > 45) {
  console.log(" you are Pass");
} else console.log("you are fail");

if (apercentage > 60) {
  console.log("your grade is B");
}

console.log("---------------------------------");
console.log("---------------------------------");

console.log("Junaid's Result");
console.log("Junaid gets" + " " + jmarks);
console.log("Junaid's percentage" + " " + jpercentage);
if (jpercentage > 45) {
  console.log(" you are Pass");
} else "you are fail";
if (jpercentage > 60) {
  console.log("your grade is B");
}

console.log("---------------------------------");
console.log("---------------------------------");
