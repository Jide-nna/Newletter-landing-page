const submitBtn = document.getElementById("submitBtn");
const email = document.getElementById("email");
const success = document.getElementById("success");
const showCase = document.getElementById("showcase");
const error = document.getElementById("error")
const emailArea = document.getElementById('email-area')
let message;
const successBtn = document.getElementById("successBtn");
function formValidation() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value == "") {
    errorToggle()
    error.textContent = "Email address cannot be empty"

  } else if (email.value.match(validRegex)) {
    toggle();
     emailArea.textContent = email.value
    console.log(emailArea)
  } else {
    errorToggle()
    error.textContent = "Enter correct emaill address"
  }
}
function toggle() {
  success.classList.remove("hidden");
  showCase.classList.add("hidden");
}
function errorToggle() {
    error.classList.remove("hidden")
    console.log(error)
    error.textContent = ""
}
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation();
});
successBtn.addEventListener("click", (e) => {
  email.value = ""
  showCase.classList.remove("hidden");
  success.classList.add("hidden")
  emailArea.textContent = ""
});
