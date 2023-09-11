
var text = "";
var correctText = "";

var correctAnswers = 0;
var reset = false;

var ejercicio = [[]];
var binomials = [];
var sumaoresta = [];

var solutionBinomial = [];

var solutionExponenta = 1;
var solutionNumbera = 1;
var solutionExponentb = 1;
var solutionNumberb = 1;


function setBoard() {

    for (var i = 0; i < 5; i++) {
        ejercicio = [];
        for (var e = 0; e < 2; e++) {

            var numero = Math.floor(Math.random() * 5) + 1;
            var exponente = Math.floor(Math.random() * 3) + 1;


            if (numero == 1) {
                numero = "";
            }
            if (exponente == 1) {
                exponente = "";
            }
            ejercicio.push(numero, exponente);
        }
        var signo = Math.floor(Math.random() * 2);
        var suma = true;

        if (signo == 0) {
            suma = "+";
        } else {
            suma = "-";
        }

        binomials.push(ejercicio);
        sumaoresta.push(suma);
    }


    for (var i = 0; i < 5; i++) {

        var a = "<span id='numberX" + i + "'>" + binomials[i][0] + "</span<span id='x" + i + "'>x</span><sup id='xExponent" + i + "'>" + binomials[i][1] + "</sup>";
        var b = "<span id='numberY" + i + "'>" + binomials[i][2] + "</span<span id='y" + i + "'>y</span><sup id='yExponent" + i + "'>" + binomials[i][3] + "</sup>";
        var inputNumbera3 = "<input type='text' id='inputa3" + i + "' class='number'>x<sup><input type='text' id='exponenta3" + i + "' class='exponent''></sup>";
        var inputNumber3a2 = "<input type='text' id='inputa2" + i + "' class='number'>x<sup><input type='text' id='exponenta2" + i + "' class='exponent''></sup>"
        var inputNumberb = "y<sup><input type='text' id='exponentb" + i + "' class='exponent'></sup>"
        var inputNumber3a = "<input type='text' id='input3a" + i + "' class='number'>x<sup><input type='text' id='exponent3a" + i + "' class='exponent''></sup>";
        var inputNumberb2 = "y<sup><input type='text' id='exponentb2" + i + "' class='exponent'></sup>";
        var inputNumberb3 = "<input type='text' id='inputb3" + i + "' class='number'>y<sup><input type='text' id='exponentb3" + i + "' class='exponent''></sup>"

        var dropdown1 = "<select id='dropdown1" + [i] + "' class='dropdown'><option></option> <option>+</option> <option>-</option> </select>"
        var dropdown2 = "<select id='dropdown2" + [i] + "' class='dropdown'><option></option> <option>+</option> <option>-</option> </select>"
        var dropdown3 = "<select id='dropdown3" + [i] + "' class='dropdown'><option></option> <option>+</option> <option>-</option> </select>"

        text += "<p><span class='numbers'>" + (i + 1) + ".</span> (" + a + " " + sumaoresta[i] + " " + b + ")<sup>3</sup> = <br><span>" + inputNumbera3 + dropdown1 + inputNumber3a2 + inputNumberb + dropdown2 + inputNumber3a + inputNumberb2 + dropdown3 + inputNumberb3 + "</span></p>";

    }
}

setBoard();

document.getElementById("fillblank-text").innerHTML = text;

function answer() {

    if (reset == false) {

        for (var i = 0; i < 5; i++) {

            var solucion = [];

            if (binomials[i][1] == "") {
                solutionExponenta = 1;
            } else {
                solutionExponenta = binomials[i][1];
            }
            if (binomials[i][0] == "") {
                solutionNumbera = 1;
            } else {
                solutionNumbera = binomials[i][0];
            }
            if (binomials[i][3] == "") {
                solutionExponentb = 1;
            } else {
                solutionExponentb = binomials[i][3];
            }
            if (binomials[i][2] == "") {
                solutionNumberb = 1;
            } else {
                solutionNumberb = binomials[i][2];
            }


            solucion.push(solutionNumbera, solutionExponenta, solutionNumberb, solutionExponentb);
            solutionBinomial.push(solucion);
        }

        for (var i = 0; i < 5; i++) {

            var x3 = "";
            var x2 = "";
            var x1 = "";
            var xe1 = "";
            var y3 = "";
            var y2 = "";
            var y1 = "";
            var ye1 = "";

            if(solutionBinomial[i][0]!=1){
                x3 = solutionBinomial[i][0]**3;
                x2 = solutionBinomial[i][0]**2;
                x1 = solutionBinomial[i][0]
            }
            if(solutionBinomial[i][1]!=1){
                xe1 = solutionBinomial[i][1]
            }
            if(solutionBinomial[i][2]!=1){
                y3 = solutionBinomial[i][2]**3;
                y2 = solutionBinomial[i][2]**2;
                y1 = solutionBinomial[i][2]
            }
            if(solutionBinomial[i][3]!=1){
                ye1 = solutionBinomial[i][3]
            }



            var a = "<span id='numberX" + i + "'>" + binomials[i][0] + "</span<span id='x" + i + "'>x</span><sup id='xExponent" + i + "'>" + binomials[i][1] + "</sup>";
            var b = "<span id='numberY" + i + "'>" + binomials[i][2] + "</span<span id='y" + i + "'>y</span><sup id='yExponent" + i + "'>" + binomials[i][3] + "</sup>";
            var a3 = x3 + "x<sup>" + solutionBinomial[i][1]*3 + "</sup>";
            var a2b = (3 * (solutionBinomial[i][0]**2 * solutionBinomial[i][2])) + "x<sup>" + solutionBinomial[i][1]*2 + "</sup>y<sup>" + ye1 + "</sup>";
            var ab2 = (3 * (solutionBinomial[i][0] * solutionBinomial[i][2]**2)) + "x<sup>" + xe1 + "</sup>y<sup>" + solutionBinomial[i][3]*2 + "</sup>";
            var b3 = y3 + "y<sup>" + solutionBinomial[i][3]*3 + "</sup>";

            

            correctText += "<p><span class='numbers'>" + (i + 1) + ".</span> (" + a + " " + sumaoresta[i] + " " + b + ")<sup>3</sup> = <br><span>";

            var ra3 = document.getElementById("inputa3" + i).value + "x<sup>" + document.getElementById("exponenta3" + i).value + "</sup>";
            var rd1 = document.getElementById("dropdown1" + i).selectedIndex;
            var ra2b = document.getElementById("inputa2" + i).value + "x<sup>" + document.getElementById("exponenta2" + i).value + "</sup>y<sup>" + document.getElementById("exponentb" + i).value + "</sup>";
            var rd2 = document.getElementById("dropdown2" + i).selectedIndex;
            var rab2 = document.getElementById("input3a" + i).value + "x<sup>" + document.getElementById("exponent3a" + i).value + "</sup>y<sup>" + document.getElementById("exponentb2" + i).value + "</sup>";
            var rd3 = document.getElementById("dropdown3" + i).selectedIndex;
            var rb3 = document.getElementById("inputb3" + i).value + "y<sup>" + document.getElementById("exponentb3" + i).value + "</sup>";

            var explicacion = "";

            var incorrect = false;


            if (a3 == ra3) {
                correctText += "<span id='solutiona3" + i + "' class='correct'>" + a3 + "</span>";
            } else {
                correctText += "<span id='solutiona3" + i + "' class='incorrect'>" + a3 + "</span>";
                incorrect = true;
            }
            if (sumaoresta[i] == "+") {
                if (rd1 == 1) {
                    correctText += '<span class="correct"> + </span>';
                } else {
                    correctText += '<span class="incorrect"> + </span>';
                    incorrect = true;
                }
            } else {
                if (rd1 == 2) {
                    correctText += '<span class="correct"> - </span>';
                } else {
                    correctText += '<span class="incorrect"> - </span>';
                    incorrect = true;
                }
            }
            if (a2b == ra2b) {
                correctText += "<span id='solutiona2b" + i + "' class='correct'>" + a2b + "</span>";
            } else {
                correctText += "<span id='solutiona2b" + i + "' class='incorrect'>" + a2b + "</span>";
                incorrect = true;
            }
            if (rd2 == 1) {
                correctText += '<span class="correct"> + </span>';
            } else {
                correctText += '<span class="incorrect"> + </span>';
                incorrect = true;
            }
            if (ab2 == rab2) {
                correctText += "<span id='solutionab2" + i + "' class='correct'>" + ab2 + "</span>";
            } else {
                correctText += "<span id='solutionab2" + i + "' class='incorrect'>" + ab2 + "</span>";
                incorrect = true;
            }
            if (sumaoresta[i] == "+") {
                if (rd3 == 1) {
                    correctText += '<span class="correct"> + </span>';
                } else {
                    correctText += '<span class="incorrect"> + </span>';
                    incorrect = true;
                }
            } else {
                if (rd1 == 2) {
                    correctText += '<span class="correct"> - </span>';
                } else {
                    correctText += '<span class="incorrect"> - </span>';
                    incorrect = true;
                }
            }

            if (b3 == rb3) {
                correctText += "<span id='solutionb3" + i + "' class='correct'>" + b3 + "</span>";
            } else {
                correctText += "<span id='solutionb3" + i + "' class='incorrect'>" + b3 + "</span>";
                incorrect = true;
            }

            correctText += "<br>"


        if (incorrect == true) {
            var intro = "<p class='explicacion'>Para resolver un binomio al cubo debemos recordar los elementos que tenemos que resolver, recordemos que de acuerdo a las leyes de los exponentes, cuando se eleva una potencia vamos a multiplicar los exponentes: <br>";
            var ea3 = "<b>Cubo del primer t&eacutermino</b>.<br>(" + solutionBinomial[i][0] + "x<sup>" + solutionBinomial[i][1] + "</sup>)<sup>3</sup> <br>= " + solutionBinomial[i][0] + "<sup>3</sup>(x<sup>" + solutionBinomial[i][1] + "<sup>3</sup></sup>) <br>= " + solutionBinomial[i][0]**3 + "x<sup>(" + solutionBinomial[i][1] + " * 3)</sup> <br>= " + a3 + "<br><br>";
            var ea2b = "<b>El triple producto del cuadrado del primero por el segundo:</b><br> 3(" + solutionBinomial[i][0] + "x<sup>" + solutionBinomial[i][1] + "</sup>)<sup>2</sup>(" + solutionBinomial[i][2] + "y<sup>" + solutionBinomial[i][3] + "</sup>)<br>= 3(" + solutionBinomial[i][0]**2 +"x<sup>" + solutionBinomial[i][1]*2 + "</sup>)("+ solutionBinomial[i][2] + "y<sup>" + solutionBinomial[i][3] + "</sup>)<br>= 3(" + ((solutionBinomial[i][0]**2)*solutionBinomial[i][2]) + "x<sup>" + solutionBinomial[i][1]*2 + "</sup>y<sup>" + solutionBinomial[i][3] + "</sup>)<br>= " + a2b + "<br><br>";
            var eab2 = "<b>El triple producto del primero por el cuadrado del segundo:</b><br> 3(" + solutionBinomial[i][0] + "x<sup>" + solutionBinomial[i][1] + "</sup>)(" + solutionBinomial[i][2] + "y<sup>" + solutionBinomial[i][3] + "</sup>)<sup>2</sup><br> = 3(" + solutionBinomial[i][0] * (solutionBinomial[i][2] ** 2) + "x<sup>" + solutionBinomial[i][1] + "</sup>y<sup>" + solutionBinomial[i][3]*2 + "</sup>)<br>= 3(" + (solutionBinomial[i][0]*(solutionBinomial[i][2])**2) + "x<sup>" + solutionBinomial[i][1] + "</sup>y<sup>" + solutionBinomial[i][3]*2 + "</sup>)<br>= " + ab2 + "<br><br>"
            var eb3 = "<b>El cubo del segundo t&eacutermino:</b><br>(" + solutionBinomial[i][2] + "y<sup>" + solutionBinomial[i][3] + "</sup>)<sup>3</sup> <br>= " + solutionBinomial[i][2] + "<sup>3</sup>(y<sup>" + solutionBinomial[i][3] + "<sup>3</sup></sup>)<br>= " + solutionBinomial[i][2]**3 + "y<sup>(" + solutionBinomial[i][3] + " * 3)</sup> <br>= " + b3 + "<br><br>";
            var res = "Como todos los t&eacuterminos son positivos, el resultado final entonces es:<br>" + a3 + " + " + a2b + " + " + ab2 + " + " + b3 + "</p>";
            var resn = "Como los t&eacuterminos se est&aacuten restando, el resultado final es:<br>"+ a3 + " - " + a2b + " + " + ab2 + " - " + b3 + "</p>";

            explicacion = intro + ea3 + ea2b + eab2 + eb3;
            
            if(sumaoresta[i] == "+"){
                explicacion += res;
            } else {
                explicacion += resn;
            }
        }

        correctText += explicacion + "<br><br>"

        }

        



        document.getElementById("fillblank-text").innerHTML = correctText;

        document.getElementById("answerButton").innerHTML = "Vuelve a empezar";
        reset = true;


    } else {

        text = "";
        correctText = "";
        binomials = [];
        ejercicio = [];
        sumaoresta = [];

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


