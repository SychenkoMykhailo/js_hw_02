const rgbToHex = function (colorRed, colorGreen, colorBlue) {
  function elemToHex(elem) {
    if (elem > 15) {
      return elem.toString(16);
    }
    return "0" + elem.toString(16);
  }
  return (
    "#" + elemToHex(colorRed) + elemToHex(colorGreen) + elemToHex(colorBlue)
  );
};
console.log(rgbToHex(255, 160, 120));
