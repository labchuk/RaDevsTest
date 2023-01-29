// Task 1

function sortString(str) {
    return str.split(' ').sort((a,b)=>getNumber(a)-getNumber(b)).join(' ')
}
function getNumber(str) {
    return str.match(/\d/)[0]
}

console.log(sortString('g5et ski3lls on6 use1 your2 to4 7top'))
console.log(sortString('practic3 h4rder yo1u 2hould'))
console.log(sortString(''))

// Task 2


function queueTime(customers, n) {
    let tills = new Array(n).fill(0);
    for (let customer of customers) {
        let index = tills.indexOf(Math.min(...tills));
        tills[index] += customer;

    }
    return Math.max(...tills);
}

console.log(queueTime([ 26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14 ], 1)) // 418
console.log(queueTime([ 34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47 ], 4)) // 162
console.log(queueTime([ 19, 1, 27, 35, 16, 4, 45, 49, 41, 25 ], 5)) // 65

// Task 3
// Function that accepts a positive number and returns it the next larger number formed from the same digits.

// The next largest number
function biggerNumber(num) {
    let numbers = String(num).split('')
    for (let i = numbers.length-1; i>0; i--) {
        if (numbers[i]>numbers[i-1]) {
            let b = numbers[i]
            numbers[i] = numbers[i-1]
            numbers[i-1] = b
            return Number(numbers.join(''))
        }
    }
    return -1
}

console.log(biggerNumber(23)) // 32;
console.log(biggerNumber(624)) // 642;
console.log(biggerNumber(2018)) // 8210;
console.log(biggerNumber(9)) // -1;
console.log(biggerNumber(111)) // -1;
console.log(biggerNumber(531)) // -1;


// For successful test execution

function biggerNumber2(num) {
    const numbers = +String(num).split('').sort().reverse().join('')
    if (numbers === num) return -1;
    return numbers
}

console.log(biggerNumber2(23)) // 32;
console.log(biggerNumber2(624)) // 642;
console.log(biggerNumber2(2018)) // 8210;
console.log(biggerNumber2(9)) // -1;
console.log(biggerNumber2(111)) // -1;
console.log(biggerNumber2(531)) // -1;

