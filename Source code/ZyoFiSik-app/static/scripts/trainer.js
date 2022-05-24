const loadInstructions = () => {
  var svgElement = document.getElementById("svg");
  var stepElement = document.getElementById("steps");
  var index = window.location.href.split("&")[1].split("=")[1]-1;
  var url=document.getElementById("tutorial");
  document.getElementById("heading").innerText = instructionsData[index].title;
  svgElement.innerHTML = instructionsData[index].svg;
  stepElement.innerHTML = instructionsData[index].steps;
  url.setAttribute("href",instructionsData[index].url);
};
const next = () => {
  document.getElementById("hidden").setAttribute("id", "");
  document
    .getElementById("info")
    .getElementsByClassName("instructions")[0]
    .setAttribute("id", "hidden");
  document.getElementsByClassName("view")[0].style.width = "50vw";
  document.getElementsByClassName("view")[0].style.boxShadow =
    "0px 0px 0px 0px transparent";
  document.getElementById("info").style.width = "50vw";
  document
    .getElementById("info")
    .getElementsByClassName("instructions")[0].style.filter =
    "brightness(1)blur(0px)";
};
const instructions = () => {
  document.getElementById("hidden").setAttribute("id", "");
  document
    .getElementById("info")
    .getElementsByClassName("controls")[0]
    .setAttribute("id", "hidden");
};
const full = () => {
  if (document.getElementsByClassName("fullscreen")[0] == undefined) {
    console.log("full");
    document.getElementById("full").innerText = "Exit";
    document
      .getElementsByClassName("view")[0]
      .getElementsByTagName("img")[0]
      .setAttribute("class", "fullscreen");
    document
      .getElementsByClassName("view")[0]
      .getElementsByTagName("img")[0].style.width = "100vw";
    document
      .getElementsByClassName("view")[0]
      .getElementsByTagName("img")[0].style.height = "100vh";
  } else {
    console.log("exit");
    document.getElementById("full").innerText = "Full screen";
    document.getElementsByClassName("fullscreen")[0].style.width = "48vw";
    document.getElementsByClassName("fullscreen")[0].style.height = "28vw";
    document.getElementsByClassName("fullscreen")[0].setAttribute("class", "");
  }
};
