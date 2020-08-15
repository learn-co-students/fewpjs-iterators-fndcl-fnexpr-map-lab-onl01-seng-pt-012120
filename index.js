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

function titleCased()
{
  const results = [];
  tutorials.forEach(function(sent){
    if(!sent.split) return sent;
    const titleizeWord = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    result = [];
    sent.split(" ").forEach(function(word){
      result.push(titleizeWord(word))
    });
    results.push(result.join(" "));
    })
return results
};
titleCased();
