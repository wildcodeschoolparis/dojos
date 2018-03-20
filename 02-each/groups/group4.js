// group4 [ @charles.chiacchia, @yvan.latorre, @marie.malarme, @alexis.theyssier, @mikael.verdu, @aurelio.lima.ferreira ]

const schoolParis = {
  city: 'paris',
  nbStudents: 51
}
const schoolLaLoupe = {
  city: 'La Loupe',
  nbStudents: 30
}

// console.log(schoolParis)

const schoolList = [
  schoolParis,
  schoolLaLoupe,
  {
    city: 'lyon',
    nbStudents: 31
  }
]

// const schoolMarseille = { city: 'marseille', nbStudents: 0 }
// schoolList.push(schoolMarseille)
// console.log(schoolList)

const printSchool = school => console.log(school)

const showSchools = (list) => {
  // for (let i = 0; i < list.length; i++) {
  //   console.log(list[i])
  // }

  // for (const school of list) {
  //   console.log(`${school.city} school has ${school.nbStudents} students`)
  // }

  list.forEach(school => console.log(school.city))
}

showSchools(schoolList)
