import  getData from 'station12.js'
export  function getData() {
    return "Station12をクリア!"
}
var result = getData();
var elem = document.getElementById("result");
elem.innerHTML = result;