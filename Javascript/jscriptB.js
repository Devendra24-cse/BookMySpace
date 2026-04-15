const urlParams = new URLSearchParams(window.location.search);
const selectedLocation = urlParams.get('location');

let destinationLocation = document.getElementById("destination");
let originLocation = document.getElementById("origin");
    
destinationLocation.value = selectedLocation;
    

let bookingBtn = document.getElementById("button-booking");


bookingBtn.addEventListener('click',() => {

    let isagreed = document.getElementById("TandC");
    let error = document.getElementById("error");

    if(isagreed.checked){
        console.log("user Agree");
        error.textContent = "";
        alert("Trip Booked " + "from" + originLocation.value + " to " + destinationLocation.value);
    }
    else {
        console.log("user Disagree");
        error.style.display = "block";
        error.textContent = "You must agree to the T&Cs.";
    }


})

let showingTermsBtn = document.getElementById("button-show");
let closingTermsBtn = document.getElementById("button-close");

let termsWindow = document.getElementById("terms");

showingTermsBtn.addEventListener('click',()=> {
    termsWindow.style.display = "flex"
})
closingTermsBtn.addEventListener('click',()=> {
    termsWindow.style.display = "none"
})