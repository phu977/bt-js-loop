function tinhtongluythua(numberx,numbern) {
    var sum = 0;
    for (var i = 1; i <= numbern; i++ ){
        sum += Math.pow(numberx,numbern);
    }
    return sum;
}

function tinhtong() {
    var numberx = document.getElementById("number-x").value*1;
    var numbern = document.getElementById("number-n").value*1;
    var tong = tinhtongluythua(numberx,numbern);
    document.getElementById("result").innerHTML = `
    <h2>Tổng: ${tong}</h2>
    `
}