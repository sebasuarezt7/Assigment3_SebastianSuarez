"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = evt => {
    evt.preventDefault(); 

    const subtotal = parseFloat($("#input1").value); 
    const taxRate = parseFloat($("#input2").value); 
    let hasError = false;

    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        $("#error1").textContent = "Subtotal must be > 0 and < 10000";
        hasError = true;
    } else {
        $("#error1").textContent = "";
    }


    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        $("#error2").textContent = "Tax Rate must be > 0 and < 12";
        hasError = true;
    } else {
        $("#error2").textContent = "";
    }


    if (hasError) return;


    const salesTax = (subtotal * taxRate) / 100;
    const total = subtotal + salesTax;

    $("#salesTax").value = salesTax.toFixed(2); 
    $("#total").value = total.toFixed(2); 
};

const clearForm = () => {

    $("#input1").value = "";
    $("#input2").value = "";
    $("#salesTax").value = "";
    $("#total").value = "";


    $("#error1").textContent = "*";
    $("#error2").textContent = "*";


    $("#input1").focus();
};


document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearForm);


    $("#input1").focus();
});