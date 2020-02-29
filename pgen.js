let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];

let specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?', '`', '~', "'", '"'];

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];



//HTML query selectors
let pwLength = document.querySelector("#pw-length");
let upCase = document.querySelector("#upper-case");
let lowCase = document.querySelector("#lower-case");
let specialCh = document.querySelector("#spec-chars");
let numInput = document.querySelector("#numbers");
let submitBtn = document.querySelector("#submit");
let checkArr = []

//checkbox I/O: else if statment removes if box is unchecked. 
function getUpCase() {
    let cBoxEl = document.querySelector("#upper-case");
    if (cBoxEl.checked == true) { 
         return checkArr.push(upperCase)
    } else if (cBoxEl.checked == false) {
        return checkArr.pop()
    }
}
function getLowCase() {
    let cBoxEl = document.querySelector("#lower-case");
    if (cBoxEl.checked == true) {
         return checkArr.push(lowerCase)
    } else if (cBoxEl.checked == false) {
        return checkArr.pop()
    }
}
function getSpecCase() {
    let cBoxEl = document.querySelector("#spec-chars");
    if (cBoxEl.checked == true) {
         return checkArr.push(specChars)
    } else if (cBoxEl.checked == false) {
        return checkArr.pop()
    }
}
function getNumVal() {
    let cBoxEl = document.querySelector("#numbers");
    if (cBoxEl.checked == true) {
         return checkArr.push(numbers)
    } else if (cBoxEl.checked == false) {
        return checkArr.pop()
    }
}



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

for (i = 0; i < 1000; i++) {
    shuff(checkArr)
};

console.log(checkArr)

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
});


