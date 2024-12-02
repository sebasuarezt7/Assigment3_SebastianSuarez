"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#arrivalDate").focus();


    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const processEntries = evt => {
        evt.preventDefault(); 


        const arrivalDate = $("#arrivalDate").value.trim();
        const nights = $("#nights").value.trim();
        const email = $("#email").value.trim();
        const phone = $("#phone").value.trim();


        let hasError = false;


        if (nights === "" || isNaN(nights) || Number(nights) <= 0) {
            $("#nightsError").textContent = "Must be numeric.";
            hasError = true;
        } else {
            $("#nightsError").textContent = ""; 
        }


        if (email === "" || !emailPattern.test(email)) {
            $("#emailError").textContent = "Must be a valid email address.";
            hasError = true;
        } else {
            $("#emailError").textContent = ""; 
        }


        if (phone === "" || isNaN(phone)) {
            $("#phoneError").textContent = "This field is required.";
            hasError = true;
        } else {
            $("#phoneError").textContent = ""; 
        }


        if (hasError) {
            return;
        }


        alert("Form submitted successfully!");
        $("#reservationForm").reset();
        $("#arrivalDate").focus();
    };


    $("#reservationForm").addEventListener("submit", processEntries);
});