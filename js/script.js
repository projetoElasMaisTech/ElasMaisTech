 const userName = document.getElementById('inputName');
const email = document.querySelector('#inputEmail');
const password = document.querySelector('#inputPassword');
 const nameError = document.getElementById("nameError");
 const emailError = document.getElementById("emailError");


userName.addEventListener('focusout', validateName);
email.addEventListener('focusout', validateEmail);
password.addEventListener('focusout', validatePassword);


function validateName(e) {
  e.preventDefault();
  let valid = true;

  if (!userName.value) {
    nameError.classList.add("visible");
   userName.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  } else {
    nameError.classList.remove("visible");
    userName.classList.remove("invalid");
    nameError.setAttribute("aria-hidden", true);
    nameError.setAttribute("aria-invalid", false);
  }
  return valid;
}

function validateEmail(e) {
  e.preventDefault();
  let valid = true;

  if (!email.value) {
   emailError.classList.add("visible");
   email.classList.add("invalid");
   emailError.setAttribute("aria-hidden", false);
   emailError.setAttribute("aria-invalid", true);
  } else {
   emailError.classList.remove("visible");
    email.classList.remove("invalid");
   emailError.setAttribute("aria-hidden", true);
   emailError.setAttribute("aria-invalid", false);
  }
  return valid;
}

function validatePassword(e) {
  e.preventDefault();
  let valid = true;

  if (!password.value) {
   passwordError.classList.add("visible");
   password.classList.add("invalid");
   passwordError.setAttribute("aria-hidden", false);
   passwordError.setAttribute("aria-invalid", true);
  } else {
   passwordError.classList.remove("visible");
    password.classList.remove("invalid");
   passwordError.setAttribute("aria-hidden", true);
   passwordError.setAttribute("aria-invalid", false);

  }
  return valid;
}
