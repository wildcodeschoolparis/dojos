## Pseudo Code
```
Variables
  nombre

Pour nombre de 1 à 100
  Si nombre multiple de 3
    Afficher 'Fizz'
  Sinon
    Afficher nombre
```

## JS

```javascript
for (var nb = 1; nb <= 100; nb += 1) {
  if (nb % 3 == 0 && nb % 5 == 0) {
    console.log('fizzbuzz');
  }
  else {
    console.log(nb)
  }
}
```
