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
