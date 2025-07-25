// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirm_Input = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}



// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};
confirm_Input.onkeyup = () => {
  confirm_Input.classList.remove("is-valid");
  confirm_Input.classList.remove("is-invalid");
};
// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  ispasswordOk = false;
  isconfirmOk = false;

  // validate first name
  if (firstNameInput.value.length < 1) {
    firstNameInput.classList.add("is-invalid");
  }
  else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }
  if (lastNameInput.value.length < 1) {
    lastNameInput.classList.add("is-invalid");
  }
  else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  if(validateEmail(emailInput.value) === true){
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }
  else{
    emailInput.classList.add("is-invalid");
  }
  if(passwordInput.value.length > 6 ){
    passwordInput.classList.add("is-valid");
    ispasswordOk = true;
  }
  else{
    passwordInput.classList.add("is-invalid");
  }
  if(confirm_Input.value == passwordInput.value && confirm_Input.value != ""){
    confirm_Input.classList.add("is-valid");
    isconfirmOk = true;
  }
  else{
  confirm_Input.classList.add("is-invalid");
  }

  // validate last name

  // validate email

  // validate password

  // validate confirm password

  if (isFirstNameOk && isEmailOk && isLastNameOk && ispasswordOk && isconfirmOk) alert("Registered successfully");
};

const resetBtn = document.querySelector("#reset-btn");
resetBtn.onclick = () => {
  // Clear input values
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirm_Input.value = "";

  // Remove validation classes
  firstNameInput.classList.remove("is-valid", "is-invalid");
  lastNameInput.classList.remove("is-valid", "is-invalid");
  emailInput.classList.remove("is-valid", "is-invalid");
  passwordInput.classList.remove("is-valid", "is-invalid");
  confirm_Input.classList.remove("is-valid", "is-invalid");
};
// add callback function for Reset button.