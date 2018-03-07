Programme qui teste si de l’eau bout
```
Variables
  temperature

DEBUT
  Lire temperature
  SI temperature >= 100 ALORS
    ECRIRE "Ca bout"
  SINON
    ECRIRE "Ca bout pas encore.."
FIN
```

```javascript
var temperature = prompt("Water temperature?")

if temperature >= 100 {
  console.log("It\'s Hot!")
} else {
  console.log("It\'s not ready..")
}
```

Avec une fonction..
qui prend en paramètre la température et qui retourne vrai (`true`) si c'est chaud (au moins 100 degré), sinon retourne faux (`false`)
```javascript

/* ES5 */
function isHot(temperature) {
  if temperature >= 100 {
    return true
  } else {
    return false
  }
}

function isHot(temperature) {
  if temperature >= 100 {
    return true
  }
  
  return false
}

function isHot(temperature) {
  return temperature >= 100
}


/* ES6 */
const isHot = temperature => temperature >= 100
```


MinMax
```
Variables
  age <- 45 (ou RANDOM[0, 100])
  nombre

DEBUT
  TANT QUE nombre != age ALORS
    DEMANDE "Devine mon age:"
    LIRE nombre
    SI nombre > age ALORS
      ECRIRE "Moins"
    SINON
      ECRIRE "Plus"
  FIN TANT QUE
  ECRIRE "Bravo!"
FIN
```
