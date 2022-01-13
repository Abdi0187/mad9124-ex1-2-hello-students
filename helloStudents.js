'use strict'

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1


let students = require('./students.json')


for (let myLoop of students) 
{
  console.log('Hello ' + myLoop.firstName + ' ' + myLoop.lastName)
  
 
  
}

let count = 0

for (let myLoop of students){

    if (myLoop.lastName.includes("D", 0)) {
        count++;
    }


}


console.log(count)