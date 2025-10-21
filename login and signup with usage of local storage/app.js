const signUpForm = document.getElementById("signUp");
const loginForm = document.getElementById("loginForm");
const homePageDisplay = document.getElementById("homePage");

function signUpInfo() {
  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("userEmail").value;
  let userNumber = document.getElementById("userNumber").value;
  let userPassword = document.getElementById("userPassword").value;

  if (
    userName == "" ||
    userEmail == "" ||
    userNumber == "" ||
    userPassword == ""
  ) {
    alert(`the required details must be filled`);
  }

  localStorage.setItem("Name", userName);
  localStorage.setItem("Email", userEmail);
  localStorage.setItem("Number", userNumber);
  localStorage.setItem("Password", userPassword);

  signUpForm.classList.remove("active");
  loginForm.classList.add("active");
}

function loginInfo() {
  let loginEmail = document.getElementById("loginEmail");
  let loginPassword = document.getElementById("loginPassword");
  let storedEmail = localStorage.getItem("Email");
  let storedPassword = localStorage.getItem("Password");
  let storedName = localStorage.getItem("Name");
  let displayName = document.getElementById("displayName");

  // console.log(loginEmail)
  // console.log(storedEmail)
  // console.log(loginPassword)
  // console.log(storedPassword)

  if (
    loginEmail.value === storedEmail &&
    loginPassword.value === storedPassword
  ) {
    loginForm.classList.remove("active");
    homePageDisplay.classList.add("active");
  } else {
    alert("User doesn't Exist");
    loginEmail.value = "";
    loginPassword.value = "";
  }

  displayName.innerText = storedName;
}

function forAnchorTagOfRegister() {
  loginForm.classList.remove("active");
  signUpForm.classList.add("active");
}

function forAnchorTagOflogin() {
  signUpForm.classList.remove("active");
  loginForm.classList.add("active");
}
