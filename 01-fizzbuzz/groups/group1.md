## Pseudo Code

```
Variables
  nombre

Debut
  Pour nombre de 1 à 100
    Si nombre multiple de 3 et de 5
      Afficher fizzbuzz
    Sinon si nombre multiple de 3
      Afficher Fizz
    Sinon si nombre multiple de 5
      Afficher Buzz
    Sinon
      Afficher nombre
    Incrementer nombre
  Fin Pour
Fin
```

## JS

```javascript
for (var nb = 1; nb <= 100; nb++) {
  if (nb % 3 == 0 && nb % 5 == 0) {
    console.log('fizzbuzz')
  }
  else if (nb % 3 == 0) {
    console.log('fizz')
  }
  else if (nb % 5 == 0) {
    console.log('buzz')
  }
  else {
    console.log(nb)
  }
}
```