const list = [ 1, 2, 3, 4, 5 ]

// console.log(list[0])
// console.log(list[1])
// console.log(list[2])
// console.log(list[3])
// console.log(list[4])

// for (let i = 0; i < list.length; i++) {
//   console.log(list[i])
// }

// let i = list.length - 1
// while (i >= 0) {
//   console.log(list[i])
//   i--
// }


// for (const toto of list) {
//   console.log(toto)
// }

const print = elem => console.log(elem)
const printDetail = (elem, index, arr) => console.log(`${elem} is my ${index}th element in my table: ${arr}`)
const printPlusTen = elem => console.log(elem + 10)

// const forEach = (arr, fn) => {
//   let i = 0
//   while (i < arr.length) {
//     fn(arr[i], i, arr)
//     i++
//   }
// }

const forEach = (arr, fn) => {
  let index = 0
  for (const elem of arr) {
    fn(elem, index, arr)
    index++
  }
}

// list.forEach(printDetail)
// forEach(list, printDetail)
// forEach(list, printPlusTen)

const teachers = [
  { name: 'Yoann Cribier', age: 27 },
  { name: 'Clement Denis', age: 30 },
  { name: 'Abdou Kerkeb', age: 32 },
]


const printIfWise = teacher => {
  if (teacher.age > 30) {
    console.log(`${teacher.name} is (probably) a wise person`)
  }
}

forEach(teachers, printIfWise)
