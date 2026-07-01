const username = document.querySelector("#username");
const password = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");

const savedData = JSON.parse(localStorage.getItem("formData"));

if (savedData) {
  username.value = savedData.username;
  password.value = savedData.password;
}

saveBtn.addEventListener("click", () => {
  const data = {
    username: username.value,
    password: password.value,
  };

  localStorage.setItem("formData", JSON.stringify(data));

  alert("Дані збережено");
});
