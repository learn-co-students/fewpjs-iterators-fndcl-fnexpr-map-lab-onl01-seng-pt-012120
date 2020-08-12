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
  let wordsToLetters = [];
  let phraseArray = 0;
  wordsToLetters[phraseArray] = [];
  stringToWord.forEach(innerArray => {
    wordsToLetters[phraseArray] = [];
    let wordInPhrase = 0;
    innerArray.forEach(word => {
      wordsToLetters[phraseArray][wordInPhrase] = letterList(word);
      wordInPhrase +=1;
    });
    phraseArray += 1;
  });
  return wordsToLetters;
}

let wordList = (string) => {
  return string.split(' ');
}

let letterList = (word) => {
  return word.split('');
}