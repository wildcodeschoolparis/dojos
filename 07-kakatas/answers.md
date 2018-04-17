## kakatas

### 7 kyu
- [square-every-digit](https://www.codewars.com/kata/square-every-digit/train/javascript)

```javascript
const squareDigits = num => { // 9119
  const numString = String(num) // '9119'
  
  const tmp = numString
    .split('') // [ '9', '1', '1', '9' ]
    .map(x => Number(x)) // [ 9, 1, 1, 9 ]
    .map(x => x * x) // [ 81, 1, 1, 81 ]
    .join('') // '811181'
   
  return Number(tmp) // 811181
}

console.log(squareDigits(9119)) // expects: 811181
```