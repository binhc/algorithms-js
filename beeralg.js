//Write a program that prints out all lines of 99 Bottles of Beer all the way down to zero.
//Example: “99 Bottles of beer, take one down, pass it around, 98 bottles of beer on the wall”
//However, for numbers that are multiples of 7, replace beer with Miller
//And for numbers that are multiples of 5, replace beer with Lite beer
//Lastly, for numbers that are multiples of 7 and 5, replace beer with Miller Lite
//You are welcome to take creative liberty with the beer brands, or replace it with soft drinks.

for (let i = 99; i>0; i -- ){
    if (i % 5 === 0 && i % 7 === 0){
        console.log(i + " bottles of Miller Lite, take one down, pass it around")
    }else if(i %7 === 0){
        console.log(i + " bottles of Miller, take one down, pass it around")
    }else if(i% 5 === 0 ){
        console.log(i + " bottles of Lite, take one down, pass it around")
    }else{
        console.log(i + " bottles of beer, take one down, pass it around")
    }
}

