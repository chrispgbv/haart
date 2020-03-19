//returns the context so it can be used 
function getCanvas(name) {
    var con = document.getElementById(name);
    var ctx = con.getContext('2d');
    return ctx
}
export default getCanvas;