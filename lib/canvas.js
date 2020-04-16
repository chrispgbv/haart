//returns the context so it can be used
function getCanvas(name) {
  var canvas = document.getElementById(name);
  var ctx = canvas.getContext("2d");

  return ctx;
}
export default getCanvas;
