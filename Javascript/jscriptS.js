let signupWindow = document.getElementById("signup");
let loginWindow = document.getElementById("login");

const signBtn = document.getElementById("signupB");
const loginBtn = document.getElementById("loginB");


const urlParams = new URLSearchParams(window.location.search);
const actionType = urlParams.get('action');

document.addEventListener("DOMContentLoaded", () => {
    if (actionType === 'login') {
        document.title = "Log-in";
        loginBtn.click();
    } else {
        signBtn.click(); 
        document.title = "Sign-up";
    }
});

signBtn.addEventListener('click', ()=> {
    signupWindow.style.display = "flex";
    document.title = "Sign-up";   
    signBtn.style.backgroundColor = "#ff0000";
    signBtn.style.color = "#fff";
    loginBtn.style.backgroundColor = "#ffffff";
    loginBtn.style.color = "#000000";
    console.log("sign up window showing")
    loginWindow.style.display = "none";
})
loginBtn.addEventListener('click', ()=> {
    loginWindow.style.display = "flex";
    document.title = "Log-in";
    loginBtn.style.backgroundColor = "#ff0000";
    loginBtn.style.color = "#fff";
    signBtn.style.backgroundColor = "#ffffff";
    signBtn.style.color = "#000000";
    console.log("log in window showing")
    signupWindow.style.display = "none";
})


const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmpassword").value.trim();
    let errorText = document.getElementById("sigerror");


    if(name === ""|| email ==="" || password ==="" || confirmPassword ===""){
        return errorText.textContent = "Fill all Enteries";
    }

    if(!email.includes("@") || !email.includes(".") || email.indexOf("@")> email.indexOf(".")){
        return errorText.textContent = "Enter Valid Email address";
    }
    if(password.length < 6){
        return errorText.textContent = "Password must Contain atleast 6 digit ";
    }
    if(password !== confirmPassword){
        return errorText.textContent = "Recheck Confirm password";
    }
    alert("wellcome " +" "+ name);
    console.log("user Sign-uped : ", {name  , email, password});
    window.location.href = "planets.html";

})

const loginButton = document.getElementById("btn-login");
loginButton.addEventListener('click', function(event){
    let email = document.getElementById("logemail").value.trim();
    let password = document.getElementById("logpassword").value.trim();
    let errorText = document.getElementById("logerror");


    if( email ==="" || password ===""){
        return errorText.textContent = "Fill All of Them ";
    }
    if(!email.includes("@") || !email.includes(".") || email.indexOf("@")> email.indexOf(".")){
        return errorText.textContent = "Enter Valid Email address";
    }
    if(password.length < 6){
        return errorText.textContent = "Passowrd must Contain atleast 6 digit ";
    }
    alert("wellcome ");
    console.log("user logined : ", { email, password});
    window.location.href = "planets.html";

})
