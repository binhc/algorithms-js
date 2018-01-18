// Hackerrank 30 Days of Code - Day 5: Loops
// Challenge: Given an integer, n, print its first 10 multiples. 
//Each multiple n x i (where 1<= i <=10 ) should be printed on a new line in the form: n x i = result.

// ========= My Solution ============
function main() {
    var n = parseInt(readLine());
    for (let i = 1; i <= 10; i++) {
        var multiple = n * i
        console.log(n + ' x ' + i + ' = ' + multiple)
    }
}