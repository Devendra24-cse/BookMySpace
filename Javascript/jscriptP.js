let flightdetailBtns = document.querySelectorAll(".button-flightdetails");

flightdetailBtns.forEach(button => {
    
    button.addEventListener('click', () => {
        
        button.classList.toggle("is-open");

        let planetContainer = button.closest(".container");
        
        let flightDetailBox = planetContainer.querySelector(".box");


        if (button.classList.contains("is-open")) {
            flightDetailBox.style.display = "block";
        } else {
            flightDetailBox.style.display = "none";
        }
    });
});


let BookingBtns  = document.querySelectorAll(".button-booking");

BookingBtns.forEach(button => {
    button.addEventListener('click',()=> {
        let destination = button.value;

        window.location.href = "bookingpage.html?location=" + destination;
        console.log(button.value);
    })
})

let signupBtn = document.getElementById("button-signup");
let loginBtn = document.getElementById("button-login");


signupBtn.addEventListener('click',()=>{
    
    window.location.href = "signuppage.html?action=signup"
    
})


loginBtn.addEventListener('click',()=>{
    window.location.href = "signuppage.html?action=login"
})