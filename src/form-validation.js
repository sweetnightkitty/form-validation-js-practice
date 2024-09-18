export function validateFirstName(firstName) {
    if(firstName.validity.valueMissing) {
        const message = "Please provide your first name";
        setErrorMessage(firstName, message);
        return true;
    } else {
        setErrorMessage(firstName, "");
    }
}

export function validateLastName(lastName) {
    if(lastName.validity.valueMissing) {
        const message = "Please provide your last name";
        setErrorMessage(lastName, message);
        return true;
    } else {
        setErrorMessage(lastName, "");
    }
}

export function validateEmail(email) {
    if(email.validity.valueMissing) {
        const message = "Please provide your email address";
        setErrorMessage(email, message);
        return true;
    } else if(email.validity.typeMismatch) {
        const message = "Please provide a valid email address";
        setErrorMessage(email, message);
        return true;
    } else {
        setErrorMessage(email, "");
    }
}

export function validatePhone(phone) {
    if(phone.validity.valueMissing) {
        const message = "Please provide your phone number";
        setErrorMessage(phone, message);
        return true;
    } else if(phone.validity.patternMismatch) {
        const message = "Please provide a valid 10 digit phone number without any spaces or dashes";
        setErrorMessage(phone, message);
        return true;
    } else {
        setErrorMessage(phone, "");
    }
}

export function validateCountry(country) {
    if(country.validity.valueMissing) {
        const message = "Please choose your country of residence";
        setErrorMessage(country, message);
        return true;
    } else {
        setErrorMessage(country, "");
    }
}

export function validateZip(country, zip) {
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
        return true;
    } else if(zip.validity.valueMissing) {
        const message = "Please provide your zip code";
        setErrorMessage(zip, message);
        return true;
    } else {
        const selectedCountry = country.value;
        const pattern =  zipCodeFormats[selectedCountry][0];
        const message = zipCodeFormats[selectedCountry][1];

        zip.setAttribute("pattern", pattern);
        if(zip.validity.patternMismatch) {
            setErrorMessage(zip, message);
            return true;
        } else {
            setErrorMessage(zip, "");
        }
    }
}

export function validatePassword(password) {
    if(password.validity.valueMissing) {
        const message = "Please choose a password";
        setErrorMessage(password, message);
        return true;
    } else if(password.validity.tooShort) {
        const message = "Password must be at least 8 characters long";
        setErrorMessage(password, message);
        return true;
    } else {
        setErrorMessage(password, "");
    }
}

export function validateConfirmPassword(password, confirmPassword) {
    if(confirmPassword.validity.valueMissing) {
        const message = "Please type your password again";
        setErrorMessage(confirmPassword, message);
        return true;
    } else if(password.value != confirmPassword.value) {
        const message = "Passwords do not match";
        setErrorMessage(confirmPassword, message);
        return true;
    } else {
        setErrorMessage(confirmPassword, "");
    }
}


//Intakes the selected input, and returns the error div for it
function getErrorDiv(input) {
    const inputController = input.parentElement;
    const errorDiv = inputController.querySelector(".error");

    return errorDiv;
}

function setErrorMessage(input, message) {
    getErrorDiv(input).textContent = message;
    if(message == ""){
        input.classList.remove("errorOutline")
        input.classList.add("correctOutline");
    } else {
        input.classList.add("errorOutline");
        input.classList.remove("correctOutline");
    }
}
