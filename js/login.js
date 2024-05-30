const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// User Registration

function saveUser() {
  let userEmail = $('#reg_email').val();
  let userPassword = $('#reg_password').val();
  let userName = $('#reg_username').val();
  let userRole = $('#reg_role').val();


  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:8080/api/v1/user/register",
    async: true,
    data: JSON.stringify({
      "email": userEmail,
      "password": userPassword,
      "name": userName,
      "role": userRole

    }),

    success: function (data) {
      alert("Saved!!!")
    },


    error: function (xhr, exception) {
      alert("Error!!!")
    },
  })
}

// *************************************************************************************
// User Login

function userLogin() {
  let userLoginEmail = $('#login_username').val();
  let userLoginPassword = $('#login_password').val();


  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:8080/api/v1/auth/authenticate",
    async: true,
    data: JSON.stringify({
      "email": userLoginEmail,
      "password": userLoginPassword
    }),

    success: function (data) {
      alert("Saved!!!")
      console.log("Saved!!!!")
      console.log(data)
      console.log(data.data.email)
      console.log(data.data.token)


      localStorage.setItem('user01',data.data.token)
      alert(localStorage.getItem('user01'))
      //window.location.href = '../index.html';
    },


    error: function (xhr, exception) {
      alert("Error!!!")
    },
  })
}
