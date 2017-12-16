// Given a number of cents as an argument,
// write a function "fewest_coins" that will return an object / dictionary 
// that contains the least number of coins that it would take to make that 
// amount.For example, running fewest_coins(29) should return

// {
//     quarters: 1,
//     dimes: 0,
//     nickels: 0,
//     pennies: 4
// }

function fewestCoin(num){
    var quarters = Math.floor(num / 25)   //stores # of quarters
    var whats_left = num % 25 
    var dimes = Math.floor(whats_left / 10)   // # of dimes 
    whats_left = whats_left % 10
    var nickels = Math.floor(whats_left / 5)   // # of nickels
    whats_left = whats_left % 5 
    var pennies = whats_left                   // # of pennies 
    var coins = {
        "quarters": quarters,
        "dimes": dimes,
        "nickels": nickels,
        "pennies": pennies
    };
    return coins;

}

console.log (fewestCoin(29))