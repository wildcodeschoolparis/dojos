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

Create a function `getBiggestSchools` that takes an array of schools and returns only those with at least 30 students

---

Create a function `filterByLanguage` that takes 2 arguments:
  - an array of schools
  - a 'language' value
and returns only schools that teach that language

---

Bonus. Create a function `prettyPrintSchools` that takes an array of schools and returns a pretty formatted string such as
```
- la loupe (14) [ js ]
- paris (51) [ js ]
- toulouse (32) [ js | java ]
- ...
```

### Concepts
- map/filter
- includes

### Code

```javascript
const getSchoolCities = schools => schools.map(school => school.city)


const getBiggestSchools = schools => schools
  .filter(school => school.students >= 30)

const biggestSchools = getBiggestSchools(schoolList).map(getSchoolCities)
console.log(biggestSchools)


const filterByLanguage = (schools, language) => schools
  .filter(school => school.languages.includes(language))

const jsSchools = filterByLanguage(schoolList, 'js')


const prettyPrintSchools = schools => schools
  .map(s => `- ${s.city} (${s.students}) [ ${s.languages.join(" | ")} ]`)
  .join('\n')
  
console.log(prettyPrintSchools(schoolList))
```

