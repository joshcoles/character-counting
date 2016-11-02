var occurences = {};

function occurenceCounter(phrase) {
  var letters = phrase.split(' ').join('').toLowerCase().split('');

  for (i = 0; i < letters.length; i += 1) {
    if (typeof occurences[letters[i]] != "undefined") {
      occurences[letters[i]] += 1;
    } else {
      occurences[letters[i]] = 1;
    }
  }
console.log(occurences);
return occurences;

}

occurenceCounter("Hi there my name is josh");