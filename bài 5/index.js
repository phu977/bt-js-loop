


function cacsonguyen() {
    var number = document.getElementById("number").value*1;
    var cacso = ""
    for (var i = 1; i <= number;i++){
        cacso = cacso+ i + " ";
    }
    document.getElementById("result").innerHTML = `
    <p>chuỗi số:${cacso}</p>
    `
}