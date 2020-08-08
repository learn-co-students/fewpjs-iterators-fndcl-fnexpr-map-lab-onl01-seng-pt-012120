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
  return tutorials.map(string => {
    let sentence = string.split(" "); // Split the string into words that make up the sentence

    let capArr = sentence.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    let response = capArr.join(" "); // Rejoin the words into a string with spaces
    return response; // Return the sentence TO THE MAP ARRAY
  }) // End of the map function, return value is the map of tutorials
}
