const nameInput = document.getElementById("name");
const stateSelect = document.getElementById("state");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const ratingSelect = document.getElementById("rating");
const textError = document.getElementById("name__error");
const stateError = document.getElementById("state__error");
const titleError = document.getElementById("title__error");
const descriptionError = document.getElementById("description__error");
const ratingError = document.getElementById("rating__error");


function validateForm() {
  if (nameInput.value == "") {
    nameInput.style.borderColor = "#f50545";
    textError.innerHTML = "This field is required";
    return false;
  } else if (stateSelect.value == "") {
    stateSelect.style.borderColor = "#f50545";
    stateError.innerHTML = "This field is required";
    return false;
  } else if (titleInput.value == "") {
    titleInput.style.borderColor = "#f50545";
    titleError.innerHTML = "This field is required";
    return false;
  } else if (
    descriptionInput.value.trim().length < 50
  ) {
    descriptionInput.style.borderColor = "#f50545";
    descriptionError.innerHTML = "Review must have a minimum of 50 characters";
    return false;
  } else if (ratingSelect.value == "") {
    ratingSelect.style.borderColor = "#f50545";
    ratingError.innerHTML = "This field is required";
    return false;
  }
}
