// Hackerrank 30 Days of Code - Day 7: Arrays
// Challenge: Given an array, A , of N integers, print A's elements in 
// reverse order as a single line of space-separated numbers.

// ======= HackerRank Test Case ==========
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


// ========= My Solution ============
function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number).reverse().join(' ')
    console.log(arr)
}