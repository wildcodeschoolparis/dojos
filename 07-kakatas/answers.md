## kakatas

### 7 kyu
- [square-every-digit](https://www.codewars.com/kata/square-every-digit/train/javascript)

```javascript

const squareDigits = num => {
  const numString = String(num)
  
  const stringDigits = numString.split('')

  const convertToInteger => x => Number(x)
  const digits = stringDigits.map(convertToInteger)

  const square = x => x * x
  const squaredDigits = digits.map(square)
   
  const result = squaredDigits.join('')
  
  return Number(result)
}

// simplified

const squareDigits = num => {   // 9119
  
  const result = String(num)    // '9119'
    .split('')                  // [ '9', '1', '1', '9' ]
    .map(Number)                // [ 9, 1, 1, 9 ]
    .map(x => x * x)            // [ 81, 1, 1, 81 ]
    .join('')                   // '811181'
   
  return Number(result)         // 811181
}

console.log(squareDigits(9119)) // expects: 811181
```