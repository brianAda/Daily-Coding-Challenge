/*
 * Write a function that converts a sentence into Pig Latin.
 *
 * Rules: https://en.wikipedia.org/wiki/Pig_Latin#Rules
 *
 *   stockBuySell([110, 180, 260, 40, 310, 535, 695])
 *   returns: "buy on day 4, sell on day 7"
 *
 * From @cassidoo's weekly newsletter:
 * https://buttondown.email/cassidoo/archive/76754bbd-c068-449b-be0c-c20d38699ca8
 *
 */

//* Split string into words
//* Detect words beginning w/ consontant vs vowel sounds
//* Detect consonant clusters.
//* slice leading chars (if necessary) and append to end + 'ay'

function pigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const words = str.split(' ');

  const pigWords = words.map((word) => {
    // Case: letter 1 is vowel
    if (vowels.includes(word[0])) {
      return `${word}yay`;
    }

    // Case: letter 2 is a vowel
    if (vowels.includes(word[1])) {
      // slice char 1, append char 1 + ay
      const char = word[0];
      return `${word.slice(1)}${char}ay`;
    }

    // Case: word begins with a consonant cluster
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str.charAt(i)) !== -1) {
        return `${str.slice(i)}${str.slice(0, i)}ay`;
      }
    }
  });

  return pigWords.join(' ');
}

// Test all three cases:
let test = pigLatin('pig smile eat latin string omelet'); // "igpay ilesmay eatyay atinlay ingstray omeletyay"

/*
todo:
punctuation handling
capitalization
*/
