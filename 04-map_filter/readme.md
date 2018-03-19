## map/filter

### Subject

Provided data
```javascript
const schoolList = [ 
  { city: 'la loupe', students: 14, languages: [ 'js' ] },
  { city: 'paris', students: 51, languages: [ 'js' ] },
  { city: 'toulouse', students: 32, languages: [ 'js', 'java' ] },
  { city: 'bordeaux', students: 28, languages: [ 'js', 'java' ] },
  { city: 'reims', students: 20, languages: [ 'js' ] },
  { city: 'lyon', students: 21, languages: [ 'js' ] },
  { city: 'strasbourg', students: 17, languages: [ 'php' ] },
  { city: 'lille', students: 23, languages: [ 'php' ] },
  { city: 'orleans', students: 30, languages: [ 'php' ] },
  { city: 'biarritz', students: 0, languages: [ 'java' ] },
]
```

Create a function `getSchoolCities` which take an array of schools and return their cities

---

Create a `getBiggestSchools` function that takes an array of schools and returns only those with at least 30 students

---

Create a `filterByLanguage` function that takes 2 arguments:
  - an array of schools
  - a 'language' value
and returns only schools that teach that language

---

Bonus. Create a `prettyPrintSchools` function that takes an array of schools and returns a pretty formatted string such as

```
- la loupe (14) [ js ]
- paris (51) [ js ]
- toulouse (32) [ js | java ]
- ...
```

[answers](answers.md)
