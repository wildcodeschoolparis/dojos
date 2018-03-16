// for (let i = 0; i < list.length; i++) {
//   console.log(list[i])
// }

// let i = 0
// while (i < list.length) {
//   console.log(list[i])
//   i += 1
// }

// ES6ist

const printElem = elem => console.log(elem)
const printDetail = (elem, i, arr) => console.log(`le nombre ${elem} est le ${i}eme element de mon tableau ${arr}`)

// const printOnlyEvenElem = elem => {
//   if (elem % 2 === 0) {
//     console.log(elem)
//   }
// }
// print(list[0])

// for (const elem of list) {
//   print(elem)
// }

const list = [ 1, 2, 3, 4, 5 ]

const forEach = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}

forEach(list, printDetail)
