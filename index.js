
const input = document.getElementById("input")
function reverseString(str){
    
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("").reverse().join("")
}

function checkString(){
    var value = input.value;
    value = value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    if(value == ""){
        alert("Please give me what to check.")
        return
    }
    
    const reverse = reverseString(value)
    if(value === reverse){
        alert("NICE,IT'S A PALINDROME.")
    }
    else{
        alert("Sorry, it's not a palinedrome.")
    }
    input.value = ""
}