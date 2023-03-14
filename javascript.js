let button_edit = document.querySelector(".user__link-edit");
let popup = document.querySelector(".popup");
let fechar = document.querySelector(".popup__close_button");
let form = document.querySelector(".form__edit");
let name = document.querySelector(".user__name");
let desc = document.querySelector(".user__description");
let page = document.querySelector(".popupPage");


fechar.addEventListener("click", function () {
  popup.style.display = "none";
  page.style.display = "none";
});

function handleProfileFormSubmit(event) {
  event.preventDefault()
}

form.addEventListener('submit', handleProfileFormSubmit);


form.addEventListener("submit", function () {
  let username = document.querySelector("#name");
  name.innerHTML = username.value;
  let description = document.querySelector("#description");
  desc.innerHTML = description.value;
  popup.style.display = "none";
  page.style.display = "none";
});

function toggle() {
  page.classList.toggle('active')
};

button_edit.addEventListener("click", function () {
  popup.style.display = "block";
  let username = document.querySelector("#name");
  username.value = name.innerHTML;
  let description = document.querySelector("#description");
  description.value = desc.innerHTML;
  page.style.display = "block";
});

addEventListener("click", function () {
  document.body.classList.add("form");
});


addEventListener("click", function () {
  document.body.classList.remove("form");
});

