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

Create a function `getSchoolCities` which takes an array of schools and return their cities

---

Create a function `getBiggestSchools` which takes an array of schools and returns only those with at least 30 students

---

Create a function `filterByLanguage` which takes 2 arguments:
  - an array of schools
  - a 'language' value
and returns only schools that teach that language

---

Bonus. Create a function `prettyPrintSchools` which takes an array of schools and returns a pretty formatted string following this example
```
- la loupe (14) [ js ]
- paris (51) [ js ]
- toulouse (32) [ js | java ]
- ...
```

### Concepts
- [map](http://devdocs.io/javascript/global_objects/array/map)
- [filter](http://devdocs.io/javascript/global_objects/array/filter)
- [includes](http://devdocs.io/javascript/global_objects/array/includes)
- [join](http://devdocs.io/javascript/global_objects/array/join)

### Code

```javascript
const getCity = school => {
  return school.city
}

const getSchoolCities = schools => {
  return schools.map(getCity)
})

// OR simplified

const getCity = school => school.city

const getSchoolCities = schools => schools.map(getCity)


console.log(getSchoolCities(schoolList))
```

```javascript
const isBigSchool = school => {
  if (school.students >= 30) {
    return true
  }

  return false
}

const getBiggestSchool = schools => {
  return schools.filter(isBigSchool)
}

// OR simplified

const isBigSchool = school => school.students >= 30

const getBiggestSchools = schools => schools.filter(isBigSchool)


console.log(getBiggestSchools(schoolList))
```

```javascript
const hasLanguage = (school, language) => {
  if (school.languages.includes(language)) {
    return true
  }

  return false
}

const filterByLanguage = (schools, language) => {
  schools.filter(school => hasLanguage(school, language))
}

// OR simplified

const hasLanguage = (school, language) => school.languages.includes(language)

const filterByLanguage = (schools, language) => schools.filter(school => hasLanguage(school, language))


const jsSchools = filterByLanguage(schoolList, 'js')
console.log(jsSchools)
```

```javascript
const prettyPrintSchools = schools => schools
  .map(s => `- ${s.city} (${s.students}) [ ${s.languages.join(" | ")} ]`)
  .join('\n')
  
console.log(prettyPrintSchools(schoolList))
```
