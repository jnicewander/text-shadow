const shadow = {
    size: function() {
        const size = document.getElementById('size').value;
        let sizeArray = size.split('+');
        return sizeArray;
    },
    color: function() {
        const color = document.getElementById('color').value;
        let colorArray = color.split('+');
        return colorArray;
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

sampleText = {
    replace: function textCTRL() {
        let userText = document.getElementById('textCTRL').value;
        let displayText = document.getElementById('text');
        if (userText.length == 0) {
            displayText.innerHTML = "Sample Text."
        } else {
            displayText.innerHTML = userText;
        }
    },
    color: function() {
        let color = document.getElementById('textColor').value;
        document.getElementById('text').style.color = color;
    }

}

function buildShadow() {
    // assign user inputs
    const size = shadow.size();
    const color = shadow.color();
    const xNegative = shadow.xNegative();
    const yNegative = shadow.yNegative();
    let rawResult = "";
    let counter = 0;
    color.forEach((color, pos) => {  // blue, red, yellow

        let currentColor = `${color}`;
        let currentPos = pos;
        size.forEach((size, numPos) => {
            if (currentPos == numPos) {
                for (let i = 0; i < size; i++) {
                    counter++;
                    rawResult += `${xNegative}${counter}px ${yNegative}${counter}px ${currentColor}, `;
                }
            }
        });
    });
    return rawResult;
        
    
}


function formatShadow() {
    let rawResult = buildShadow();
    let newResult = rawResult.substring(0, rawResult.length -2);
    document.getElementById("text").style.textShadow = newResult;
    document.getElementById("output").innerHTML = "text-shadow: " + newResult + ";";
};

const toolTips = {
    customText: {
        add: function() {
            let customHint = document.getElementById("customTextHint");
            customHint.style.display="block";
        },
        remove: function() {
            let customHint = document.getElementById("customTextHint");
            customHint.style.display="none";
        }
    },
    textColor: {
        add: function() {
            let textColor = document.getElementById("textColorHint");
            textColor.style.display="block";
        },
        remove: function() {
            let textColor = document.getElementById('textColorHint');
            textColor.style.display="none";
        }
    },
    shadowColor: {
        add: function() {
            let shadowColor = document.getElementById("shadowColorHint");
            shadowColor.style.display="block";
        },
        remove: function() {
            let shadowColor = document.getElementById("shadowColorHint");
            shadowColor.style.display="none";
        }
    },
    size: {
        add: function() {
            let size = document.getElementById("sizeHint");
            size.style.display="block";
        },
        remove: function() {
            let size = document.getElementById("sizeHint");
            size.style.display ="none";
        }
    },

};


function copyText() {
    const copyText = document.getElementById('output').textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText
    document.body.append(textArea);

    textArea.select();
    textArea.setSelectionRange(0, 99999);
    

    document.execCommand("copy");
    alert('Text copied to clipboard!');
};
