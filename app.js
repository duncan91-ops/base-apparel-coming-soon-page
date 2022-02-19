const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const submitButton = document.querySelector(".icon-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.elements.email.value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    form.elements.email.value = "";
  } else {
    input.classList.add("error");
    submitButton.disabled = true;
  }
});

input.addEventListener("focus", () => {
  input.classList.remove("error");
  submitButton.disabled = false;
});
