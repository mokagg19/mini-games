
var text = "";
var correctText = "";

var correctAnswers = 0;
var reset = false;

var ejercicio = [[]];
var binomials = [];

var solutionBinomial = [];
var numEjercicio = 5;


function setBoard() {

    for (var i = 0; i < numEjercicio; i++) {
        ejercicio = [];
        for (var e = 0; e < 2; e++) {

            var numero = Math.floor(Math.random() * 10) + 1;
            var exponente = Math.floor(Math.random() * 3) + 1;

            /*if (numero == 1) {
                numero = "";
            }
            if (exponente == 1) {
                exponente = "";
            }*/
            ejercicio.push(numero, exponente);
        }
        binomials.push(ejercicio);

        var solucion = [];

        if (binomials[i][1] == "") {
            solutionExponentX = 2;
        } else {
            solutionExponentX = binomials[i][1] * 2;
        }
        if (binomials[i][0] == "") {
            solutionNumberX = 1;
        } else {
            solutionNumberX = binomials[i][0] ** 2;
        }
        if (binomials[i][3] == "") {
            solutionExponentY = 2;
        } else {
            solutionExponentY = binomials[i][3] * 2;
        }
        if (binomials[i][2] == "") {
            solutionNumberY = 1;
        } else {
            solutionNumberY = binomials[i][2] ** 2;
        }


        solucion.push(solutionNumberX, solutionExponentX, solutionNumberY, solutionExponentY);
        solutionBinomial.push(solucion);
    }



    for (var i = 0; i < numEjercicio; i++) {

        var x2 = ""
        if (solutionBinomial[i][0] == 1) {
            x2 = "<span id='numberX2" + i + "'></span>x<sup id='xExponent2" + i + "'>" + solutionBinomial[i][1] + "</sup>";
        } else {
            x2 = "<span id='numberX2" + i + "'>" + solutionBinomial[i][0] + "</span>x<sup id='xExponent2" + i + "'>" + solutionBinomial[i][1] + "</sup>";
        }
        
        var y2 = "";
        if (solutionBinomial[i][2] == 1) {
            y2 = "<span id='numberY2" + i + "'></span>y<sup id='yExponent2" + i + "'>" + solutionBinomial[i][3] + "</sup>";
        } else {
            y2 = "<span id='numberY2" + i + "'>" + solutionBinomial[i][2] + "</span>y<sup id='yExponent2" + i + "'>" + solutionBinomial[i][3] + "</sup>";
        }
    
        var inputNumberX1 = "<input type='text' id='inputX1" + i + "' class='number'>x<sup><input type='text' id='exponentX1" + i + "' class='exponent''></sup>";
        var inputNumberX2 = "<input type='text' id='inputX2" + i + "' class='number'>x<sup><input type='text' id='exponentX2" + i + "' class='exponent''></sup>";
        var dropdown1 = "<select id='dropdown1" + [i] + "' class='dropdown'><option></option> <option>+</option> <option>-</option> </select>";
        var dropdown2 = "<select id='dropdown2" + [i] + "' class='dropdown'><option></option> <option>+</option> <option>-</option> </select>";
        var inputNumberY1 = "<input type='text' id='inputY1" + i + "' class='number'>y<sup><input type='text' id='exponentY1" + i + "' class='exponent''></sup>";
        var inputNumberY2 = "<input type='text' id='inputY2" + i + "' class='number'>y<sup><input type='text' id='exponentY2" + i + "' class='exponent''></sup>";

        text += "<p><span class='numbers'>" + (i + 1) + ".</span> (" + x2 + " - " + y2 + ") <br>= (" + inputNumberX1 + " " + dropdown1 + " " + inputNumberY1 + ") * (" + inputNumberX2 + " " + dropdown2 + " " + inputNumberY2 + ")</p>";

    }
}

setBoard();

document.getElementById("fillblank-text").innerHTML = text;

function answer() {

    if (reset == false) {

        for (var i = 0; i < numEjercicio; i++) {

            var incorrect = false;

            var x = ""
            if (solutionBinomial[i][0] == 1) {
                x = "<span id='numberX2" + i + "'></span>x<sup id='xExponent2" + i + "'>" + solutionBinomial[i][1] + "</sup>";
            } else {
                x = "<span id='numberX2" + i + "'>" + solutionBinomial[i][0] + "</span>x<sup id='xExponent2" + i + "'>" + solutionBinomial[i][1] + "</sup>";
            }
            
            var y = "";
            if (solutionBinomial[i][2] == 1) {
                y = "<span id='numberY2" + i + "'></span>y<sup id='yExponent2" + i + "'>" + solutionBinomial[i][3] + "</sup>";
            } else {
                y = "<span id='numberY2" + i + "'>" + solutionBinomial[i][2] + "</span>y<sup id='yExponent2" + i + "'>" + solutionBinomial[i][3] + "</sup>";
            }

            var xE = binomials[i][1];
            if (binomials[i][1] == 1) {
                xE = "";
            }
            var yE = binomials[i][3];
            if (binomials[i][3] == 1) {
                yE = "";
            }

            var xvariable = binomials[i][0];
            if (binomials[i][0] == 1) {
                xvariable = "";
            }
            var yvariable = binomials[i][2];
            if (binomials[i][2] == 1) {
                yvariable = "";
            }

            var x1 = "";
            var x1E = "";
            var x2 = "";
            var x2E = "";
            var y1 = "";
            var y1E = "";
            var y2 = "";
            var y2E = "";
            var symbol1 = "";
            var symbol2 = "";
            var explicacion = "";

            var incorrect = false;

            var solx1 = "";
            if (document.getElementById("inputX1" + i)) {
                solx1 = document.getElementById("inputX1" + i).value;
            }
            if (solx1 == binomials[i][0] || solx1 == xvariable) {
                x1 = "<span id='solutionX1" + i + "' class='correct'>" + xvariable + "</span>";
            } else {
                x1 = "<span id='solutionX1" + i + "' class='incorrect'>" + xvariable + "</span>";
                incorrect = true;
            }

            var solx1E = "";
            if (document.getElementById("exponentX1" + i)) {
                solx1E = document.getElementById("exponentX1" + i).value
            }
            if (solx1E == binomials[i][1]) {
                x1E = "<sup><span id='solutionXE1" + i + "' class='correct'>" + xE + "</span></sup>";
            } else {
                x1E = "<sup><span id='solutionXE1" + i + "' class='incorrect'>" + xE + "</span></sup>";
                incorrect = true;
            }

            var soly1 = "";
            if (document.getElementById("inputY1" + i)) {
                soly1 = document.getElementById("inputY1" + i).value;
            }
            if (soly1 == binomials[i][2] || soly1 == yvariable ) {
                y1 = "<span id='solutionY1" + i + "' class='correct'>" + yvariable + "</span>";
            } else {
                y1 = "<span id='solutionY1" + i + "' class='incorrect'>" + yvariable + "</span>";
                incorrect = true;
            }

            var soly1E = "";
            if (document.getElementById("exponentY1" + i)) {
                soly1E = document.getElementById("exponentY1" + i).value;
            }
            if (soly1E == binomials[i][3]) {
                y1E = "<sup><span id='solutionYE1" + i + "' class='correct'>" + yE + "</span></sup>";
            } else {
                y1E = "<sup><span id='solutionYE1" + i + "' class='incorrect'>" + yE + "</span></sup>";
                incorrect = true;
            }

            var solX2 = "";
            if (document.getElementById("inputX2" + i)) {
                solX2 = document.getElementById("inputX2" + i).value;
            }
            if (solX2 == binomials[i][0] || solX2 == xvariable) {
                x2 = "<span id='solutionX2" + i + "' class='correct'>" + xvariable + "</span>";
            } else {
                x2 = "<span id='solutionX2" + i + "' class='incorrect'>" + xvariable + "</span>";
                incorrect = true;
            }

            var solx2E = "";
            
            if (document.getElementById("exponentX2" + i)) {
                solx2E = document.getElementById("exponentX2" + i).value;
            }
            
            if (solx2E == binomials[i][1]) {
                x2E = "<sup><span id='solutionXE2" + i + "' class='correct'>" + xE + "</span></sup>";
            } else {
                x2E = "<sup><span id='solutionXE2" + i + "' class='incorrect'>" + xE + "</span></sup>";
                incorrect = true;
            }

            var soly2 = "";
            if (document.getElementById("inputY2" + i)) {
                soly2 = document.getElementById("inputY2" + i).value;
            }
            if (soly2== binomials[i][2] || soly2 == yvariable) {
                y2 = "<span id='solutionY2" + i + "' class='correct'>" + yvariable + "</span>";
            } else {
                y2 = "<span id='solutionY2" + i + "' class='incorrect'>" + yvariable + "</span>";
                incorrect = true;
            }

            var soly2E = "";
            if (document.getElementById("exponentY2" + i)) {
                soly2E = document.getElementById("exponentY2" + i).value;
            }
            if (soly2E == binomials[i][3]) {
                y2E = "<sup><span id='solutionYE2" + i + "' class='correct'>" + yE + "</span></sup>";
            } else {
                y2E = "<sup><span id='solutionYE2" + i + "' class='incorrect'>" + yE + "</span></sup>";
                incorrect = true;
            }

            var dropdownA = document.getElementById("dropdown1" + i).selectedIndex;
            var dropdownB = document.getElementById("dropdown2" + i).selectedIndex;
            if (dropdownA == 2 && dropdownB == 1) {
                symbol1 = "<span id='symbol1" + i + "' class='correct'>+</span>";
                symbol2 = "<span id='symbol2" + i + "' class='correct'>-</span>";

            } else if (dropdownA == 1 && dropdownB == 2) {
                symbol1 = "<span id='symbol1" + i + "' class='correct'>+</span>";
                symbol2 = "<span id='symbol2" + i + "' class='correct'>-</span>";

            } else {
                symbol1 = "<span id='symbol1" + i + "' class='incorrect'>+</span>";
                symbol2 = "<span id='symbol2" + i + "' class='incorrect'>-</span>";
                incorrect = true;
            }
           
            correctText += "<p><span class='numbers'>" + (i + 1) + ".</span> (" + x + " - " + y + ") = (" + x1 + "x" + x1E + " " + symbol1 + " " + y1 + "y" + y1E + ") * (" + x2 + "x" + x2E + " " + symbol2 + " " + y2 + "y" + y2E + ")</p>"

            if (incorrect == true) {

                var intro = "<p class='explicacion'>La factorización de una diferencia de cuadrados es el producto de dos binomios conjugados."
                var rx1 = "<br><b>Primero obtenemos la ra&iacutez cuadrada del primer t&eacutermino</b>.<br>En este caso ser&iacutea:<br>&Sqrt;<span class='raiz-linea'>" + solutionBinomial[i][0] + "x<sup>" + solutionBinomial[i][1] + "</sup></span><br>&Sqrt;<span class='raiz-linea'>" + solutionBinomial[i][0] + "</span> = " + binomials[i][0] + "<br>&Sqrt;<span class='raiz-linea'>x<sup>" + solutionBinomial[i][1] + "</span> = x<sup>(" + solutionBinomial[i][1] + "/2)</sup> = x<sup>" + binomials[i][1] + "</sup><br>El primer t&eacutermino nos queda como: <br>" + x2 + "x" + x2E + "<br><br>"
                var ry1 = "<b>Tambi&eacuten la ra&iacutez cuadrada del segundo t&eacutermino</b><br>" + solutionBinomial[i][2] + "y<sup>" + solutionBinomial[i][3] + "</sup></span><br>&Sqrt;<span class='raiz-linea'>" + solutionBinomial[i][2] + "</span> = " + binomials[i][2] + "<br>&Sqrt;<span class='raiz-linea'>y<sup>" + solutionBinomial[i][3] + "</span> = y<sup>(" + solutionBinomial[i][3] + "/2)</sup> = y<sup>" + binomials[i][3] + "</sup><br>El segundo t&eacutermino nos queda como: <br>" + y2 + "y" + y2E + "<br><br>"
                var resultado = "El resultado final entonces es: (" + x1 + "x" + x1E + " " + symbol1 + " " + y1 + "y" + y1E + ") * (" + x2 + "x" + x2E + " " + symbol2 + " " + y2 + "y" + y2E + ")</p>";

                explicacion =  intro + rx1 + ry1 + resultado;
            }

            
            correctText += explicacion + "<br>";

        }

        document.getElementById("fillblank-text").innerHTML = correctText;

        document.getElementById("answerButton").innerHTML = "Vuelve a empezar";
        reset = true;



    } else {



        text = "";
        correctText = "";
        binomials = [];
        ejercicio = [];

        solutionBinomial = [];





        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();

        document.getElementById("fillblank-text").innerHTML = text;
    }





}

