// Hackerrank 30 Days of Code - Day 2: Operators 
// Challenge: Given the meal price (base cost of a meal), 
// tip percent (the percentage of the meal price being added as tip), 
// and tax percent (the percentage of the meal price being added as tax) 
// for a meal, find and print the meal's total cost

// ==== Test Case from HackerRank ======
'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[\n ]+'));
    main(+(_input[0]), +(_input[1]), +(_input[2]));
});


// =============== My Solution ===============
function main(mealCost,tipPercent, taxPercent){
    tipPercent = mealCost * (tipPercent / 100); 
    taxPercent = mealCost * (taxPercent / 100);
    let totalCost = Math.round(mealCost +tipPercent + taxPercent)

    console.log('The total meal cost is' + totalCost + 'dollars.')
}