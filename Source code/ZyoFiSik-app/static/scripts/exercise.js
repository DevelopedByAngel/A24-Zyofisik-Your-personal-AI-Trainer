var length;
if (
  imageData.length >
  document.getElementById("exercise-names").getElementsByTagName("option")
    .length
)
  length = document
    .getElementById("exercise-names")
    .getElementsByTagName("option").length;
else length = imageData.length;
var index = 0;
var column1 = document.getElementsByClassName("column1")[0];
var column2 = document.getElementsByClassName("column2")[0];
var column3 = document.getElementsByClassName("column3")[0];
var imageElements = imageData.map((singleData) => {
  var img = new Image();
  img.src = singleData.image;
  return img;
});
while (index < length - (length % 3)) {
  column1.innerHTML =
    column1.innerHTML +
    "<a href='" +
    imageData[index].url +
    "'><div class='default-cell cell' ><div class='imgContainer' id='" +
    imageData[index].id +
    "'><img src='" +
    imageElements[index].src +
    "'></div><div class='about'><span class='name'>" +
    imageData[index].name +
    "</span></div></div></a>";
  index = index + 1;
  column2.innerHTML =
    column2.innerHTML +
    "<a href='" +
    imageData[index].url +
    "'><div class='default-cell cell' ><div class='imgContainer' id='" +
    imageData[index].id +
    "'><img src='" +
    imageElements[index].src +
    "'></div><div class='about'><span class='name'>" +
    imageData[index].name +
    "</span></div></div></a>";
  index = index + 1;
  column3.innerHTML =
    column3.innerHTML +
    "<a href='" +
    imageData[index].url +
    "'><div class='default-cell cell' ><div class='imgContainer' id='" +
    imageData[index].id +
    "'><img src='" +
    imageElements[index].src +
    "'></div><div class='about'><span class='name'>" +
    imageData[index].name +
    "</span></div></div></a>";
  index = index + 1;
}
while (index < length) {
  var html =
    "<a href='" +
    imageData[index].url +
    "'><div class='default-cell cell' ><div class='imgContainer' id='" +
    imageData[index].id +
    "'><img src='" +
    imageElements[index].src +
    "'></div><div class='about'><span class='name'>" +
    imageData[index].name +
    "</span></div></div></a>";
  if (index % 3 == 0) {
    column1.innerHTML = column1.innerHTML + html;
  } else if (index % 3 == 1) {
    column2.innerHTML = column2.innerHTML + html;
  } else if (index % 3 == 2) {
    column3.innerHTML = column3.innerHTML + html;
  }
  index = index + 1;
}

window.onload = () => {
  var options = document
    .getElementById("exercise-names")
    .getElementsByTagName("option");
  for (var i = 0; i < imageData.length; i++) {
    document
      .getElementById(imageData[i].id)
      .getElementsByTagName("img")[0].style.display = "block";
    document.getElementById(imageData[i].id).style.height =
      document.getElementById(imageData[i].id).getElementsByTagName("img")[0]
        .offsetHeight + "px";
    document.getElementById(imageData[i].id).style.width =
      document.getElementById(imageData[i].id).getElementsByTagName("img")[0]
        .offsetWidth + "px";
    options[i].setAttribute("value", imageData[i].name);
  }
};
document.getElementById("filter-form").onsubmit = (e) => {
  e.preventDefault();
  var search = document.getElementById("filter").value;
  var element = [];
  var filter = imageData.filter((singleData, i) => {
    if (singleData.name.toLowerCase().includes(search.toLowerCase())) {
      element.push(imageElements[i]);
      return true;
    } else {
      return false;
    }
  });
  arrangeData(filter, element);
};

function arrangeData(imageData, imageElements) {
  length = imageData.length;
  i = 0;
  column1.innerHTML = "";
  column2.innerHTML = "";
  column3.innerHTML = "";
  while (i < length - (length % 3)) {
    column1.innerHTML =
      column1.innerHTML +
      "<a href='" +
      imageData[i].url +
      "'><div class='default-cell cell' ><div class='imgContainer' id='" +
      imageData[i].id +
      "'><img src='" +
      imageElements[i].src +
      "'></div><div class='about'><span class='name'>" +
      imageData[i].name +
      "</span></div></div></a>";
    i = i + 1;
    column2.innerHTML =
      column2.innerHTML +
      "<a href='" +
      imageData[i].url +
      "'><div class='default-cell cell' ><div class='imgContainer' id='" +
      imageData[i].id +
      "'><img src='" +
      imageElements[i].src +
      "'></div><div class='about'><span class='name'>" +
      imageData[i].name +
      "</span></div></div></a>";
    i = i + 1;
    column3.innerHTML =
      column3.innerHTML +
      "<a href='" +
      imageData[i].url +
      "'><div class='default-cell cell' ><div class='imgContainer' id='" +
      imageData[i].id +
      "'><img src='" +
      imageElements[i].src +
      "'></div><div class='about'><span class='name'>" +
      imageData[i].name +
      "</span></div></div></a>";
    i = i + 1;
  }
  while (i < length) {
    var html =
      "<a href='" +
      imageData[i].url +
      "'><div class='default-cell cell' ><div class='imgContainer' id='" +
      imageData[i].id +
      "'><img src='" +
      imageElements[i].src +
      "'></div><div class='about'><span class='name'>" +
      imageData[i].name +
      "</span></div></div></a>";
    if (i % 3 == 0) {
      column1.innerHTML = column1.innerHTML + html;
    } else if (i % 3 == 1) {
      column2.innerHTML = column2.innerHTML + html;
    } else if (i % 3 == 2) {
      column3.innerHTML = column3.innerHTML + html;
    }
    i = i + 1;
  }
  for (var i = 0; i < imageData.length; i++) {
    document
      .getElementById(imageData[i].id)
      .getElementsByTagName("img")[0].style.display = "block";
    document.getElementById(imageData[i].id).style.height =
      document.getElementById(imageData[i].id).getElementsByTagName("img")[0]
        .offsetHeight + "px";
    document.getElementById(imageData[i].id).style.width =
      document.getElementById(imageData[i].id).getElementsByTagName("img")[0]
        .offsetWidth + "px";
  }
}
