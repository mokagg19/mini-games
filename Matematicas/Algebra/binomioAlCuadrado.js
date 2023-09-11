
var text = "";
var correctText = "";

var correctAnswers = 0;
var reset = false;

var ejercicio = [[]];
var binomials = [];
var sumaoresta = [];
var solution = [[]];

var solutionBinomial = [];

var solutionExponentX = 1;
var solutionNumberX = 1;
var solutionExponentY = 1;
var solutionNumberY = 1;

var X = ["x", "a", "m", "t", "v"]
var Y = ["y", "n", "b", "u", "s"]


function setBoard() {

    for (var i = 0; i < 5; i++) {
        ejercicio = [];
        solution = [];

        var numeroA = Math.floor(Math.random() * 10) + 1;
        var numeroB = Math.floor(Math.random() * 10) + 1;
        var exponenteA = Math.floor(Math.random() * 3) + 1;
        var exponenteB = Math.floor(Math.random() * 3) + 1;
        var variableX = Math.floor(Math.random() * 4) + 1;
        var variableY = Math.floor(Math.random() * 4) + 1;

        solution.push(numeroA, X[variableX], exponenteA, numeroB, Y[variableY], exponenteB);

        if (numeroA == 1) {
            numeroA = "";
        }
        if (numeroB == 1) {
            numeroB = "";
        }
        if (exponenteA == 1) {
            exponenteA = "";
        }
        if (exponenteB == 1) {
            exponenteB = "";
        }
        ejercicio.push(numeroA, X[variableX], exponenteA, numeroB, Y[variableY], exponenteB);

        var signo = Math.floor(Math.random() * 2);
        var suma = true;

        if (signo == 0) {
            suma = "+";
        } else {
            suma = "-";
        }

        binomials.push(ejercicio);
        solutionBinomial.push(solution);
        sumaoresta.push(suma);
    }


    for (var i = 0; i < 5; i++) {

        var x = "<span id='numberX" + i + "'>" + binomials[i][0] + "</span<span id='x" + i + "'>" + binomials[i][1] + "</span><sup id='xExponent" + i + "'>" + binomials[i][2] + "</sup>";
        var y = "<span id='numberY" + i + "'>" + binomials[i][3] + "</span<span id='y" + i + "'>" + binomials[i][4] + "</span><sup id='yExponent" + i + "'>" + binomials[i][5] + "</sup>";
        var inputNumberX2 = "<input type='text' id='inputNumberX2" + i + "' class='number'>";
        var inputExponentX2 = "<sup><input type='text' id='inputExponentX2" + i + "' class='exponent''></sup>";
        var dropdown1 = "<select id='dropdown1" + [i] + "' class='dropdown'><option></option> <option>+</option> <option>-</option> </select>"
        var inputNumber2x = "<input type='text' id='inputNumber2x" + i + "' class='number'>"
        var inputExponent2x = "<sup><input type='text' id='inputExponent2x" + i + "' class='exponent''></sup>"
        var inputExponent2y = "<sup><input type='text' id='inputExponent2y" + i + "' class='exponent''></sup>"
        var dropdown2 = "<select id='dropdown2" + [i] + "' class='dropdown'><option></option> <option>+</option> <option>-</option> </select>"
        var inputNumberY2 = "<input type='text' id='inputNumberY2" + i + "' class='number''>";
        var inputExponentY2 = "<sup><input type='text' id='inputExponentY2" + i + "' class='exponent''></sup>";

        text += "<p><span class='numbers'>" + (i + 1) + ".</span> (" + x + " " + sumaoresta[i] + " " + y + ")<sup>2</sup> = <br>";

        if (binomials[i][0] == "") {
            inputNumberX2 = "";
        }
        if (binomials[i][3] == "") {
            inputNumberY2 = "";
        }
        if (binomials[i][2] == "") {
            inputExponent2x = "";
        }
        if (binomials[i][5] == "") {
            inputExponent2y = "";
        }

        text += inputNumberX2 + binomials[i][1] + inputExponentX2 + " " + dropdown1 + " " + inputNumber2x + binomials[i][1] + inputExponent2x + binomials[i][4] + inputExponent2y + " " + dropdown2 + " " + inputNumberY2 + binomials[i][4] + inputExponentY2 + "</p>";

    }
}

setBoard();

document.getElementById("fillblank-text").innerHTML = text;

function answer() {

    console.log(binomials)
    console.log(solutionBinomial);


    if (reset == false) {

        for (var i = 0; i < 5; i++) {

            var x = "<span id='numberX" + i + "'>" + binomials[i][0] + "</span<span id='x" + i + "'>" + binomials[i][1] + "</span><sup id='xExponent" + i + "'>" + binomials[i][2] + "</sup>";
            var y = "<span id='numberY" + i + "'>" + binomials[i][3] + "</span<span id='y" + i + "'>" + binomials[i][4] + "</span><sup id='yExponent" + i + "'>" + binomials[i][5] + "</sup>";
            var rx2 = 1;
            if (document.getElementById("inputNumberX2" + i)) {
                rx2 = document.getElementById("inputNumberX2" + i).value;
            }

            var rx2E = 1;
            if (document.getElementById("inputExponentX2" + i)) {
                rx2E = document.getElementById("inputExponentX2" + i).value;
            }

            var rxy = document.getElementById("inputNumber2x" + i).value;

            var rxE = 1;
            if (document.getElementById("inputExponent2x" + i)) {
                rxE = document.getElementById("inputExponent2x" + i).value
            };

            var ryE = 1;
            if (document.getElementById("inputExponent2y" + i)) {
                ryE = document.getElementById("inputExponent2y" + i).value
            };
            var ry2 = 1;

            if (document.getElementById("inputNumberY2" + i)) {
                ry2 = document.getElementById("inputNumberY2" + i).value;
            }
            var ry2E = 1;
            if (document.getElementById("inputExponentY2" + i)) {
                ry2E = document.getElementById("inputExponentY2" + i).value;
            };

            var explicacion = "";

            var sol2xy = 2 * solutionBinomial[i][0] * solutionBinomial[i][3];
            var solx2 = solutionBinomial[i][0] ** 2;
            var solx2E = solutionBinomial[i][2] * 2;
            var soly2 = solutionBinomial[i][3] ** 2;

            var x2 = "";
            if (solx2 == 1) {
                x2 = binomials[i][0] + binomials[i][1] + "<sup>" + solx2E + "</sup>";
            } else {
                x2 = solx2 + binomials[i][1] + "<sup>" + solx2E + "</sup>"
            };

            var xy = sol2xy + binomials[i][1] + "<sup>" + binomials[i][2] + "</sup>" + binomials[i][4] + "<sup>" + binomials[i][5] + "</sup>";
            var y2 = soly2 + binomials[i][4] + "<sup>" + solutionBinomial[i][5] * 2 + "</sup>";
            if (soly2 == 1) {
                y2 = binomials[i][3] + binomials[i][4] + "<sup>" + solutionBinomial[i][5] * 2 + "</sup>";
            } else {
                y2 = soly2 + binomials[i][4] + "<sup>" + solutionBinomial[i][5] * 2 + "</sup>";
            };

            var incorrect = false;

            correctText += "<p><span class='numbers'>" + (i + 1) + ".</span> (" + x + " " + sumaoresta[i] + " " + y + ")<sup>2</sup> = ";


            if (rx2 == solx2) {
                if (solx2 == 1) {
                    correctText += binomials[i][1];
                } else {
                    correctText += "<span id='solutionNumberX2" + i + "' class='correct'>" + solx2 + binomials[i][1] + "</span>"
                };
            } else {
                if (solx2 == 1) {
                    correctText += binomials[i][1];
                } else {
                    correctText += "<span id='solutionNumberX2" + i + "' class='incorrect'>" + solx2 + binomials[i][1] + "</span>"
                };
                incorrect = true;
            }

            if (rx2E == solx2E) {
                if (solx2E == 1) {
                } else {
                    correctText += "<sup><span id='solutionExponentX2" + i + "' class='correct'>" + solx2E + "</span></sup>";
                }
            } else {
                if (solx2E == 1) {
                } else {
                    correctText += "<sup><span id='solutionExponentX2" + i + "' class='incorrect'>" + solx2E + "</span></sup>";
                }
                incorrect = true;
            }

            if (sumaoresta[i] == "+") {
                if (document.getElementById("dropdown1" + i).selectedIndex == 1) {
                    correctText += '<span class="correct"> + </span>';
                } else {
                    correctText += '<span class="incorrect"> + </span>';
                    incorrect = true;
                }
            } else {
                if (document.getElementById("dropdown1" + i).selectedIndex == 2) {
                    correctText += '<span class="correct"> - </span>';
                } else {
                    correctText += '<span class="incorrect"> - </span>';
                    incorrect = true;
                }
            }

            if (rxy == sol2xy) {
                correctText += "<span id='solution2xy" + i + "' class='correct'>" + sol2xy + "</span>";
            } else {
                correctText += "<span id='solution2xy" + i + "' class='incorrect'>" + sol2xy + "</span>";
                incorrect = true;
            }

            if (rxE == solutionBinomial[i][2]) {
                correctText += "<span id='solutionxE" + i + "' class='correct'>" + binomials[i][1] + "<sup>" + binomials[i][2] + "</sup></span>";
            } else {
                correctText += "<span id='solutionxE" + i + "' class='incorrect'>" + binomials[i][1] + "<sup>" + binomials[i][2] + "</sup></span>";
                incorrect = true;
            }

            if (ryE == solutionBinomial[i][5]) {
                correctText += "<span id='solutionYE" + i + "' class='correct'>" + binomials[i][4] + "<sup>" + binomials[i][5] + "</span></sup>";
            } else {
                correctText += "<span id='solutionYE" + i + "' class='incorrect'>" + binomials[i][4] + "<sup>" + binomials[i][5] + "</span></sup>";
                incorrect = true;
            }

            if (document.getElementById("dropdown2" + i).selectedIndex == 1) {
                correctText += '<span class="correct"> + </span>';
            } else {
                correctText += '<span class="incorrect"> + </span>';
                incorrect = true;
            }

            if (ry2 == soly2) {
                if (soly2 == 1) {
                    correctText += binomials[i][4];
                } else {
                    correctText += "<span id='solutionNumberX2" + i + "' class='correct'>" + soly2 + binomials[i][4] + "</span>"
                };
            } else {
                if (soly2 == 1) {
                    correctText += binomials[i][4];
                } else {
                    correctText += "<span id='solutionNumberX2" + i + "' class='incorrect'>" + soly2 + binomials[i][4] + "</span>"
                };
                incorrect = true;
            }

            if (ry2E == (solutionBinomial[i][5] * 2)) {
                correctText += "<sup><span id='solutionExponentX2" + i + "' class='correct'>" + solutionBinomial[i][5] * 2 + "</span></sup>";
            } else {
                correctText += "<sup><span id='solutionExponentX2" + i + "' class='incorrect'>" + solutionBinomial[i][5] * 2 + "</span></sup>";
                incorrect = true;
            }


            if (incorrect == true) {

                var intro = "<p class='explicacion'>Para resolver un binomio al cuadrado debemos recordar los elementos que tenemos que resolver: <br>";
                var ea2 = "<b>Cuadrado del primer t&eacutermino</b>.<br>(" + x + ")<sup>2</sup> <br>= " + solutionBinomial[i][0] + "<sup>2</sup>(" + solutionBinomial[i][1] + "<sup>" + solutionBinomial[i][2] + "<sup>2</sup></sup>) <br>= " + solutionBinomial[i][0] ** 2 + solutionBinomial[i][1] + "<sup>(" + solutionBinomial[i][2] + " * 2)</sup> <br>= " + x2 + "<br><br>";
                var e2ab = "<b>El doble del producto del primero por el segundo:</b><br> 2(" + solutionBinomial[i][0] + solutionBinomial[i][1] + "<sup>" + solutionBinomial[i][2] + "</sup>)(" + solutionBinomial[i][3] + solutionBinomial[i][4] + "<sup>" + solutionBinomial[i][5] + "</sup>)<br>= (2 *" + solutionBinomial[i][0] + " * " + solutionBinomial[i][3] + ")" + solutionBinomial[i][1] + "<sup>" + solutionBinomial[i][2] + "</sup>" + solutionBinomial[i][4] + "<sup>" + solutionBinomial[i][5] + "</sup><br>= " + 2 * solutionBinomial[i][0] * solutionBinomial[i][3] + solutionBinomial[i][1] + "<sup>" + solutionBinomial[i][2] + "</sup>" + solutionBinomial[i][4] + "<sup>" + solutionBinomial[i][5] + "</sup> <br>=" + xy + "<br><br>";
                var eb2 = "<b>Cuadrado del segundo t&eacutermino:</b><br>(" + solutionBinomial[i][3] + solutionBinomial[i][4] + "<sup>" + solutionBinomial[i][5] + "</sup>)<sup>2</sup> <br>= " + solutionBinomial[i][3] + "<sup>2</sup>(" + solutionBinomial[i][4] + "<sup>" + solutionBinomial[i][5] + "<sup>2</sup></sup>)<br>= " + solutionBinomial[i][3] ** 2 + solutionBinomial[i][4] + "<sup>(" + solutionBinomial[i][5] + " * 2)</sup> <br>= " + y2 + "<br><br>";
                var res = "Como todos los t&eacuterminos son positivos, el resultado final entonces es:<br>" + x2 + " + " + xy + " + " + y2 + "</p>";
                var resn = "Como los t&eacuterminos se est&aacuten restando, el resultado final es:<br>" + x2 + " - " + xy + " + " + y2 + "</p>";

                explicacion = intro + ea2 + e2ab + eb2;

                if (sumaoresta[i] == "+") {
                    explicacion += res;
                } else {
                    explicacion += resn;
                }
            }

            correctText += "</p>" + explicacion + "<br>";

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

