// component
const mainComponent = document.querySelector(".wrapper");

const thanksComponent = document.querySelector(".thank-you-component");

// inputs
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// Form
const form = document.querySelector("form");

//Error message
//Firstname
const paraFirstname = document.querySelector('p[data-erroron="firstname"]');
const errorFirstnameText = paraFirstname.querySelector("em");
//Lastname
const paraLastname = document.querySelector('p[data-erroron="lastname"]');
const errorLastnameText = paraLastname.querySelector("em");
//Email
const paraEmail = document.querySelector('p[data-erroron="email"]');
const errorEmailText = paraEmail.querySelector("em");
// Password
const paraPassword = document.querySelector('p[data-erroron="password"]');
const errorPasswordText = paraPassword.querySelector("em");

// Input validation
firstName.addEventListener("input", () => validateFirstname(firstName.value));
lastName.addEventListener("input", () => validateLastname(lastName.value));
email.addEventListener("input", () => validateEmail(email.value));
password.addEventListener("input", () => validatePassword(password.value));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
    let isValid = true;

    if (!validateFirstname(firstName.value)) {
      isValid = false;
    }

    if (!validateLastname(lastName.value)) {
      isValid = false;
    }

    if (!validateEmail(email.value)) {
      isValid = false;
    }

    if (isValid) {
      mainComponent.style.display = "none";
      thanksComponent.style.display = "grid";
    }
});

function validateFirstname(firstnameValue) {
  if(firstnameValue.length < 2){
    errorFirstnameText.textContent = paraFirstname.getAttribute("data-default");
    paraFirstname.style.opacity = "1";
    return false;
  }
  if (firstnameValue.includes(" ")) {
    errorFirstnameText.textContent = "Firstname cannot contain spaces";
    paraFirstname.style.opacity = "1";
    return false;
  } 
  paraFirstname.style.opacity = "0";
  return true;
}
function validateLastname(lastnameValue) {
  if (lastnameValue.length < 2) {
    errorLastnameText.textContent = paraLastname.getAttribute("data-default");
    paraLastname.style.opacity = "1";
    return false;
  }
  if (lastnameValue.includes(" ")) {
    errorLastnameText.textContent = "Lastname cannot contain spaces";
    paraLastname.style.opacity = "1";
    return false;
  } 
  paraLastname.style.opacity = "0";
  return true;
}
function validateEmail(emailValue) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailValue)) {
    errorEmailText.innerHTML = `Please enter a valid email address, such as <strong>example@example.com</strong>.`;
    paraEmail.style.opacity = "1";
    return false;
  } 
  paraEmail.style.opacity = "0";
  return true;
}

function validatePassword(passwordValue) {
  if (passwordValue.length < 6) {
    errorPasswordText.textContent = paraPassword.getAttribute("data-default");
    paraPassword.style.opacity = "1";
    return false;
  }
  if(passwordValue.includes(" ")){
    errorPasswordText.textContent = "Password cannot contain spaces";
    paraPassword.style.opacity = "1";
    return false;
  }
  paraPassword.style.opacity = "0";
  return true;
}
