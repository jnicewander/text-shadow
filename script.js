// assign user input to variables


function shadowSize() {
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;  
    const direction = document.getElementById("range").value;
    let hNeg = "";
    let vNeg = "";

    let sizeResult = "";

    
    for (let i = 0; i <= size; i++) {
        if (direction == 1){
            hNeg = "";
            vNeg = "";
        } else if (direction == 2) {
            hNeg = "-";
            vNeg = "";
        } else if (direction == 3) {
            hNeg = "-";
            vNeg = "-";
        } else {
            hNeg = "";
            vNeg = "-";
        }
        sizeResult += `${hNeg}${i}px ${vNeg}${i}px ${color}, `;
    };
    
    
    let newResult = sizeResult.substring(0, sizeResult.length -2);
    document.getElementById("text").style.textShadow = newResult;
    document.getElementById("output").innerHTML = newResult;
    return newResult;
};
