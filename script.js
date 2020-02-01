function moveShadow() {
    // assign user input to size
    const size = document.getElementById("size").value;
 
    // build string from size
    let rawResult = "";
    for(let i = 0; i <= size; i++) {
        rawResult += `${i}px ${i}px red, `;
    };
    // remove last comma and white space, assign to newResult
       let newResult = rawResult.substring(0, rawResult.length -2);
   
    // set style equal to string in newResult 
   document.getElementById("text").style.textShadow = newResult;
    
    // output CSS for user to copy
    document.getElementById("output").innerHTML = newResult;
}
