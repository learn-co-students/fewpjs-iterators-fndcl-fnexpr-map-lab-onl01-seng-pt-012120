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
  let newTitles = tutorials.map(function(tutorial){
    let wArray = tutorial.split(" ").map(word => firstUp(word));
    return wArray.join(" ");
  });
  return newTitles;
};

function firstUp(word) {
  let lArray = word.split("");
  let firstLetter = lArray[0].toUpperCase();
  lArray.splice(0, 1, firstLetter);
  return lArray.join("");
};
