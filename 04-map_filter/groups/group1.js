// group1 [ @valery.chin, @mehdi.chtira, @sabrina.berguer, @samuel.lambert, @kim.spychalski, @mohand.hassam ]

const assert = require('assert')

const table = [ 1, 2, 3, 4 ]

const print = (elem) => console.log(elem)
const printDetail = (elem) => console.log(elem)

const inc = elem => {
  return elem + 1
}

const integerToString = elem => String(elem)

// console.log(typeof integerToString(42))

// (elem, index, arr) => { return elem }

// console.log(inc(42))

const newTable = table.map(integerToString)
// console.log(newTable) // [ "1", "2", "3", "4" ]

// [ 2, .., .., ..]
// [ 2, 3, .., ..]
// [ 2, 3, 4, ..]
// [ 2, 3, 4, 5]

// elem 1 -> 2
// elem 2 -> 3
// elem 3 -> 4
// elem 4 -> 5

// -> [ 2, 3, 4, 5]

// const school = {
//   city: 'la loupe',
//   students: 14,
//   languages: [ 'js' ]
// }

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

const _schoolList = [
  { city: 'la loupe', students: 14, languages: [ 'js' ] },
  { city: 'paris', students: 51, languages: [ 'js' ] },
]

const _schoolList2 = [
  { city: 'lille', students: 23, languages: [ 'php' ] },
  { city: 'orleans', students: 30, languages: [ 'php' ] },
]

const getSchoolCities = schools => {
  const getCity = school => school.city

  return schools.map(getCity)
}

const cities = getSchoolCities(schoolList)

// console.log(cities.map(city => city.toUpperCase()))

assert.deepStrictEqual(getSchoolCities(_schoolList), [ "la loupe", "paris" ])
assert.deepStrictEqual(getSchoolCities(_schoolList2), [ "lille", "orleans" ])

// const getBiggestSchools = schools => {
//   // const isBigSchool = school => {
//   //   if (school.students >= 30) {
//   //     return true
//   //   }
//   //   return false
//   // }

//   const isBigSchool = school => school.students >= 30

//   return schools.filter(isBigSchool)
// }

const getBiggestSchools = schools =>
  schools.filter(school => school.students >= 30)


const expected = [
  { city: 'paris', students: 51, languages: [ 'js' ] }
]

assert.deepStrictEqual(getBiggestSchools(_schoolList), expected)

const expected2 = [
  { city: 'orleans', students: 30, languages: [ 'php' ] }
]

assert.deepStrictEqual(getBiggestSchools(_schoolList2), expected2)
