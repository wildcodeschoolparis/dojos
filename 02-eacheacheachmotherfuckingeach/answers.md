## Each

### Subject

Declare an object `schoolParis` which properties describes our school
> object should contain at least the city and the number of students

Declare an array `schoolList` with multiple school objects

Create a function `showSchools` which take an array of schools and print for each one of them a message such as "Paris school has 51 students"
> 2 versions: with `for..of`) loop & with `forEach` method

Bonus:
Create a function `getTotalStudents` which take an array of schools and return the total count of students

### Notions
- let/const
- template strings
- object/array
- `for`/`for..of` loops, `forEach`
- testing with `console.log` in Node.js

### Code

```javascript
const schoolParis = {
  city: 'paris',
  students: 51,
}
```

```javascript
const schoolList = [ 
  { city: 'paris', students: 51 },
  { city: 'toulouse', students: 30 },
  { city: 'orleans', students: 30 },
  { city: 'lille', students: 23 },
  { city: 'strasbourg', students: 17 },
]
```

```javascript
// for
for (let i = 0; i < schoolList.length; i++) {
  const s = schoolList[i]

  console.log(`${s.city} has ${s.students} students`)
}

// while
let i = 0
while (i < schoolList.length) {
  const s = schoolList[i]

  console.log(`${s.city} has ${s.students} students`)
  i++
}

// for..of
for (const school of schoolList) {
  console.log(`${school.city} has ${school.students} students`)
}

// forEach
schoolList.forEach(s => console.log(`${s.city} has ${s.students} students`))
```

```javascript
const getTotalStudents = schoolList => {
  let totalStudents = 0
  schoolList.forEach(s => {
    totalStudents += s.students
  })

  return totalStudents
}
```
