## forEach

### Subject

Create a function `forEach` which executes a provided function once for each array element, taking 2 arguments:
  - the array
  - the **callback** function to execute for each element, taking 1 argument:
    - the value of the current element being processed in the array

> (Obvioulsy) you are not allowed to use `Array.forEach`


---

Bonus. full implementation with all the optional arguments of the callback function

see. [Array.forEach](http://devdocs.io/javascript/global_objects/array/foreach) for further details

### Concepts
- callback: function passed into another function as an argument

### Code

```javascript
const forEach = (arr, fn) => {
  for (const elem of arr) {
    fn(elem)
  }
}
```

Full implementation
```javascript
const forEach = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr)
  }
}
```

### Testing
```javascript
const names = [
  'Yoann CRIBIER',
  'clement Denis',
  'AbDou KErkeb',
]

forEach(names, name => console.log(name))

forEach(names, name => console.log(name.toLowerCase()))
```


### Fun
```javascript
const teachers = [
  { name: 'Yoann Cribier', age: 27 },
  { name: 'Clement Denis', age: 30 },
  { name: 'Abdou Kerkeb', age: 32 },
]

// Simple function which take a teacher as argument and print his name
const printName = teacher => console.log(teacher.name)
forEach(teachers, printName)

// which is similar to
forEach(teachers, teacher => console.log(teacher.name))

// For each teacher, tell if he is a wise person
forEach(teachers, teacher => {
  if (teacher.age > 30) {
    console.log(`${teacher.name} is (probably) a wise person`)
  }
})
```

