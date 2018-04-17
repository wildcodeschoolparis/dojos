## tas de katas

### i can win
[even-or-odd](https://www.codewars.com/kata/even-or-odd/train/javascript)

```javascript
const evenOrOdd = number => {
  if (number % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}

// simplified

const evenOrOdd = n => n % 2 === 0 ? 'Even' : 'Odd'
```

### bring it on
[counting-sheep](https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript)

```javascript
const countSheeps = arrayOfSheeps => {
  const isPresent = sheep => sheep === true

  const arrayOfPresentSheeps = arrayOfSheeps.filter(isPresent)

  const count = arrayOfPresentSheeps.length

  return count
}

// simplified

const countSheeps = sheeps => sheeps.filter(s => s === true).length
```

### hurt me plenty
[vowel-count](https://www.codewars.com/kata/vowel-count/train/javascript)

```javascript
const allVowels = ['a', 'e', 'i', 'o', 'u'] // or 'aeiou' (includes exist on String too -> http://devdocs.io/javascript/global_objects/string/includes)

const isVowel = c => allVowels.includes(c)

// console.log(isVowel('a')) // true
// console.log(isVowel('b')) // false
// console.log(isVowel(' ')) // false

const getCount = str => {
  const characters = str.split('')
  const vowels = characters.filter(isVowel)
  const count = vowels.length
  
  return count
}

// simplified

const getCount = str => str // 'Hello World'
  .split('') // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]
  .filter(c => 'aeiou'.includes(c))// [ 'e', 'o', 'o' ]
  .length // 3

// inlined

const getCount = str => str.split('').filter(c => 'aeiou'.includes(c)).length
```

### hardcode
[disemvowel-trolls](https://www.codewars.com/kata/disemvowel-trolls/train/javascript)

```javascript
const isVowel = c => 'aeiou'.includes(c.toLowerCase()) // case handling with toLowerCase()

const disemvowel = str => {
  const characters = str.split('')
  const exceptVowels = characters.filter(c => !isVowel(c))
  const result = exceptVowels.join('')

  return result
}

// simplified

const disemvowel = str => str
  .split('')
  .filter(c => !'aeiou'.includes(c))
  .join('')
```


### nightmare
[decode-the-morse-code](https://www.codewars.com/kata/decode-the-morse-code/train/javascript)

```javascript
const MORSE_CODE = [
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': '\'',
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
]

const decodeMorse = morse => {
  const morseWords = morse.trim()split('   ') // trim whitespaces (to pass codewars tests..)

  const decodeCharacter = c => MORSE_CODE[c] // decodeCharacter('....') -> 'H'
  
  const decodeWord = morseWord => {
    const morseCharacters = morseWord.split(' ')

    return morseCharacters.map(decodeCharacter).join('')
  }

  const decodedWords = morseWords.map(decodeWord)

  return decodedWords.join(' ')
}

// simplified (with magic)

const decodeMorse = morse => morse
  .trim()
  .split('   ')
  .map(word => word
    .split(' ')
    .map(c => MORSE_CODE[c])
    .join(''))
  .join(' ')

console.log(decodeMorse('.... . -.--   .--- ..- -.. .')) // 'HEY JUDE'
```