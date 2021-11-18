function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("popuptext");
}
function openData() {
  var div = document.getElementById("content");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
function openSecondData() {
  var div = document.getElementById("second-content");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}