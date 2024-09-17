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


form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
})

//How to fire when tab away empty? - same logic for others
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
    validateZip(country, zip);
})

password.addEventListener("change", () => {
    //validate password
})

confirmPassword.addEventListener("change", () => {
    //validate second password
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
