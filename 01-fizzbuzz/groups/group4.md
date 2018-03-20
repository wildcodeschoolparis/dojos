// group4 [ @charles.chiacchia, @alexis.theyssier, @constance.henrot, @mohand.hassam, @sophie.michaudel, @pierre.poretti ]

## Pseudo Code

```
Variables
  n 

Afficher n
  Pour n de 1 a 100

    Si n multiple de 3 et 5
      afficher fizzbuzz
    Sinon si n multiple de 3
      afficher fizz
    Sinon si n multiple de 5
      afficher buzz
    Sinon
      afficher n
```

## JS

```javascript
for (var n = 1; n <= 100; n = n + 1) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log('fizzbuzz')
  }
  else if (n % 3 == 0) {
    console.log('fizz')
  }
  else if (n % 5 == 0) {
    console.log('buzz')
  }
  else {
    console.log(n)
  }
}
```
