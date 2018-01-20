//count amount of times a letter appears in a string 
function countCharacters(string, letter) {
    return string.split(letter).length - 1;
}

// count amount of times a given character occurs in a given string 
function count(params, string){
    var count = 0; 
    for (var i =0; i<string.length; i++){
        if (string[i] === params){
            count ++
        }
    }
    return count;
}
console.log(count('o', 'igloo'))
console.log(countCharacters('apple', 'z')); 