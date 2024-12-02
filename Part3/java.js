"use strict";

const $ = selector => document.querySelector(selector);

const processEntry = evt => {
    evt.preventDefault(); 

    const input = parseFloat($("#input").value); 
    let hasError = false;


    if (isNaN(input) || input < 0) {
        hasError = true;
    }


    if (hasError) {
        alert("Please try again, the number must be positive");
        $("#input").focus(); 
        return;
    }

    const tax = calculateTax(input);

    $("#taxOwed").value = tax.toFixed(2);

    $("#input").focus();
};

const calculateTax = (input) => {
    let tax = 0;

    if (input <= 9875) {
        tax = input * 0.10;
    } else if (input <= 40125) {
        tax = 987.50 + (input - 9875) * 0.12;
    } else if (input <= 85525) {
        tax = 4617.50 + (input - 40125) * 0.22;
    } else if (input <= 163300) {
        tax = 14605.50 + (input - 85525) * 0.24;
    } else if (input <= 207350) {
        tax = 33271.50 + (input - 163300) * 0.32;
    } else if (input <= 518400) {
        tax = 47367.50 + (input - 207350) * 0.35;
    } else {
        tax = 156235 + (input - 518400) * 0.37;
    }
    return tax;
};

document.addEventListener("DOMContentLoaded", () => {

    $("#calculate").addEventListener("click", processEntry);

    $("#input").focus();
});