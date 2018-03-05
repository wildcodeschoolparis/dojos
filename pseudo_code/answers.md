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
