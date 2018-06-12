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

```javascript
const capitalize = w => w[0].toUpperCase() + w.slice(1)

const toCamelCase = str => str
  .replace(/[^A-Z|a-z]/g, ' ')
  .split(' ')
  .map((w, i) => i > 0 ? capitalize(w) : w)
  .join('')

// simplified version with minimal matching

const toCamelCase = str => str.replace(/[-_ ]\w/ig, m => m[1].toUpperCase()) 
// [-_ ]\w matches any word (\w) preceeded by '-', '_' or ' '

toCamelCase('Code_wars_rocks') // -> matches : '_w' and '_r'
```

### 4 kyu
- [human-readable-duration-format](https://www.codewars.com/kata/human-readable-duration-format/train/javascript)

```javascript
const second = 1
const minute = 60
const hour = 60 * minute
const day = 24 * hour
const year = 365 * day

const decompose = seconds => {
  const y = Math.floor(seconds / year)
  seconds -= y * year
  const d = Math.floor(seconds / day)
  seconds -= d * day
  const h = Math.floor(seconds / hour)
  seconds -= h * hour
  const m = Math.floor(seconds / minute)
  seconds -= m * minute
  const s = seconds
  
  return [ y, d, h, m, s ]
}

const units = [ 'year', 'day', 'hour', 'minute', 'second' ]

const formatDuration = seconds => {
  const t = decompose(seconds)
  
  const formatted = t
    .map((u, i) => u > 0 ? `${u} ${units[i]}${u > 1 ? 's' : ''}` : null)
    .filter(u => u !== null)
    
  if (!formatted.length) {
    return 'now'
  }
  
  return formatted.reduce((acc, s, i, a) => {
    console.log(i, s)
    return acc + (i === a.length-1 ? ' and ' : ', ') + s
  })
}
```
