// FizzBuzz

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
