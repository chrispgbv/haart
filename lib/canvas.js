//creates the background of the chart
function getCanvas(num) {
    var el = document.getElementById('myCanvas');
    var ctx = el.getContext('2d');
    console.log(el.width);
    if(num == 2){
       console.log('you got in')
    }
}
export default getCanvas;