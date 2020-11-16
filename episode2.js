//   Episode 2
// Function changeMurderer will throw an error
// console.log statement will return 'Professor Plum'

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

// changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
 