 const userName = document.getElementById('inputName');
const email = document.querySelector('#inputEmail');
const password = document.querySelector('#inputPassword');
 const nameError = document.getElementById("nameError");
 const emailError = document.getElementById("emailError");
 const menuLogado = document.getElementsByClassName("header-menu");
 const emailLogin = document.getElementById("loginEmail");
 const newPassword = document.getElementById("newPassword");
 const newPasswordConfirm = document.getElementById("newPasswordConfirm");

newPassword.addEventListener('focusout', validateNewPassword);
newPasswordConfirm.addEventListener('focusout', validateNewPasswordConfirm);





userName.addEventListener('focusout', validateName);
email.addEventListener('focusout', validateEmail);
password.addEventListener('focusout', validatePassword);
emailLogin.addEventListener('focusout', validateEmailLogin);



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

//validação form login
function validateEmailLogin(e) {
  e.preventDefault();
  let valid = true;

  if (!emailLogin.value) {
   emailLoginError.classList.add("visible");
   emailLogin.classList.add("invalid");
   emailLoginError.setAttribute("aria-hidden", false);
   emailLoginError.setAttribute("aria-invalid", true);
  } else {
    emailLoginError.classList.remove("visible");
   emailLogin.classList.remove("invalid");
   emailLoginError.setAttribute("aria-hidden", true);
   emailLoginError.setAttribute("aria-invalid", false);
  }
  return valid;
  
}

//recuperação de senha

function validateNewPassword(e){
  e.preventDefault();
  let valid = true;

  if (!newPassword.value) {
    newPasswordError.classList.add("visible");
   newPassword.classList.add("invalid");
    newPasswordError.setAttribute("aria-hidden", false);
    newPasswordError.setAttribute("aria-invalid", true);
  } else {
    newPasswordError.classList.remove("visible");
    newPassword.classList.remove("invalid");
    newPasswordError.setAttribute("aria-hidden", true);
    newPasswordError.setAttribute("aria-invalid", false);
  }
  return valid;
}

function validateNewPasswordConfirm(e){
  e.preventDefault();
  let valid = true;

  if (!newPasswordConfirm.value) {
    newPasswordConfirmError.classList.add("visible");
   newPasswordConfirm.classList.add("invalid");
    newPasswordConfirmError.setAttribute("aria-hidden", false);
    newPasswordConfirmError.setAttribute("aria-invalid", true);
  } else {
    newPasswordConfirmError.classList.remove("visible");
    newPasswordConfirm.classList.remove("invalid");
    newPasswordConfirmError.setAttribute("aria-hidden", true);
    newPasswordConfirmError.setAttribute("aria-invalid", false);
  }
  return valid;
}
 



