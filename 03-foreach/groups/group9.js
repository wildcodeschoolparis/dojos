
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


const objs = [
  { url: "http://source.com/image0.jpg", fn: () => {} },
  { url: "http://source.com/image1.jpg", fn: () => {} },
  { url: "http://source.com/image2.jpg", fn: () => {} },
  { url: "http://source.com/image3.jpg", fn: () => {} },
  { url: "http://source.com/image4.jpg", fn: () => {} },
  { url: "http://source.com/image5.jpg", fn: () => {} },
  { url: "http://source.com/image6.jpg", fn: () => {} },
  { url: "http://source.com/image7.jpg", fn: () => {} },
]

const createImg = obj => `
<div class="image">
  <img src="${obj.url}" />
  <button onclick="${obj.fn}" />
</div>
`
const images = objs.map(createImg)

console.log(images)

const element = document.getElementById('images')

element.innerHTML = images


<div id="images">
  <div class="image">
    <img src="http://source.com/img0.jpg" />
  </div>
  <div class="image">
    <img src="http://source.com/image1.jpg" />
  </div>
  <div class="image">
    <img src="http://source.com/image2.jpg" />
  </div>
  <div class="image">
    <img src="http://source.com/image3.jpg" />
  </div>
  <div class="image">
    <img src="http://source.com/image4.jpg" />
  </div>
  <div class="image">
    <img src="http://source.com/image5.jpg" />
  </div>
  <div class="image">
    <img src="http://source.com/image6.jpg" />
  </div>
  <div class="image">
    <img src="http://source.com/image7.jpg" />
  </div>
<div/>
