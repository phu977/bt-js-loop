function giaithua(son) {
    var giaithua = 1 ; 
    for(var i = 1 ; i < son ; i++){
        giaithua *= i;
    }
    return giaithua;
}

function tinhgiaithua() {
    var son = document.getElementById("number-n").value*1;
    var factorial = giaithua(son);
    document.getElementById("result").innerHTML = `
    <p>GIai thừa :${factorial}</p>
    `
}