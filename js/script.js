function textOpacity(value, element) {
  if (value == 0 && !element.value) {
    element.nextElementSibling.classList.remove("label-up");
    element.classList.remove("blue-background");
  } else {
    element.nextElementSibling.classList.add("label-up");
    element.classList.add("blue-background");
  }
}
