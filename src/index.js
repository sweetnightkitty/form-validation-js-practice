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

form.addEventListener("submit", () => {
    //Validate form
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