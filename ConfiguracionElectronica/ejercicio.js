var elementInformation = new Array();
var badInput = false;

function loadElementInformation() {
    $.get("elements.txt", function(txt) {
        var lines = txt.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
            var line = lines[i];
            var info = line.split("-");
            elementInformation.push(info);
            document.getElementById("array").innerHTML = "array";
        }
    });
}

loadElementInformation();
