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
const checkArr = []

//checkbox I/O: else if statment removes if box is unchecked. 
function getUpCase() {
    let cBoxEl = document.querySelector("#upper-case");
    if (cBoxEl.checked == true) { 
         return checkArr.push(upperCase), console.log("upcase returned")
    } else if (cBoxEl.checked == false) {
        checkArr.splice(checkArr.indexOf(upperCase), 1)
        console.log("upcase removed")
        console.log(checkArr)
    }
}
function getLowCase() {
    let cBoxEl = document.querySelector("#lower-case");
    if (cBoxEl.checked == true) {
         return checkArr.push(lowerCase), console.log("lowcase returned")
    } else if (cBoxEl.checked == false) {
        checkArr.splice(checkArr.indexOf(lowCase), 1)
        console.log("lowcase removed")
        console.log(checkArr)
    }
}
function getSpecCase() {
    let cBoxEl = document.querySelector("#spec-chars");
    if (cBoxEl.checked == true) {
         return checkArr.push(specChars), console.log("specChars returned")
    } else if (cBoxEl.checked == false) {
        checkArr.splice(checkArr.indexOf(specChars), 1)
        console.log("specChars removed")
        console.log(checkArr)
    }
}
function getNumVal() {
    let cBoxEl = document.querySelector("#numbers");
    if (cBoxEl.checked == true) {
         return checkArr.push(numbers), console.log("numbers returned")
    } else if (cBoxEl.checked == false) {
        checkArr.splice(checkArr.indexOf(numbers), 1)
        console.log("numbers removed")
        console.log(checkArr)
    }
}



//shuffle function
let shuff = function (array) {

    //console.log(array)
    

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
// After that is completed, I need to determin how to extract an exact ammount of array objects as an output. 

// When i click something happens
function showEl() {
    let pwLength = document.querySelector("#pw-length").value;
    
    if (isNaN(pwLength) === false) {
        return pwLength, console.log(pwLength)
        
    } else if (isNaN(pwLength) === true) {
        return alert("Error: please input a numerical value")
    }

}

// This is where the product of preShuff should be inserted and looped through as an output. the result should be the number of chars user has selected.  
submitBtn.addEventListener("click", function() {
    event.preventDefault();

    let pwLength = document.querySelector("#pw-length").value;
  
    if (pwLength === null) {
        alert("sdfgsdfgsdfg")
    }  

    getLowCase()
    getUpCase()
    getSpecCase()
    getNumVal()

    let array = checkArr.flat()
    for( let i = 0; i < 1000; i++){
        array = shuff(array)
    }

    console.log(array)

    let password = ""

    for(let i = 0; i < pwLength; i++){
        // generate random index 
        // access that index and concat to password string 
        // print
        let index = Math.floor( Math.random() * array.length)
        password += array[index]
    }

    console.log(password)

});

