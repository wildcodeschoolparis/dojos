## kakatas

### 7 kyu
- [descending-order](https://www.codewars.com/kata/descending-order/train/javascript)

```javascript
const descendingOrder = n => { 
  const stringN = String(n) 
  const stringDigits = stringN.split('') 
  const digits = stringDigits.map(nb => Number(nb)) 
  const sortedDigits = digits.sort((a, b) => b - a) 
  const joinedDigits = sortedDigits.join('') 
  
  return Number(joinedDigits) 
}

// simplified

const descendingOrder = n => {  // 23461

  const result = String(n)      // '23461'
    .split('')                  // [ '2', '3', '4', '6', '1' ]
    .map(Number)                // [ 2, 3, 4, 6, 1 ] 
    .sort((a, b) => b - a)      // [ 6, 4, 3, 2, 1 ] 
    .join('')                   // '64321'
  
  return Number(result)         // 64321
}

// inlined
const descendingOrder = n => Number(String(n).split('').map(Number).sort((a, b) => b - a).join(''))

// another way 
const descendingOrder = n => Number(String(n).split('').sort().reverse().join(''))
```

### 6 kyu
- [find-the-parity-outlier](https://www.codewars.com/kata/find-the-parity-outlier/train/javascript)

```javascript
const isEven = n => n % 2 === 0
const isOdd = n => !isEven(n)

const findOutlier = integers => {
  const evens = integers.filter(isEven)
  const odds = integers.filter(isOdd)
  
  if (evens.length === 1) {
    return evens[0]
  }
  
  return odds[0]
}
```


- [create-phone-number](https://www.codewars.com/kata/create-phone-number/train/javascript)

```javascript
const createPhoneNumber = numbers => {
  const a = numbers.slice(0, 3).join('')
  const b = numbers.slice(3, 6).join('')
  const c = numbers.slice(6).join('')
  
  return `(${a}) ${b}-${c}`
}
```
