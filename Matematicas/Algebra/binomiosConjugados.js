
var text = "";
var correctText = "";

var correctAnswers = 0;
var reset = false;

var ejercicio = [[]];
var binomials = [];

var solutionBinomial = [];

var solutionExponentX = 1;
var solutionNumberX = 1;
var solutionExponentY = 1;
var solutionNumberY = 1;


function setBoard() {

    for (var i = 0; i < 5; i++) {
        ejercicio = [];
        for (var e = 0; e < 2; e++) {

            var numero = Math.floor(Math.random() * 10) + 1;
            var exponente = Math.floor(Math.random() * 3) + 1;

            if (numero == 1) {
                numero = "";
            }
            if (exponente == 1) {
                exponente = "";
            }
            ejercicio.push(numero, exponente);
        }
        binomials.push(ejercicio);
    }


    for (var i = 0; i < 5; i++) {

        var x = "<span id='numberX" + i + "'>" + binomials[i][0] + "</span<span id='x" + i + "'>x</span><sup id='xExponent" + i + "'>" + binomials[i][1] + "</sup>";
        var y = "<span id='numberY" + i + "'>" + binomials[i][2] + "</span<span id='y" + i + "'>y</span><sup id='yExponent" + i + "'>" + binomials[i][3] + "</sup>";
        var inputNumberX = "<input type='text' id='inputX" + i + "' class='number'><sup><input type='text' id='exponentX" + i + "' class='exponent''></sup>";
        var dropdown = "<select id='dropdown" + [i] + "' class='dropdown'><option></option> <option>+</option> <option>-</option> </select>"
        var inputNumberY = "<input type='text' id='inputY" + i + "' class='number''><sup><input type='text' id='exponentY" + i + "' class='exponent''></sup>"

        text += "<p><span class='numbers'>" + (i + 1) + ".</span> (" + x + " + " + y + ") * (" + x + " - " + y + ") = " + inputNumberX + " " + dropdown + " " + inputNumberY + "</p>";

    }
}

setBoard();

document.getElementById("fillblank-text").innerHTML = text;

function answer() {

    if (reset == false) {

        for (var i = 0; i < 5; i++) {

            var solucion = [];

            if (binomials[i][1] == "") {
                solutionExponentX = 2;
            } else {
                solutionExponentX = binomials[i][1] * 2;
            }
            if (binomials[i][0] == "") {
                solutionNumberX = "x";
            } else {
                solutionNumberX = binomials[i][0] ** 2 + "x";
            }
            if (binomials[i][3] == "") {
                solutionExponentY = 2;
            } else {
                solutionExponentY = binomials[i][3] * 2;
            }
            if (binomials[i][2] == "") {
                solutionNumberY = "y";
            } else {
                solutionNumberY = binomials[i][2] ** 2 + "y";
            }


            solucion.push(solutionNumberX, solutionExponentX, solutionNumberY, solutionExponentY);
            solutionBinomial.push(solucion);
        }

        for (var i = 0; i < 5; i++) {

            var x = "<span id='numberX" + i + "'>" + binomials[i][0] + "</span<span id='x" + i + "'>x</span><sup id='xExponent" + i + "'>" + binomials[i][1] + "</sup>";
            var y = "<span id='numberY" + i + "'>" + binomials[i][2] + "</span<span id='y" + i + "'>y</span><sup id='yExponent" + i + "'>" + binomials[i][3] + "</sup>";
            var x2 = "";
            var x2E = "";
            var y2 = "";
            var y2E = "";
            var symbol = "";
            var explicacion = "";

            var incorrect = false;


            if (document.getElementById("inputX" + i).value == solutionBinomial[i][0]) {
                x2 = "<span id='solutionX" + i + "' class='correct'>" + solutionBinomial[i][0] + "</span>";
            } else {
                x2 = "<span id='solutionX" + i + "' class='incorrect'>" + solutionBinomial[i][0] + "</span>";
                incorrect = true;
            }

            if (document.getElementById("exponentX" + i).value == solutionBinomial[i][1]) {
                x2E = "<sup><span id='solutionXE" + i + "' class='correct'>" + solutionBinomial[i][1] + "</span></sup>";
            } else {
                x2E = "<sup><span id='solutionXE" + i + "' class='incorrect'>" + solutionBinomial[i][1] + "</span></sup>";
                incorrect = true;
            }

            if (document.getElementById("dropdown" + i).selectedIndex == 2) {
                symbol = "<span id='symbol" + i + "' class='correct'>-</span>";
            } else {
                symbol = "<span id='symbol" + i + "' class='incorrect'>-</span>";
                incorrect = true;
            }

            if (document.getElementById("inputY" + i).value == solutionBinomial[i][2]) {
                y2 = "<span id='solutionY" + i + "' class='correct'>" + solutionBinomial[i][2] + "</span>";
            } else {
                y2 = "<span id='solutionY" + i + "' class='incorrect'>" + solutionBinomial[i][2] + "</span>";
                incorrect = true;
            }
            if (document.getElementById("exponentY" + i).value == solutionBinomial[i][3]) {
                y2E = "<sup><span id='solutionYE" + i + "' class='correct'>" + solutionBinomial[i][3] + "</span></sup>";
            } else {
                y2E = "<sup><span id='solutionYE" + i + "' class='incorrect'>" + solutionBinomial[i][3] + "</span></sup>";
                incorrect = true;
            }

            if (incorrect == true) {



                if (binomials[i][1] == "") {
                    solutionExponentX = 1;
                } else {
                    solutionExponentX = binomials[i][1];
                }
                if (binomials[i][0] == "") {
                    solutionNumberX = 1;
                } else {
                    solutionNumberX = binomials[i][0];
                }
                if (binomials[i][3] == "") {
                    solutionExponentY = 1;
                } else {
                    solutionExponentY = binomials[i][3];
                }
                if (binomials[i][2] == "") {
                    solutionNumberY = 1;
                } else {
                    solutionNumberY = binomials[i][2];
                }


                explicacion = "<p class='explicacio&oacuten'>Para resolver unos binomios conjugados debemos de recordar la regla: <br><b>El cuadrado del primero menos el cuadrado del segundo binomio</b>.<br>En este caso seri&oacutea:<br><br>El primer binomio es <b>" + binomials[i][0] + "x<sup>" + binomials[i][1] + "</sup></b><br>Recordando las leyes de los exponentes, cuando se eleva una potencia vamos a multiplicar los exponentes, en este caso la potencia es " + solutionExponentX + " * 2 = " + (solutionExponentX * 2) + ".<br>El primer te&oacutermino nos queda como: <br>" + solutionNumberX + "<sup>2</sup>x<sup>(" + solutionExponentX + ")<sup>2</sup></sup> = " + x2 + x2E + "<br><br>El segundo te&oacutermino (<b>" + binomials[i][2] + "y<sup>" + binomials[i][3] + "</sup></b>) tambie&oacuten lo tenemos que elevar al cuadrado<br>" + solutionExponentY + " * 2 = " + (solutionExponentY * 2) + "<br> El segundo binomio es: " + solutionNumberY + "<sup>2</sup>x<sup>(" + solutionExponentY + ")<sup>2</sup></sup> = " + y2 + y2E + "<br><br> El resultado final entonces es: " + x2 + x2E + " - " + y2 + y2E + "</p>";
            }

            correctText += "<p><span class='numbers'>" + (i + 1) + ".</span> (" + x + " + " + y + ") * (" + x + " - " + y + ") = " + x2 + x2E + " " + symbol + " " + y2 + y2E + "</p>" + explicacion + "<br>";

        }

        document.getElementById("fillblank-text").innerHTML = correctText;

        document.getElementById("answerButton").innerHTML = "Vuelve a empezar";
        reset = true;

        console.log("reset has been set");


    } else {



        text = "";
        correctText = "";
        binomials = [];
        ejercicio = [];

        solutionBinomial = [];

        solutionExponentX = 1;
        solutionNumberX = 1;
        solutionExponentY = 1;
        solutionNumberY = 1;





        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();

        document.getElementById("fillblank-text").innerHTML = text;
    }





}

