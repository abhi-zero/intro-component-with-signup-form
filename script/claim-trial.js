let firstName = document.querySelector('firstname'); 
let lastName = document.querySelector('lastname'); 
let email = document.querySelector('email'); 
let password = document.querySelector('password'); 

    function validateForm() {
    
    }

    function validateFirstname(firstName) {

    }
    function validateEmail(emailValue){
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailValue == null){
            return false;
        }else if(emailRegex.test(emailValue)){
            return true;
        }
    }
