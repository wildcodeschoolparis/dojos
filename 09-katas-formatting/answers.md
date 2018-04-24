## katas-formatting

### 8 kyu
- [dollars-and-cents](https://www.codewars.com/kata/dollars-and-cents/train/javascript)

```javascript
const formatMoney = amount => '$' + amount.toFixed(2)

// or with template string

const formatMoney = amount => `$${amount.toFixed(2)}`
```

### 7 kyu
- [substituting-variables-into-strings-padded-numbers](https://www.codewars.com/kata/substituting-variables-into-strings-padded-numbers/train/javascript)

```javascript
const solution = value => {
  const paddedValue = '00000' + value
  
  return `Value is ${paddedValue.slice(-5)}`
}

// inlined

const solution = value => `Value is ${('00000' + value).slice(-5)}`
```

### 6 kyu
- [who-likes-it](https://www.codewars.com/kata/who-likes-it/train/javascript)

```javascript
const likes = names => {
  switch (names.length) {
    case 0: return 'no one likes this'
    case 1: return `${names[0]} likes this`
    case 2: return `${names[0]} and ${names[1]} like this`
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

// for curious: recursive variation for `case 3:`
// case 3: return `${names[0]}, ${likes(names.slice(1))}`
```


### 5 kyu
- [convert-string-to-camel-case](https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript)

### 4 kyu
- [human-readable-duration-format](https://www.codewars.com/kata/human-readable-duration-format/train/javascript)
