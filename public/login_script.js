let body = document.querySelector("body");
let form = document.forms[0];
let button = document.querySelector("#reg");
let loginBtn = document.querySelector("#login");
let password;
let email;
let user;

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  password = document.querySelector("#psw").value;
  email = document.querySelector("#lemail").value;

  let loginData = {
    email: email,
    password: password,
  };

  fetch("./login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.length < 1) {
        alert(`this user dosn't exist, please, register`);
      } else {
        let id = data[0].user_id;
        let url = `./home/${id}`;
        window.open(url, "_blank");
      }
    })
    .catch((e) => console.log(e));
});
