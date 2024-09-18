import "./styles.css";
import { validateFirstName } from "./form-validation";
import { validateLastName } from "./form-validation";
import { validateEmail } from "./form-validation";
import { validatePhone } from "./form-validation";
import { validateCountry } from "./form-validation";
import { validateZip } from "./form-validation";
import { validatePassword } from "./form-validation";
import { validateConfirmPassword } from "./form-validation";


const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorDivs = document.querySelectorAll(".error");


form.addEventListener("submit", (e) => {
    //If no errors, form submits

    if(checkForErrors() == true) {
        e.preventDefault();
        validateForm();
        
        //Add event listeners to each form element, so as user corrects their inputs, they get live in-line feedback
        //When they correct the input, error disappears immediately without tabbing/clicking away
        firstName.addEventListener("keydown", ()=> {
            firstName.addEventListener("keyup", () => {
                validateFirstName(firstName);
            })
        })

        lastName.addEventListener("keydown", ()=> {
            lastName.addEventListener("keyup", () => {
                validateLastName(lastName);
            })
        })

        email.addEventListener("keydown", () => {
            email.addEventListener("keyup", ()=> {
                validateEmail(email);
            })
        })

        phone.addEventListener("keydown", ()=> {
            phone.addEventListener("keyup", ()=> {
                validatePhone(phone);
            })
        })

        country.addEventListener("click", ()=>{
            country.addEventListener("change", ()=> {
                validateCountry(country);
            })
        })

        zip.addEventListener("keydown", () => {
            zip.addEventListener("keyup", ()=> {
                validateZip(country, zip);
            })
        })

        password.addEventListener("keydown", ()=> {
            password.addEventListener("keyup", ()=> {
                validatePassword(password);
            })
        })

        confirmPassword.addEventListener("keydown", ()=> {
            confirmPassword.addEventListener("keyup", ()=> {
                validateConfirmPassword(password, confirmPassword);
            })
        })


    }
})

//The following event listeners alert the user of an error after they tab/click away
//Gives the user a chance to correct input before submitting
firstName.addEventListener("blur", () => {
    validateFirstName(firstName);
});

lastName.addEventListener("blur", () => {
    validateLastName(lastName);
})

email.addEventListener("blur", () => {
    validateEmail(email);
})

phone.addEventListener("blur", () => {
    validatePhone(phone);
})


country.addEventListener("blur", () => {
    validateCountry(country);
})


zip.addEventListener("blur", () => {
    validateZip(country, zip);
})

password.addEventListener("blur", () => {
    validatePassword(password);
})

confirmPassword.addEventListener("blur", () => {
    validateConfirmPassword(password, confirmPassword);
})


function validateForm() {
    validateFirstName(firstName);
    validateLastName(lastName);
    validateEmail(email); 
    validatePhone(phone);
    validateCountry(country);
    validateZip(country, zip);
    validatePassword(password);
    validateConfirmPassword(password, confirmPassword); 
}


function checkForErrors() {
    if(
        validateFirstName(firstName)
        || validateLastName(lastName)
        || validateEmail(email) 
        || validatePhone(phone)
        || validateCountry(country)
        || validateZip(country, zip)
        || validatePassword(password)
        || validateConfirmPassword(password, confirmPassword) 
    ) {
        return true;
    }
}

