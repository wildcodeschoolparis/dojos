## FizzBuzz (answers)

### Subject
Print the integers from 1 to 100, but:
- for multiples of 3, print 'fizz' (instead of the number)
- for multiples of 5, print 'buzz'
- for multiples of both 4 and 5, print 'fizzbuzz'

### Pseudo code
```
Variables
  nombre

DEBUT
  POUR nombre DE 1 A 100 FAIRE
    SI nombre divisible par 3 ET divisible par 5 ALORS
      ECRIRE "fizzbuzz"
    SINON SI nombre divisible par 3 ALORS
      ECRIRE "fizz"
    SINON SI nombre divisible par 5 ALORS
      ECRIRE "buzz"
    SINON
      ECRIRE nombre
FIN
```

### JavaScript

```javascript
for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("fizzbuzz")
  } else if (n % 3 === 0) {
    console.log("fizz")
  } else if (n % 5 === 0) {
    console.log("buzz")
  } else {
    console.log(n)
  }
}
```

Avec une fonction
```javascript

function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("fizzbuzz")
  } else if (n % 3 === 0) {
    console.log("fizz")
  } else if (n % 5 === 0) {
    console.log("buzz")
  } else {
    console.log(n)
  }
}

for (let n = 1; n <= 100; n++) {
  fizzbuzz(n)
}
```

### Refs
- [Rosetta code](https://rosettacode.org/wiki/FizzBuzz) **(fizz buzz in other languages)**
