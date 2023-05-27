// Iteration 1: Names and Input
const hacker1 = prompt("The driver's name is ");
const hacker2 = prompt("The navigator's name is ");
console.log("Driver:", hacker1);
console.log("Navigator:", hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}
// Iteration 3: Loops
let hacker1WithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1WithSpaces += hacker1[i].toUpperCase();

  if (i !== hacker1.length - 1) {
    hacker1WithSpaces += " ";
  }
}
console.log(hacker1WithSpaces);

let reversedHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedHacker2 += hacker2[i];
}
console.log(reversedHacker2);

//
const minLength = Math.min(hacker1.length, hacker2.length);
let comparison = 0;
for (let i = 0; i < minLength; i += 1) {
  if (hacker1[i] < hacker2[i]) {
    comparison = -1;
    break;
  } else if (hacker1[i] > hacker2[i]) {
    comparison = 1;
    break;
  }
}
if (comparison < 0) {
  console.log("The driver's name goes first.");
} else if (comparison > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS 1
const paragraph1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque congue egestas. Fusce tristique lacus sit amet est tincidunt, vitae dignissim risus hendrerit. Duis tincidunt interdum mi, eu sagittis diam sodales et.";
const paragraph2 =
  "Sed rhoncus egestas mi non posuere. Duis viverra nisl a pretium dignissim. Nullam et dui sollicitudin, suscipit lectus consequat, egestas est. Cras dignissim, odio ut aliquet aliquam, purus nibh maximus arcu, in semper turpis dolor at turpis. Vestibulum eget massa scelerisque, porta orci quis, ornare ante. Etiam tristique nisi quis vestibulum maximus. Maecenas lobortis iaculis nisl, quis rhoncus libero vestibulum vitae.";
const paragraph3 =
  "Aliquam eu mi quam. Sed fringilla nulla sit amet ligula consectetur pellentesque. Nunc lacinia a sem ac iaculis. Ut sollicitudin nisl turpis, quis faucibus ipsum varius ut. Donec ac efficitur nulla. In eget purus scelerisque, posuere diam a, lacinia dolor. Proin nec mi venenatis, rutrum dolor non, egestas odio. Donec pulvinar non purus vitae fringilla. Etiam id imperdiet ex. Morbi convallis nisl ut turpis aliquet, et tempor nibh sodales. Aliquam a varius diam, pharetra elementum nunc. Maecenas luctus tincidunt viverra. Nunc sollicitudin finibus enim non tristique. Cras ornare elit ut quam sollicitudin interdum.";

const longText = paragraph1 + paragraph2 + paragraph3;

console.log("Number words = ", paragraph3.split(" ").length);

let count = 0;
for (let i = 0; i < longText.length; i += 1) {
  const char = longText[i] + longText[i + 1];
  if (char === "et") {
    count++;
  }
}
console.log('Number times "et" = ', count);

// BONUS 2
const phraseToCheck = prompt("Write your phrase");
console.log("Phrase to check:", phraseToCheck);
let cleanPhrase = "";
for (let i = 0; i < phraseToCheck.length; i += 1) {
  const char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    cleanPhrase += char;
  }
}
let isPalindrome = true;
for (let i = 0; i < cleanPhrase.length / 2; i += 1) {
  if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  console.log("The phrase is a palindrome");
} else {
  console.log("The phrase is not a palindrome");
}
