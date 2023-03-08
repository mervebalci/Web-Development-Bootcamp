// 1. Write a program that defines two variables, the base and height of a rectangle, and calculates its area and the perimeter.
const base = 4
const height = 8

const area = base * height
const perimeter = 2 * (base + height)
area
perimeter




// 2. Write a program that initializes an array with all values at 0.
//    Then loop over that array and change each value in the array with the value of the index.
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




// 3. Rewrite the loop for (let i=0; i<=10; i++) { console.log(i) } using a while loop.
// for (let i=0; i<=10; i++) { console.log(i) }
let i = 0

while (i <= 10) {
  console.log(i)
  i++
}




// 4. Write a program that finds the smallest and biggest number in an array, and prints them.
let numbers = [2, 5, 6, 1098, -3.14, 47]

// console.log(Math.min(...numbers))  --->  This is the cheesy way
// console.log(Math.max(...numbers))  --->  This is the cheesy way

// WHILE LOOP
let n = 0
let smallestNum = numbers[n]

while (n < numbers.length - 1) {
  if (smallestNum > numbers[n + 1]) {
    smallestNum = numbers[n + 1]
  }
  n++
}
smallestNum

// FOR LOOP
let smallestNumber = numbers[0]
let biggestNumber = numbers[0]

for (let n = 0; n < numbers.length - 1; n++) {
  if (smallestNumber > numbers[n + 1]) {
    smallestNumber = numbers[n + 1]
  }
  if (biggestNumber < numbers[n + 1]) {
    biggestNumber = numbers[n + 1]
  }
}
smallestNumber
biggestNumber




// 5. Write a program that, given an initial number, tries to find it in an array, 
//    and prints true or false depending on the result.
//    Try to do it with 3 different kinds of loops.
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
// for..in, which should not be confused with for..of, can be used to iterate over the ENUMERABLE string properties of an object.




// 6. Write a program that count the number of letters occurrences in a string.
//    Return an array that contains all letters and their count, for example => boo: [['b', 1],['o ', 2]].
let lettersArray = []

const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
const word = "chocolate"
word.length

for (const letter of word) {
  let found = false
  if (!alphabet.includes(letter)) continue
  for (const entry of lettersArray) {
    if (entry[0] === letter) {
      entry[1]++
      found = true
    }
  }
  if (!found) {
    lettersArray.push([letter, 1])
  }
}
lettersArray




// 7. What is the value of bill and coin at the end of this program?
let coin = 0
let bill = 0

for (coin = 1; bill < 10; bill++) {
  coin += 2

  if (coin > 7) break   // !!!!!
}

console.log(coin)   // 9
console.log(bill)   // 3




// 8. What if we change "break" to "continue"?
let coinn = 0
let billl = 0

for (coinn = 1; billl < 10; billl++) {
  coinn += 2

  if (coinn > 7) continue   // !!!!!
}

console.log(coinn)   // 21
console.log(billl)   // 10




// 9. Write a function that accepts an array of numbers as parameter, 
//    prints their values to the console, and returns the sum of those numbers.
function weeklySchedule(schedule) {
  // let schedule = [6.5, 7.5, 6.5, 7.5]

  let sumOfHours = 0
  for (let hour of schedule) {
    console.log(hour)   // 6.5  />  7.5  />  6.5  />  7.5
    sumOfHours = sumOfHours + hour
  }
  return sumOfHours
}

weeklySchedule([6.5, 7.5, 6.5, 7.5])    // 28




// 10. Write a function that accepts two arrays as parameters. 
//     Return a single array that contains the items, ordered. 
//     Handle the cases where one or both of the arrays are empty.
const myCatBabies = ["Boncuk", "Efes"]
const boncukBirthday = [4, 4]
const efesBirthday = [3, 15]

function mergeAndSort(boncukBirthday, efesBirthday) {
  let birthdays = boncukBirthday.concat(efesBirthday)    // [4, 4, 3, 15]

  /*
  let sortedBirthdays = birthdays.sort()  // [15, 3, 4, 4] this is not a good sorting
  By default, the sort() function sorts values as strings.
  This works well for strings ("Apple" comes before "Banana").
  However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
  Because of this, the sort() method will produce incorrect result when sorting numbers.
  */
  
  let sortedBirthdays = []
  
  while (birthdays.length !== 0 ) {
    let smallest = Infinity
    let smallestItemIndex = -1
    for (let b = 0; b < birthdays.length; b++) {
      if (smallest > birthdays[b]) {
        smallest = birthdays[b]
        smallestItemIndex = b
        // console.log(smallestItemIndex)  // which is b = 2
      }
    }
    sortedBirthdays.push(smallest)
    birthdays.splice(smallestItemIndex, 1)
    // console.log(birthdays)
  }
  return sortedBirthdays
}

mergeAndSort(boncukBirthday, efesBirthday)




// 11. Create a simple calculator simulator. Perform the basic operations as functions.
class Calculator {
  add(a, b) {
    if (isNaN(a) || isNaN(b)) {
      console.log('Please provide two numbers')
      return null
    }
    return a + b
  }
  sub(a, b) {
    if (isNaN(a) || isNaN(b)) {
      console.log('Please provide two numbers')
      return null
  }
    return a - b
  }
}
  
const calculator = new Calculator()
calculator.add(2, 2)
calculator.sub(5, 1)



// 12. Write an array contains a list of objects that represent names of people, with first and last name. 
//     Write a function to reorder the items by last name.
let invitedList = [
  {firstName: "Dana", lastName: "Blair"},
  {firstName: "Yvonne", lastName: "Impala"},
  {firstName: "Clara", lastName: "Nolan"},
  {firstName: "Gwen", lastName: "Stacy"},
  {firstName: "Alison", lastName: "Tucker"}
]

let reorderedList = invitedList.sort((a, b) => {
  return a.lastName > b.lastName ? 1:-1
})

reorderedList