// Write a program that defines two variables, the base and height of a rectangle, and calculates its area and the perimeter.
const base = 4
const height = 8

const area = base * height
const perimeter = 2 * (base + height)
area
perimeter


// Write a program that initializes an array with all values at 0. Then loop over that array and change each value in the array with the value of the index.
let array = [0, 0, 0, 0]

let anotherArray = []
for (let i = 0; i < array.length; i++) {
  anotherArray.push(i)
}
anotherArray
for (let i = 0; i < array.length; i++) {
  array[i] = i
}
array

// OR
let list = [0, 0, 0, 0]

list = list.map((item, index, arr) => index)

// OR
const listt = [0, 0, 0, 0]

for (let i = 0; i < listt.length; i++) {
  listt[i] = i
}
console.log(listt)


// Rewrite the loop for (let i=0; i<=10; i++) { console.log(i) } using a while loop.
// for (let i=0; i<=10; i++) { console.log(i) }
let i = 0

while (i <= 10) {
  console.log(i)
  i++
}


// Write a program that finds the smallest and biggest number in an array, and prints them.
let numbers = [2, 5, 6, 1098, -3.14, 47]

// console.log(Math.min(...numbers))  --->  This is the cheesy way
// console.log(Math.max(...numbers))  --->  This is the cheesy way

// WHILE LOOP
let m = 0
let smallestNum = numbers[m]

while (m < numbers.length - 1) {
  if (smallestNum > numbers[m + 1]) {
    smallestNum = numbers[m + 1]
  }
  m++
}
smallestNum

// FOR LOOP
let smallestNumber = numbers[0]
let biggestNumber = numbers[0]

for (let i = 0; i < numbers.length - 1; i++) {
  if (smallestNumber > numbers[i + 1]) {
    smallestNumber = numbers[i + 1]
  }
  if (biggestNumber < numbers[i + 1]) {
    biggestNumber = numbers[i + 1]
  }
}
smallestNumber
biggestNumber


// Write a program that, given an initial number, tries to find it in an array, and prints true or false depending on the result. Try to do it with 3 different kinds of loops.
let fruits = ['banana', 'strawberry', 'mango', 'kiwi']
let tropicalFruit = 'mango'

// WHILE LOOP
// let i = 0
// while (i < fruits.length) {
//   if (tropicalFruit === fruits[i]) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
//   i++
// }


// DO ... WHILE LOOP
// let i = 0
// do {
//   if (tropicalFruit === fruits[i]) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
//   i++
// } while (i < fruits.length)
  

// FOR LOOP
for (let i = 0; i < fruits.length; i++) {
  if (tropicalFruit === fruits[i]) {
    console.log(true)
  } else {
    console.log(false)
  }
}


// FOR ... OF LOOP 
for (let fruit of fruits) {
  if (tropicalFruit === fruit) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// FOR ... IN LOOP
// WE CAN'T
// for..in, which should not be confused with for..of, can be used to iterate over the ENUMERABLE properties of an object.


// Write a program that count the number of letters occurrences in a string. Return an array that contains all letters and their count, like this for the string cbb: [['c', 1],['b', 2]].
