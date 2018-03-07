var age = Math.floor(Math.random() * 100)

function minmax(age, response) {
  if (response == age) {
    console.log("Bingo")
  } else if (response > age) {
    console.log("It's less")
  } else {
    console.log("It's more")
  }
}


minmax(age, 10)
