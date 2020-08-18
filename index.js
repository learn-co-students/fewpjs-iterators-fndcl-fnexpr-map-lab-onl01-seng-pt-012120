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




// function capSentence(text) {
//   let wordsArray = text.toLowerCase().split(' ')
//   let capsArray = wordsArray.map(word=>{
//       return word[0].toUpperCase() + word.slice(1)
//   })
//   return capsArray.join(' ')
// }

const titleCased = () => {
  // return tutorials

  return tutorials.map(function(tutorial) {
    let words = tutorial.split(" ")
    const capitalizedWords = words.map(function(word) {
      const firstLetter = word[0].toUpperCase()
      const theRear = word.slice(1)
      return firstLetter + theRear
    })
    return capitalizedWords.join(" ")
  })
}

titleCased()