// FizzBuzz

for (let n = 0; n < 50; n++) {
  if (n % 3 === 0 && n % 5 === 0)
    console.log("fizzbuzz")
  else if (n % 3 === 0)
    console.log("fizz")
  else if (n % 5 === 0)
    console.log("buzz")
  else
    console.log(n)
}


function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0)
    return "fizzbuzz"
  if (n % 3 === 0)
    return "fizz"
  if (n % 5 === 0)
    return "buzz"
  return n
}

console.log(fizzbuzz(1))
console.log(fizzbuzz(3))
console.log(fizzbuzz(5))
console.log(fizzbuzz(15))
