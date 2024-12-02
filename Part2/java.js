"use strict";

const $ = selector => document.querySelector(selector);

const processEntry = evt =>{
    evt.preventDefault()
    const userInput = parseFloat($("#input").value);
    if(isNaN(userInput) || userInput < 0 || userInput > 99){
        alert("Please try again, the number must be between 0-99");
    }else{
        makeChange(userInput);
    };
}
const makeChange = (userInput) =>{
    const quarters = Math.floor(userInput / 25);
    const dimes = Math.floor(userInput / 10);
    const nickels = Math.floor(userInput / 5);
    const pennies = Math.floor(userInput / 1);

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
}

document.addEventListener("DOMContentLoaded", () =>{
    $("#calculate").addEventListener("click",processEntry)
})