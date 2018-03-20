// group4 [ @capucine.leclerc, @edouard.de.laage, @charles.chiacchia, @bogdan.ceu, @constance.henrot, @hedi.kochad ]

const assert = require('assert')

const numbers = [ 1, 2, 3, 4, 5]

const inc10 = (n) => {
  return n + 10
}

// const result = inc10(40)

// const result = numbers.map(inc10)
// console.log(numbers, result)



// [1, 2, 3, 4, 5]

// []
// 1 inc10(1) -> 11
// [11]
// 2 inc10(2) -> 12
// [11, 12]
// ...
// -> [11, 12, 13, 14, 15]

// console.log('result:', result)

// [ 1, 2, 3, 4, 5] => [ 11, 12, 13, 14, 15]

const schoolList = [
  { city: 'la loupe', students: 14, languages: [ 'js' ] },
  { city: 'paris', students: 51, languages: [ 'js' ] },
  { city: 'toulouse', students: 32, languages: [ 'js', 'java' ] },
  // { city: 'bordeaux', students: 28, languages: [ 'js', 'java' ] },
  // { city: 'reims', students: 20, languages: [ 'js' ] },
  // { city: 'lyon', students: 21, languages: [ 'js' ] },
  // { city: 'strasbourg', students: 17, languages: [ 'php' ] },
  // { city: 'lille', students: 23, languages: [ 'php' ] },
  // { city: 'orleans', students: 30, languages: [ 'php' ] },
  // { city: 'biarritz', students: 0, languages: [ 'java' ] },
]

const schoolLaloupe = {
  city: 'la loupe',
  students: 14,
  languages: [ 'js' ]
}


const schoolParis = {
  city: 'paris',
  students: 51,
  languages: [ 'js' ]
}


// getCity(schoolLaloupe) // -> 'la loupe'
// getCity(schoolParis) // -> 'paris'

const getCity = school => {
  return school.city
}

const getSchoolCities = schools => {
  return schools.map(getCity)
}

const cities = getSchoolCities(schoolList)

// console.log(cities)

const isBigSchool = (school) => {
  if (school.students >= 30) {
    return true
  }
  else {
    return false
  }
}

assert.equal(isBigSchool(schoolLaloupe), false)
assert.equal(isBigSchool(schoolParis), true)


const getBiggestSchools = schools => {
  return schools.filter(isBigSchool)
}


const _testSchoolList = [
  { city: 'la loupe', students: 14, languages: [ 'js' ] },
  { city: 'paris', students: 51, languages: [ 'js' ] },
  { city: 'toulouse', students: 32, languages: [ 'js', 'java' ] },
]

const result = getBiggestSchools(_testSchoolList)

console.log(getSchoolCities(results))

const expected = [
  { city: 'paris', students: 51, languages: [ 'js' ] },
  { city: 'toulouse', students: 32, languages: [ 'js', 'java' ] },
]

assert.deepStrictEqual(result, expected)

// const res = n => {
//   return n
// }

// assert.equal(res(42), 42)
// assert.equal(res(0), 0)

