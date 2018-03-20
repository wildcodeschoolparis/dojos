// group1 [ @sophie.michaudel, @samuel.sarano, @philippe.maguer, @helena.domlan, @mehdi.chtira, @joffrey.chauleau ]

const schoolParis = {
  city: "Paris",
  students: 51
}
// console.log(schoolParis)
const schoolBordeaux = {
  city: "Bordeaux",
  students: 31
}

const schoolList = [
  { city: "Paris", students: 51 },
  { city: "Bordeaux", students: 31 },
  { city: "Lille", students: 11  }
]

// console.log(schoolList[], schoolList.length)

function showSchools(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(`${list[i].city} has ${list[i].students} students`)
  }

  for (const school of list) {
    console.log(`${school.city} has ${school.students} students`)
  }

  list.forEach((school) => console.log(school))
}

showSchools(schoolList)
