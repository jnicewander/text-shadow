function textCTRL() {
    let userText = document.getElementById("textCTRL").value;
    let displayText = document.getElementById("text");
    
    displayText.innerHTML = userText;

}

function moveShadow() {
    // assign user input to size
    const size = document.getElementById("size").value;
    const color = document.getElementById('color').value;
    const direction = document.getElementById('direction').value;
    // build string from size
    let rawResult = "";
    
    if (direction == 1) {
        for (let i = 0; i <= size; i++) {
            rawResult += `${i}px ${i}px ${color}, `;
        };
    } else if (direction == 2) {
        for (let i = 0; i <= size; i++) {
            rawResult += `-${i}px ${i}px ${color}, `;
        };
    } else if (direction == 3) {
        for (let i = 0; i <= size; i++) {
            rawResult += `-${i}px -${i}px ${color}, `;
        };
    } else {
        for (let i = 0; i <= size; i++) {
            rawResult += `${i}px -${i}px ${color}, `;
        };
    };
    
    // remove last comma and white space, assign to newResult
       let newResult = rawResult.substring(0, rawResult.length -2);
   
    // set style equal to string in newResult 
   document.getElementById("text").style.textShadow = newResult;
    
    // output CSS for user to copy
    document.getElementById("output").innerHTML = newResult;
}
