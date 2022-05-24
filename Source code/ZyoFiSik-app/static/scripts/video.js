const loadPoses = () => {
  var list = document.getElementById("poses");
  for (var i = 0; i < poseData.length; i++) {
    list.innerHTML =
      list.innerHTML +
      `<p class="pose-container">
        <input type="radio" name="pose" class="pose-val" value="${i}" onchange="changePose(this);" />
        <span class="pose-name">${poseData[i].name}</span>
      </p>`;
  }
};
