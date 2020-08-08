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

const titleCased = tutorials.map(function(string) {

  const sentence = string.split(" "); // Split the string into words that make up the sentence

  for(var i = 0; i< sentence.length; i++) { // For each element in the new array of sentence words
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);  // Take the first character and make it caps -- no conflict with all cap words, we're just changing the first character
  };

sentence.join(" "); // Rejoin the words into a string with spaces
return sentence; // Return the sentence, map will have array with each returned sentence inside it
});
