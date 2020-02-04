const shadow = {
    size: function() {
        const size = document.getElementById('size').value;
        return size;
    },
    color: function() {
        const color = document.getElementById('color').value;
        let colorArray = color.split(' ');
        if (colorArray.length > 1) {
            return colorArray;
        } else {
            return color;
        }
    },
    direction: function() {
        const direction = document.getElementById('direction').value;
        return direction; 
    },
    xNegative: function() {
        if (this.direction() == 2 | this.direction() == 3) {
            return "-";
        } else {
            return "";
        };
    },
    yNegative: function() {
        if (this.direction() == 3 | this.direction() == 4) {
            return "-";
        } else {
            return "";
        };
    }
};

function textCTRL() {
    let userText = document.getElementById("textCTRL").value;
    let displayText = document.getElementById("text");
    if (userText.length == 0) {
        displayText.innerHTML = "Sample Text."
    } else {
        displayText.innerHTML = userText;
    }
};

function buildShadow() {
    // assign user inputs
    const size = shadow.size();
    const color = shadow.color();
    const xNegative = shadow.xNegative();
    const yNegative = shadow.yNegative();
    let rawResult = "";

    // if (color.length > 1) {
    //     let divisible = size / color.length;
    //     for(let j = 0; j >= size; j++) {
    //         rawResult += `${xNegative}${i}px ${yNegative}${i}px ${color}, `;
    //         size--;
    //         return rawResult;
    //     }
    // } else {
        for (let i = 0; i <= size; i++) {
            rawResult += `${xNegative}${i}px ${yNegative}${i}px ${color}, `;
        }
        return rawResult;
}


function formatShadow() {
    let rawResult = buildShadow();
    let newResult = rawResult.substring(0, rawResult.length -2);
    document.getElementById("text").style.textShadow = newResult;
    document.getElementById("output").innerHTML = newResult;
};