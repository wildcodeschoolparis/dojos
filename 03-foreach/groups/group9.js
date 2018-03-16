
// console.log(table[0])
// console.log(table[1])
// console.log(table[2])
// console.log(table[3])
// console.log(table[4])

// for (let i = 0; i < table.length; i++) {
//   console.log(table[i])
// }

// let i = 0
// while (i < table.length) {
//   console.log(table[i])
//   i++
// }

// for (const elem of table) {
//   console.log(elem)
// }
const table = [ 1, 2, 3, 4, 5, 6, 7 ]

const print = elem => console.log(elem)
const printPlusTen = elem => console.log(elem + 10)

// table.forEach(elem => console.log(elem))

const forEach = (arr, fn) => {
  for (const elem of arr) {
    fn(elem)
  }
}

// table.forEach(print)

const increment = elem => {
  elem = elem * 100
  console.log(elem)
}

// forEach(table, increment)


const urls = [
  "http://source.com/image0.jpg",
  "http://source.com/image1.jpg",
  "http://source.com/image2.jpg",
  "http://source.com/image3.jpg",
  "http://source.com/image4.jpg",
  "http://source.com/image5.jpg",
  "http://source.com/image6.jpg",
  "http://source.com/image7.jpg",
]

const createImg = url => `
<div class="img">
  <img src="${url}" />
</div>
`
const images = urls.map(createImg)

console.log(images)
