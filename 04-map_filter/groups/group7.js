// group7 [ @helene.blanchard, @smain.khaldi, @aurelio.lima.ferreira, @nadia.djellali, @lorraine.chastang ]

const numbers = [ 1, 2, 3, 4 ]

// [ 1, 2, 3, 4 ] => [ 2, 3, 4, 5 ]

// 1 => 2
// 2 => 3

const isEven = n => {
  if ( n % 2 === 0) {
    return true
  }
  else {
    return false
  }
}

const getEvenNumbers = nList => {
  return nList.filter(isEven)
}

// console.log(getEvenNumbers(numbers))

const increment = (INPUT) => {
  const OUTPUT = INPUT + 1

  return OUTPUT
}

// const increment = n => n + 1

// increment(1) // 2

const multiplyBy100 = (INPUT) => {
  const OUTPUT = INPUT * 100

  return OUTPUT
}

// 1 => 100
// 2 => 200

// "yoann" => "YOANN"
// "nadia" => "NADIA"

const up = INPUT => {
  const OUTPUT = INPUT.toUpperCase()

  return OUTPUT
}

const names = [
  "yoann",
  "nadia",
  "lorraine",
  "smain",
]

// console.log(names.map(up))

// const result = numbers.map(multiplyBy100)

// const map = (list, fn) => {
//   const result = []

//   for (const n of list) {
//     const _n = fn(n)

//     result.push(_n)
//   }

//   return result
// }

// map(numbers, increment)

// [ 1, 2, 3, 4 ]
// []

// 1 increment(1) -> 2
// [ 2 ]

// 2 increment(2) -> 3
// [ 2, 3 ]

// -> [ 2, 3, 4, 5 ]

// console.log(result)

const schoolParis = {
  city: 'paris',
  students: 51,
  languages: [ 'js' ]
}

const schoolLaloupe = { city: 'la loupe', students: 14, languages: [ 'js' ] }

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

const getCity = school => {
  return school.city
}


const getSchoolCities = schools => {
  return schools.map(getCity)
}

// const result = getSchoolCities(schoolList)
// { city: 'la loupe', students: 14, languages: [ 'js' ] } => 'la loupe'

// console.log(result)
// [ 'la loupe', 'paris', 'toulouse' ]

const _schoolList = [
  { city: 'la loupe', students: 14, languages: [ 'js' ] },
  { city: 'paris', students: 51, languages: [ 'js' ] },
  { city: 'toulouse', students: 32, languages: [ 'js', 'java' ] },
]

const isBigSchool = school => {
  if (school.students >= 30) {
    return true
  }
  else {
    return false
  }
}

// console.log(isBigSchool(schoolLaloupe))

const getBiggestSchools = (schools) => {
  return schools.filter(isBigSchool)
}

// const result = getBiggestSchools(_schoolList)

const result = _schoolList
  .filter(isBigSchool)
  .map(getCity)

console.log(result)

const expected = [
  { city: 'paris', students: 51, languages: [ 'js' ] },
  { city: 'toulouse', students: 32, languages: [ 'js', 'java' ] },
]
