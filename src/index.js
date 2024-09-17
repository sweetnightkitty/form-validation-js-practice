
import "./styles.css";


const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
})

firstName.addEventListener("change", () => {
    //validate firstName
})

lastName.addEventListener("change", () => {
    //valide last name
})

email.addEventListener("change", () => {
    //validate email
})

phone.addEventListener("change", () => {
    //validate phone
})

country.addEventListener("change", () => {
    //validate country
})

zip.addEventListener("change", () => {
    //validate zip code per country
})

password.addEventListener("change", () => {
    //validate password
})

confirmPassword.addEventListener("change", () => {
    //validate second password
})


function validateForm() {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
    validateCountry();
    validateZip();
    validatePassword();
    validateConfirmPassword();
}


function validateFirstName() {
    if(firstName.validity.valueMissing) {
        const message = "Please provide your first name";
        setErrorMessage(firstName, message);
    }
}

function validateLastName() {
    if(lastName.validity.valueMissing) {
        const message = "Please provide your last name";
        setErrorMessage(lastName, message);
    }
}

function validateEmail() {
    if(email.validity.valueMissing) {
        const message = "Please provide your email address";
        setErrorMessage(email, message);
    } else if(email.validity.typeMismatch) {
        const message = "Please provide a valid email address";
        setErrorMessage(email, message);
    }
}

function validatePhone() {
    if(phone.validity.valueMissing) {
        const message = "Please provide your phone number";
        setErrorMessage(phone, message);
    } else if(phone.validity.patternMismatch) {
        const message = "Please provide a valid 10 digit phone number without any spaces or dashes";
        setErrorMessage(phone, message);
    }
}

function validateCountry() {
    if(country.validity.valueMissing) {
        const message = "Please choose your country of residence";
        setErrorMessage(country, message);
    }
}

function validateZip() {
    const zipCodeFormats = {
        ch: [
          "^(CH-)?\\d{4}$",
          "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
        ],
        fr: [
          "^(F-)?\\d{5}$",
          "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
        ],
        de: [
          "^(D-)?\\d{5}$",
          "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
        ],
        nl: [
          "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
          "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
        ],
        us: [
            "^\\d{5}",
            "US ZIPs must have exactly 5 digits: e.g. 44212",
        ],
    };

    if(country.validity.valueMissing) {
        const message = "Please select a country first";
        setErrorMessage(zip, message);
    } else if(zip.validity.valueMissing) {
        const message = "Please provide your zip code";
        setErrorMessage(zip, message);
    } else {
        const selectedCountry = getCountry();
        const pattern =  zipCodeFormats[selectedCountry][0];
        const message = zipCodeFormats[selectedCountry][1];

        zip.setAttribute("pattern", pattern);
        if(zip.validity.patternMismatch) {
            setErrorMessage(zip, message);
        }
    }
}

function validatePassword() {
    if(password.validity.valueMissing) {
        const message = "Please choose a password";
        setErrorMessage(password, message);
    } else if(password.validity.tooShort) {
        const message = "Password must be at least 8 characters long";
        setErrorMessage(password, message);
    }
}

function validateConfirmPassword() {
    if(confirmPassword.validity.valueMissing) {
        const message = "Please type your password again";
        setErrorMessage(confirmPassword, message);
    } else if(password.value != confirmPassword.value) {
        const message = "Passwords do not match";
        setErrorMessage(confirmPassword, message);
    }
}

function getCountry() {
    return country.value;
}





//Intakes the selected input, and returns the error div for it
function getErrorDiv(input) {
    const inputController = input.parentElement;
    const errorDiv = inputController.querySelector(".error");

    return errorDiv;
}

function setErrorMessage(input, message) {
    getErrorDiv(input).textContent = message;
}
