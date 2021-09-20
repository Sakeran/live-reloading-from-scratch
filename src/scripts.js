const button = document.getElementById("my-button");
const confirmation = document.getElementById("confirmation");

button.addEventListener("click", function (evt) {
  evt.preventDefault();

  confirmation.classList.add("confirmed");
});
