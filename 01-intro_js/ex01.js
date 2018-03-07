var temperature = prompt("Water temperature?")

if temperature >= 100 {
  console.log("It\'s Hot!")
} else {
  console.log("It\'s not ready..")
}

function isHot(temperature) {
  if temperature >= 100 {
    return true
  } else {
    return false
  }
}

function isHot(temperature) {
  if temperature >= 100 {
    return true
  }

  return false
}

function isHot(temperature) {
  return temperature >= 100
}

const isHot = temperature => temperature >= 100
