const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];

const specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?', '`', '~', "'", '"'];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];



//HTML query selectors
const pwLength = document.querySelector("#pw-length");
const upCase = document.querySelector("#upper-case");
const lowCase = document.querySelector("#lower-case");
const specialCh = document.querySelector("#spec-chars");
const numInput = document.querySelector("#numbers");
const submitBtn = document.querySelector("#submit");
const ctcBtn = document.querySelector("#ctc");
let checkArr = []
console.log(checkArr)
function getUpCase() {
    let cBoxEl = document.querySelector("#upper-case");
    if (cBoxEl.checked == true) { 
         return checkArr.push(upperCase)
    } else if (cBoxEl.checked == false) {
        checkArr.splice(checkArr.indexOf(upperCase))
    }
}
function getLowCase() {
    let cBoxEl = document.querySelector("#lower-case");
    if (cBoxEl.checked == true) {
         return checkArr.push(lowerCase) 
    } else if (cBoxEl.checked == false) {
        checkArr.splice(checkArr.indexOf(lowCase))
    }
}
function getSpecCase() {
    let cBoxEl = document.querySelector("#spec-chars");
    if (cBoxEl.checked == true) {
         return checkArr.push(specChars)
    } else if (cBoxEl.checked == false) {
        checkArr.splice(checkArr.indexOf(specChars))
    }
}
function getNumVal() {
    let cBoxEl = document.querySelector("#numbers");
    if (cBoxEl.checked == true) {
         return checkArr.push(numbers)
    } else if (cBoxEl.checked == false) {
        checkArr.splice(checkArr.indexOf(numbers))
    }
}

console.log(checkArr)

//shuffle function
let shuff = function (array) {

    // console.log(array)
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

console.log(checkArr)

function showEl() {
    let pwLength = document.querySelector("#pw-length").value;
    
    if (isNaN(pwLength) === false) {
        return pwLength
        
    } else if (isNaN(pwLength) === true) {
        return alert("Error: please input a numerical value")
    }
}
console.log(checkArr)

function copyText() {
    let copyTextEl = document.querySelector("#result")

    copyTextEl.select();
    document.execCommand("copy");

    alert("Saved to clipboard.")
}

submitBtn.addEventListener("click", function() {
    event.preventDefault();

    getLowCase()
    getUpCase()
    getSpecCase()
    getNumVal()

    let pwLength = document.querySelector("#pw-length").value;

    let array = checkArr.flat()
    for( let i = 0; i < 1000; i++){
        array = shuff(array)
    }
    

    let password = ""
 
    for(let i = 0; i < pwLength; i++){
        // generate random index 
        // access that index and concat to password string 
        // print
        let index = Math.floor( Math.random() * array.length)
        password += array[index]
    }
    

    document.getElementById("result").innerHTML = password;
    while (checkArr.length > 0) {
        checkArr.pop()
        // this while loop removes the additinoal items in checkArr. 
    }
    

});

