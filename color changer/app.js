function randomColor() {
  const backgroundColorDiv = document.getElementById("backgroundColorDiv");
  const color = colorNameList[Math.floor(Math.random() * colorNameList.length)];
  const hexCode = document.getElementById("hexCode");
  const rgbCode = document.getElementById("rgbCode");
  const colorName = document.getElementById("colorName");
  hexCode.style.display = "block";
  rgbCode.style.display = "block";
  colorName.style.display = "block";
  backgroundColorDiv.style.backgroundColor = color.hex;
  hexCode.textContent = `Hex Code : ${color.hex}`;
  rgbCode.textContent = `RGB Code : ${backgroundColorDiv.style.backgroundColor}`;
  colorName.textContent = `Color Name : ${color.name}`;
}
