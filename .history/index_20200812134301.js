const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let stringToWord = tutorials.map(tutorial => wordList(tutorial));
  let wordsToLetters = stringToWord.forEach(innerArray => {
    innerArray.forEach(word => {
      word.split();
    });
  });
  debugger;
 
}

let wordList = (string) => {
  return string.split(' ');
}

let letterList = (word) => {
  return word.split('');
}