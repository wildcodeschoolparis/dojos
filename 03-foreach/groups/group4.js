// group4 [ @alexis.theyssier, @frederic.paquet, @gaelle.fougere, @joffrey.chauleau, @frederic.olive, @louise.foussat ]

// for (let i = 0; i < table.length; i++) {
//   console.log(table[i])
// }

// let i = 0
// while (i < table.length) {
//   console.log(table[i])
//   i++
// }

// for (const elem of table) {
//   if (elem % 2 === 0) {
//     console.log(elem)
//   }
// }


// table.forEach(elem => console.log(elem))


const table = [ 1, 2, 3, 4, 5 ]

const print = elem => console.log(elem)
const printPlusTen = elem => console.log(elem + 10)
const printDetail = (elem, index, arr) => console.log(`${elem} is my ${index}th element of my array: ${arr}`)

// table.forEach(printDetail)

const forEach = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}

forEach(table, print)
// forEach(table, printPlusTen)
// forEach(["paris", "london"], printPlusTen)
