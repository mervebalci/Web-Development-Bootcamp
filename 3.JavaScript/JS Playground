// Arithmetic operators
let two = 2
two + 2

const three = 1 + 2
three + 2 * 3

let aa = 1 * 2 + ((5 / 2) % 2)
aa

let same_aa = 1 * 2 + 5 / 2 % 2
same_aa


// The main difference between primitive types and objects is that objects are passed by reference, while primitive types are passed by value.
// Strings are a primitive type in JavaScript which means they are passed by VALUE.
const variable = 1
const test = `a string with the number ${variable}`
test
const test2 = `a string with the number ${variable + 10}`
test2
const test3 = `a string
defined
on multiple lines`
test3

// Numbers are a primitive type in JavaScript which means they are passed by VALUE.
const age = 10
const veryBigNumber = 54568642
const pi = 3.14

// Arrays
const k = []
const l = [1, 'efes', ['a', 'b']]
const m = [1, 2, 3]
m[0]
m[1]
m[2]
m.length


/*
Sometimes you want to create a new array from an existing array.
The simplest way is to use the spread operator `...` like this:
*/
const fruits = ['banana', 'pear', 'apple']
const moreFruits = [...fruits]
console.log(moreFruits)
console.log(fruits)

// exercise
const array1 = [1, 2, 3, {}]
const array2 = [...array1]

array2[3].name = "Efes"
array2[3]

array2[0] = 999

array1[3]
array1[0]
array2[0]

array2[3].lastname = "Boncuk"
array1
array2


// ADDING an item to an existing array - PUSH
// const fruits = ['banana', 'pear', 'apple'] is the existing array
fruits.push('strawberry')
console.log(fruits)

// Adding at the beginning of an array - UNSHIFT
fruits.unshift('cherry')
fruits

// You can add multiple items at the same time with PUSH/UNSHIFT method
fruits.push('mango', 'pineapple', 'kiwi', 'clementine')
fruits.unshift('orange', 'watermelon')
fruits

// REMOVING an item from the existing array - POP
fruits.pop()
fruits

// Remmoving the FIRST item of the array - SHIFT
fruits.shift()
fruits

// Removing the item at specific position 
// Remove two items startiing from index 3
fruits.splice(3,2)
fruits


// SLICE method
// const fruits = ['watermelon', 'cherry', 'banana', 'strawberry', 'mango', 'pineapple', 'kiwi']
const i = 3
const filteredFruits = fruits.slice(0, i-1).concat(fruits.slice(i, fruits.length))
console.log(filteredFruits)

// filteredFruits = ['watermelon', 'cherry', 'strawberry', 'mango', 'pineapple', 'kiwi']
const modifiedFruits = ['banana', ...filteredFruits]
modifiedFruits
// OR to add at the END of the array: const modifiedFruits = [...filteredFruits, 'banana']


// Arrays of arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
matrix[0][0]
matrix[2][0]


// Filling an array
let fillTheList = Array(12).fill('a')
fillTheList

typeof[]
// [].constructor === Array -> output will be true
// {}.constructor === Object -> output will be true


const list1 = [1, 2]
const [first, second] = list1
console.log(first)
console.log(second)

const list2 = [1, 2, 3, 4, 5]
const [first2, second2] = list2
console.log(first2)
console.log(second2)

const list3 = [1, 2, 3, 4, 5]
const [first3, second3, ...others] = list3
others


// INCLUDES()
const numbersList = [1, 2, 3, 4]

numbersList.includes(1)
numbersList.includes(5)

console.log('-----------') // to see the print outs easily


// FOR LOOP
fruits
// const fruits = ['watermelon', 'cherry', 'banana', 'strawberry', 'mango', 'pineapple', 'kiwi']

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
  if (fruits[i] === 'strawberry') {
    break
  }
}

console.log('------------')  // to see the print outs easily


// DO ... WHILE LOOP
const listt = ['a', 'b', 'c']

let z = 10

console.log(listt[z])
z = z + 1

while (z < listt.length) {
  console.log(listt[z])
  z = z + 1
}

do {
  console.log(listt[z])
  z = z + 1
} while (z < listt.length)

console.log('------------')  // to see the print outs easily


// FOR ... OF LOOP
const listtt = ['a', 'b', 'c']

for (const item of listtt) {
  console.log(item)
}

// For ... of loop with multiple arguments
for (const [index, value] of ['a', 'b', 'c'].entries()) {
  console.log(index)
  console.log(value)
}

// for..in, which should not be confused with for..of, can be used to iterate over the enumerable properties of an object:
// FOR ... IN LOOP
// Objects
const dog = { name: 'Roger', color: 'gray' }

for (let property in dog) {
  console.log(property) // 'name' in the first iteration
                        // 'color' in the second

  console.log(dog[property]) // 'Roger' in the first iteration
                             // 'gray' in the second
}


// Arrays
const cats = ['Boncuk', 'Efes']

for (let index in cats) {
  console.log(cats[index])
}


// FUNCTIONS
function id(eyecolor = 'red', age = 20) {
  console.log(eyecolor, age)
}

id("green", 24)    // output: green 24
id("black")        // output: black 20
id(32)             // output: 32 20
id()               // output: red 20
/*
id: function name
eyecolor and age: parameters
red and 20: values
green, 24, black: arguments

The difference between arguments and parameters is that you define the parameters and that's what you see inside the function. Arguments are passed by the program when you call the function. They are basically the value assigned to the parameter.
*/


// ask user's age
function ageLimit (userAge) {
  if (userAge < 18) {
    return "Sorry, you are not allowed!"
  } else {
    return "Welcome to MeetUp!"
  }  
}

const message = ageLimit(32)
message


// IMMEDIATELY-INVOKED FUNCTION EXPRESSION
/* An immediately-invoked function expression is a way to execute functions immediately, as soon as they are created, without waiting for another line of code to call them.

      (function() {                                      (function() {
        // sth sth                  OR                     // sth sth
      })()                                               }())

Those wrapping parentheses are actually what make our function, internally, be considered an expression. Otherwise, the function declaration would be invalid, because we didn't specify any name.
Remember that function declarations want a name, while function expressions do not require it. 
*/


;(function() {
  /* */
})()
/*
This is one of the rare cases when you need a semicolon in the previous line.
Because of the strange syntax, JavaScript tries to concatenate the lines, and as it sees a parentheses opening, it thinks the previous line was a function name and now we add a parameter.
*/



// OBJECTS
// How to create an object
const car = {}

// Define Object Property
/*
const car = {
  color: 'forest green',
  brand: 'Lexus'
}
*/

car.color   // to get the value of the property

const kevin = {name:"kevin", age:33}
const meryl = {name:"meryl", age: 32}
//const carManufacturers = {establishYear: , founder: }

car.age = 2    // ADDING NEW property to the 'car' object
car.model = 'CX-5'    // ADDING NEW property to the 'car' object
car.color = 'Black'   // setting a new value to the 'color' property
car.brand = "mazda"   // setting a new value to the 'brand' property
car.passengers = [kevin, meryl]
car
car.passengers[1].age

delete car.brand    // removing the existing property from 'car' object
car


// METHODS
const vehicle = {
  brand: 'Subaru',
  model: 'Crosstrek',
  color: 'ice khaki',
  start: function () {
    console.log("Engine started")
  },
  toGo: function (destination) {
    console.log(`Going to ${destination}`)
  },
}

vehicle.start()
vehicle.toGo("Paris")


// CLONING OBJECTS
// Object are passed by reference, but cloning turns it to passed by VALUE !!!
const dog1 = { dog: { name: 'test' } }
const dog2 = { ...dog1 }
dog1.dog.name = 'good dog'
dog2.dog.name //'good dog'

const a = { dog: { name: 'test' } }
const b = structuredClone(a)

a.dog.name = 'good dog'
b.dog.name //'test'


// Sort an array of objects by a property value
const tshirts = [
  { color: 'white', size: 'XXL' },
  { color: 'red', size: 'XL' },
  { color: 'black', size: 'M' }
]

tshirts.sort((a, b) => (a.color > b.color) ? 1 : -1)


// Merging two objects into one
const object1 = {
  name: 'Flavio'
}

const object2 = {
  age: 32,
  name: "Meryl"
}

const object3 = {...object1, ...object2 }
object3     // output will be { name: 'Meryl', age: 32 }  So name in object2 was overwritten on object1