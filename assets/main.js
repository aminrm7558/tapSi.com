// import sum, { name, num } from "/assets/script.js";
// console.log(name);
// console.log(num);
// // import sum from '/assets/script.js';
// console.log(sum(10, 5));

// function suma(a, b) {
//   return a + b;
// }
// console.log(suma(2, 8));

// class Car {
//     constructor (){

//     }
// }
const userNameInput = document.querySelector("#name-input");
const passWordInput = document.getElementById("password-input");
const errorTextUserName = document.querySelector(".error-text-name");
const errorTextPassWord = document.querySelector(".error-text-password");
const logInBtn = document.querySelector(".login-btn");
const errorBox = document.querySelector(".error-box");
const logInLink = document.querySelector(".logIn-link");
const signUpLink = document.querySelector(".signUp-link");
const signUpSection = document.querySelector(".signUp-section");
const signInLogInSection = document.querySelector(".sign-login-section");
const forgotPassWordLink = document.querySelector(".forgot-password a");
const forgotPassWordSection = document.querySelector(
  ".forgot-password-section"
);
logInLink.addEventListener('click' , function(){
  signInLogInSection.classList.add('show');
  signUpSection.style.display='none';
  signInLogInSection.style.display = "flex";
  forgotPassWordSection.style.display='none';
})
signUpLink.addEventListener('click' , function(){
  signUpSection.classList.add('show');
  signInLogInSection.style.display= 'none';
  signUpSection.style.display = "flex";
});
forgotPassWordLink.addEventListener('click' , function(){
  forgotPassWordSection.classList.add("show");
  signInLogInSection.style.display = "none";
  forgotPassWordSection.style.display = "flex";
})
logInBtn.addEventListener("click", signIn);
function signIn(event) {
  let ifSendData = true;
  errorTextUserName.innerText = "";
  errorTextPassWord.innerText = "";
  event.preventDefault();
  let userNameVal = userNameInput.value;
  let passwordVal = passWordInput.value;
  if (
    userNameVal.length == 0 ||
    userNameVal.indexOf(".") == -1 ||
    userNameVal.indexOf("@") == -1
  ) {
    ifSendData = false;
    errorBox.classList.toggle("show");
  }
  if (passwordVal.length <= 4) {
    errorBox.classList.add("show");
    ifSendData = false;
    setTimeout(function () {
      errorBox.classList.remove("show");
    }, 5000);
  } else {
    errorBox.classList.remove("show");
  }
  if (
    userNameVal.length == 0 ||
    userNameVal.indexOf(".") == -1 ||
    userNameVal.indexOf("@") == -1 ||
    passwordVal.length <= 4
  ) {
    ifSendData = false;
    errorBox.classList.add("show");
    setTimeout(function () {
      errorBox.classList.remove("show");
    }, 5000);
  }
  if (
    userNameVal.length == 0 ||
    userNameVal.indexOf(".") == -1 ||
    (userNameVal.indexOf("@") == -1 && passwordVal.length <= 4)
  ) {
    ifSendData = false;
    errorBox.classList.add("show");
    setTimeout(function () {
      errorBox.classList.remove("show");
    }, 5000);
  }
  userNameInput.value = "";
  passWordInput.value = "";

  if (ifSendData) {
    const body = JSON.stringify({
      username: userNameInput,
      password: passWordInput,
    });
    const headers = {
      "Content-Type": "application/json",
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: headers,
    }).then((response) => {
      if (response.ok) {
        alert("ورود با موفقیت انجام شد!");
      }
    });
  }
}
