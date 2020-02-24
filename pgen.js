let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];

let specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?', '`', '~', "'", '"'];

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


//shuffle function
let shuff = function (array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; 

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue; 
    }
    return array; 
}

//joins all arrays suffled once. 
let preshuff = upperCase.concat(lowerCase, specChars, numbers);
shuff(preshuff)
console.log(preshuff)

// loops the preShuff
for (i = 0; i < 1000; i++) {
    shuff(preshuff)
}
