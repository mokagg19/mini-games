
var text = "";
var correctText = "";

var correctAnswers = 0;
var reset = false;

var ejercicio = [[]];
var solution = [[]];

var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;




var numEjercicio = 3;

function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function setBoard() {

    ejercicio = [];

    for (var i = 0; i < numEjercicio; i++) {

        solution = [];
        var variables = [];

        for (var e = 0; e < 6; e++) {
            var num = Math.floor(Math.random() * 10) + 1;
            var exponent = Math.floor(Math.random() * 3) + 1;
            var choice = Math.floor(Math.random() * 2) + 1;

            variables.push(num, exponent, choice);
        }
        ejercicio.push(variables);



    }

    for (var i = 0; i < numEjercicio; i++) {


        var symbol1 = "";
        var symbol2 = "";
        var symbol3 = "";
        var y1 = "";
        var y2 = "";
        var xory1 = "";
        var xory2 = "";

        if (ejercicio[i][2] == 1) {
            symbol1 = "+"
        } else {
            symbol1 = "-"
        }
        if (ejercicio[i][8] == 1) {
            symbol2 = "+"
        } else {
            symbol2 = "-"
        }
        if (ejercicio[i][11] == 1) {
            symbol3 = "+"
        } else {
            symbol3 = "-"
        }
        var expY1 = "";
        var expY2 = "";

        if (ejercicio[i][4] != 1) {
            expY1 = ejercicio[i][4]
        }
        if (ejercicio[i][13] != 1) {
            expY2 = ejercicio[i][13]
        }
        if (ejercicio[i][5] == 1) {
            if (ejercicio[i][3] == 1) {
                y1 = "y<sup>" + expY1 + "</sup>"
            } else {
                y1 = ejercicio[i][3] + "y<sup>" + expY1 + "</sup>"
            }
        } else {
            y1 = ejercicio[i][3]
        }
        if (ejercicio[i][14] == 1) {
            if (ejercicio[i][3] == 1) {
                y2 = "y<sup>" + expY2 + "</sup>"
            } else {
                y2 = ejercicio[i][12] + "y<sup>" + expY2 + "</sup>"
            }
        } else {
            y2 = ejercicio[i][12]
        }
        var numden1 = "";
        var numden2 = "";
        var numX1 = "";
        var numX2 = "";
        var expX1 = "";
        var expX2 = "";
        var expdem1 = "";
        var expdem2 = "";

        if (ejercicio[i][0] != 1) {
            numX1 = ejercicio[i][0];
        }
        if (ejercicio[i][9] != 1) {
            numX2 = ejercicio[i][9];
        }
        if (ejercicio[i][1] != 1) {
            expX1 = ejercicio[i][1];
        }
        if (ejercicio[i][10] != 1) {
            expX2 = ejercicio[i][10];
        }
        if (ejercicio[i][15] != 1) {
            numden2 = ejercicio[i][15];
        }
        if (ejercicio[i][6] != 1) {
            numden1 = ejercicio[i][6];
        }
        if (ejercicio[i][16] != 1) {
            expdem2 = ejercicio[i][16];
        }
        if (ejercicio[i][7] != 1) {
            expdem1 = ejercicio[i][7];
        }

        xory2 = numden2 + "x<sup>" + expdem2 + "</sup>"
        xory1 = numden1 + "x<sup>" + expdem1 + "</sup>"



        var frac1 = "<span class='frac'><span class='top'>" + numX1 + "x<sup>" + expX1 + "</sup> " + symbol1 + " " + y1 + "</span><span class='symbol'>/</span><span class='bottom'>" + xory1 + "</span></span> <span>" + symbol2 + "</span> ";
        var frac2 = "<span class='frac'><span class='top'>" + numX2 + "x<sup>" + expX2 + "</sup> " + symbol3 + " " + y2 + "</span><span class='symbol'>/</span><span class='bottom'>" + xory2 + "</span></span>";

        var input1 = "<input type='text' id='answerNumerator" + i + "'>";
        //"<input type='text' id='answerNumerator" + i + ">";
        var input2 = "<input type='text' id='answerDenominator" + i + "'>";
        //"<input type='text' id='answerDenominator" + i + ">";

        //removed: = <span class='frac'><span class='top'>" + input1 + "</span><span class='symbol'>/</span><span class='bottom'>" + input2 + "</span></span>

        text += "<p><span class='numbers'>" + (i + 1) + ". </span>" + frac1 + frac2 + " <br></p>"



        var mcmExp = ""
        if (ejercicio[i][7] > ejercicio[i][16]) {
            mcmExp = ejercicio[i][7]
        } else if (ejercicio[i][7] == ejercicio[i][16]) {
            mcmExp = ejercicio[i][16]
        } else {
            mcmExp = ejercicio[i][16]
        }

        var mcmNum = lcm_two_numbers(ejercicio[i][15], ejercicio[i][6]);
        var mcm = mcmNum + "x<sup>" + mcmExp + "</sup>"
        var denominador = mcmNum + "x^" + mcmExp

        if (mcmExp == 1) {
            mcm = mcmNum + "x"
            denominador = mcm
        }

        var multnumNumber1 = mcmNum / ejercicio[i][6]
        var multumExp1 = mcmExp - ejercicio[i][7]
        var multnum1 = multnumNumber1 + "x<sup>" + multumExp1 + "</sup>"

        var multnumNumber2 = mcmNum / ejercicio[i][15]
        var multumExp2 = mcmExp - ejercicio[i][16]
        var multnum2 = multnumNumber2 + "x<sup>" + multumExp2 + "</sup>"

        var fraccionfinal = "";
        
        var intro = "<p>Para resolver esta operaci&oacute;n de fracciones algebraicas necesitamos tener un denominador com&uacute;n.<br>";
        var mcme = "Calculamos el mcm de los n&uacute;meros, en este caso es " + mcmNum + ".<br>Luego, vamos a tomar la variable 'x' y el mayor exponente de x: " + mcmExp + "<br>Esto nos resulta en: " + mcm + "<br><br>";
        var mult1 = "Vamos a dividirlo entre cada uno de los denominadores. Para el primero vamos a dividir los n&uacute;meros:<br>" + mcmNum + " / " + ejercicio[i][6] + " = " + mcmNum / ejercicio[i][6] + "<br>Y dividimos x tambien:<br>x<sup>" + mcmExp + "</sup>/x<sup>" + ejercicio[i][7] + "</sup> = "


        var elem1 = multnumNumber1 * ejercicio[i][0] + "x<sup>" + (multumExp1 + ejercicio[i][1]) + "</sup>"
        var elem1simpl = (multnumNumber1 * ejercicio[i][0]) + "*x^" + (multumExp1 + ejercicio[i][1]) 
        if (multumExp1 + ejercicio[i][1] == 1) {
            elem1 = multnumNumber1 * ejercicio[i][0] + "x"
            elem1simpl = multnumNumber1 * ejercicio[i][0] + "*x"
        }


        var rollomut1 = ") * (" + ejercicio[i][0] + "x<sup>" + ejercicio[i][1] + "</sup> " + symbol1 + " " + ejercicio[i][3]
        if (ejercicio[i][5] != 1) {
            rollomut1 += ")<br>Vamos a realizar la multiplicaci&oacute;n:<br>("
        } else if (ejercicio[i][4] == 1) {
            rollomut1 += "y)<br>Vamos a realizar la multiplicaci&oacute;n:<br>("
        } else {
            rollomut1 += "y<sup>" + ejercicio[i][4] + "</sup>" + ")<br>Vamos a realizar la multiplicaci&oacute;n:<br>("
        }
        var num1 = "(" + multnum1 + rollomut1 + multnumNumber1 + " * " + ejercicio[i][0] + ")x<sup>(" + multumExp1 + " + " + ejercicio[i][1] + ")</sup> = " + elem1 + "<br>";

        if (mcmExp == ejercicio[i][7]) {
            mult1 += "x<sup>" + multumExp1 + "</sup> = 1<br>&Eacute;ste es el valor por el que multiplicaremos al numerador.<br>"
            num1 = "(" + multnumNumber1 + rollomut1 + multnumNumber1 + " * " + ejercicio[i][0] + ")x<sup>" + ejercicio[i][1] + "</sup> = " + elem1 + "<br>";

        } else {
            mult1 += "x<sup>" + multumExp1 + "</sup><br>&Eacute;ste es el valor por el que multiplicaremos al numerador.<br>"
            num1 = "(" + multnum1 + rollomut1 + multnumNumber1 + " * " + ejercicio[i][0] + ")x<sup>(" + multumExp1 + " + " + ejercicio[i][1] + ")</sup> = " + elem1 + "<br>";

        }
        var elem2 = ""
        var elem2simpl = ""
        var num2 = ""

        var yexp1 = "y<sup>" + ejercicio[i][4] + "</sup>"
        var yesp1simpl = "*y^" + ejercicio[i][4]
        if (ejercicio[i][4] == 1) {
            yexp1 = "y"
            yesp1simpl = "*y"
        }


        if (ejercicio[i][5] == 1 && mcmExp == ejercicio[i][7]) {
            console.log("caso1a")
            elem2 = multnumNumber1 * ejercicio[i][3] + yexp1
            elem2simpl = multnumNumber1 * ejercicio[i][3] + yesp1simpl
            num2 = "(" + multnumNumber1 + " * " + ejercicio[i][3] + ")y<sup>" + ejercicio[0][4] + "</sup> = " + elem2
        } else if (ejercicio[i][5] == 1 && mcmExp != ejercicio[i][7] && multumExp1 == 1) {
            console.log("caso2a")
            elem2 = multnumNumber1 * ejercicio[i][3] + "x" + yexp1
            elem2simpl = multnumNumber1 * ejercicio[i][3] + "*x" + yesp1simpl
            num2 = "(" + multnumNumber1 + " * " + ejercicio[i][3] + ")x<sup>" + multumExp1 + "</sup>" + yexp1 + " = " + elem2

        } else if (ejercicio[i][5] == 1 && mcmExp != ejercicio[i][7] && multumExp1 != 1) {
            console.log("caso3a")
            elem2 = multnumNumber1 * ejercicio[i][3] + "x<sup>" + multumExp1 + "</sup>" + yexp1
            elem2simpl = multnumNumber1 * ejercicio[i][3] + "*x^" + multumExp1 + yesp1simpl
            num2 = "(" + multnumNumber1 + " * " + ejercicio[i][3] + ")x<sup>" + multumExp1 + "</sup>" + yexp1 + " = " + elem2

        } else if (ejercicio[i][5] != 1 && mcmExp == ejercicio[i][7]) {
            console.log("caso4a")
            elem2 = multnumNumber1 * ejercicio[i][3]
            elem2simpl = elem2
            num2 = "(" + multnumNumber1 + " * " + ejercicio[i][3] + ") = " + elem2
        } else if (multumExp1 == 1){
            console.log("caso5a")
            elem2 = multnumNumber1 * ejercicio[i][3] + "x"
            elem2simpl = multnumNumber1 * ejercicio[i][3] + "*x^" + multumExp1
            num2 = "(" + multnumNumber1 + " * " + ejercicio[i][3] + ")x<sup>" + multumExp1 + "</sup> = " + elem2
        } else {
            console.log("caso6a")
            elem2 = multnumNumber1 * ejercicio[i][3] + "x<sup>" + multumExp1 +"</sup>"
            elem2simpl = multnumNumber1 * ejercicio[i][3] + "*x^" + multumExp1
            num2 = "(" + multnumNumber1 + " * " + ejercicio[i][3] + ")x<sup>" + multumExp1 + "</sup> = " + elem2
        }



        var mult2 = "<br><br>Vamos a hacer lo mismo con el segundo denominador <br>" + mcmNum + " / " + ejercicio[i][15] + " = " + mcmNum / ejercicio[i][15] + "<br>Y dividimos x tambien:<br>x<sup>" + mcmExp + "</sup>/x<sup>" + ejercicio[i][16] + "</sup> = "



        var elem3 = multnumNumber2 * ejercicio[i][9] + "x<sup>" + (multumExp2 + ejercicio[i][10]) + "</sup>"
        var elem3simpl = multnumNumber2 * ejercicio[i][9] + "*x^" + (multumExp2 + ejercicio[i][10])
        if (multumExp2 + ejercicio[i][10] == 1) {
            elem3 = multnumNumber2 * ejercicio[i][9] + "x"
            elem3simpl = multnumNumber2 * ejercicio[i][9] + "*x"
        } 

        var num3 = "(" + multnum2 + ") * (" + ejercicio[i][9] + "x<sup>" + ejercicio[i][10] + "</sup> " + symbol3 + " " + ejercicio[i][12]

        if(mcmExp == ejercicio[i][16]){
            num3 = "(" + multnumNumber2 + ") * (" + ejercicio[i][9] + "x<sup>" + ejercicio[i][10] + "</sup> " + symbol3 + " " + ejercicio[i][12]

        }
        

        if (ejercicio[i][14] == 1) {
            num3 += "y<sup>" + ejercicio[i][13] + "</sup>";
        }

        num3 += ")<br>Vamos a realizar la multiplicaci&oacute;n:<br>(" + multnumNumber2 + " * " + ejercicio[i][9] + ")x<sup>(" + multumExp2 + " + " + ejercicio[i][10] + ")</sup> = " + elem3 + "<br>"

        if (mcmExp == ejercicio[i][16]) {
            mult2 += "x<sup>" + multumExp2 + "</sup> = 1<br>&Eacute;ste es el valor por el que multiplicaremos al segundo numerador.<br>"
            elem3 = multnumNumber2 * ejercicio[i][9]
            elem3simpl = elem3
            
        } else {
            mult2 += "x<sup>" + multumExp2 + "</sup><br>&Eacute;ste es el valor por el que multiplicaremos al numerador.<br>"
        }
        var elem4 = ""
        var elem4simpl = "";
        var num4 = ""


        var yexp2 = "y<sup>" + ejercicio[i][13] + "</sup>"
        var yexp2simpl = "*y^" + ejercicio[i][13]
        if (ejercicio[i][14] != 1) {
            yexp2 = "";
            yexp2simpl = yexp2
        } else if (ejercicio[i][13] == 1) {
            yexp2 = "y"
            yexp2simpl = "*y"
        }



        if (ejercicio[i][14] == 1 && (mcmExp == ejercicio[i][16])) {
            elem4 = multnumNumber2 * ejercicio[i][12] + yexp2
            elem4simpl = multnumNumber2 * ejercicio[i][12] + yexp2simpl
            num4 = "(" + multnumNumber2 + " * " + ejercicio[i][12] + ")" + yexp2 + " = " + elem4
            console.log("case1b");

        } else if (ejercicio[i][14] == 1 && (mcmExp != ejercicio[i][16]) && multumExp2 == 1) {
            elem4 = multnumNumber2 * ejercicio[i][12] + "x" + yexp2
            elem4simpl = multnumNumber2 * ejercicio[i][12] + "*x" + yexp2simpl
            num4 = "(" + multnumNumber2 + " * " + ejercicio[i][12] + ")x" + yexp2 + " = " + elem4
            console.log("case2b")

        } else if (ejercicio[i][14] == 1 && mcmExp != ejercicio[i][16] && multumExp2 != 1) {
            console.log("ejercicio[i][14] == 1 && mcmExp != ejercicio[i][12] && multumExp2 != 1, case 3b")
            elem4 = multnumNumber2 * ejercicio[i][3] + "x<sup>" + multumExp2 + "</sup>" + yexp2
            elem4simpl = multnumNumber2 * ejercicio[i][3] + "*x^" + multumExp2 + yexp2simpl
            num4 = "(" + multnumNumber2 + " * " + ejercicio[i][12] + ")x<sup>" + multumExp2 + "</sup>" + yexp2 + " = " + elem4

        } else if (ejercicio[i][14] != 1 && mcmExp == ejercicio[i][16]) {
            console.log("caso4b")
            elem4 = multnumNumber2 * ejercicio[i][12]
            elem4simpl = elem4
            num4 = "(" + multnumNumber2 + " * " + ejercicio[i][12] + ") = " + elem4
        } else if (multumExp2 == 1){
            console.log("caso5b")
            elem4 = multnumNumber2 * ejercicio[i][12] + "x"
 
            elem4simpl = multnumNumber2 * ejercicio[i][12] + "*x^" + multumExp2
            num4 = "(" + multnumNumber2 + " * " + ejercicio[i][12] + ")x<sup>(" + multumExp2 + ")</sup> = " + elem4
        }else {
            console.log("caso6b")
            elem4 = multnumNumber2 * ejercicio[i][12] + "x<sup>" + multumExp2 + "</sup>" 
            elem4simpl = multnumNumber2 * ejercicio[i][12] + "*x^" + multumExp2
            num4 = "(" + multnumNumber2 + " * " + ejercicio[i][12] + ")x<sup>(" + multumExp2 + ")</sup> = " + elem4
        }



        var fraccionsemifinal = "<span class='frac'><span class='top'>" + elem1 + " " + symbol1 + " " + elem2 + " "
        var fraccionfinal = "";
        var exp1 = elem1simpl + symbol1 + elem2simpl 

        if (symbol2 == "-") {
            fraccionsemifinal += symbol2 + " (" + elem3 + " " + symbol3 + " " + elem4 + ")</span><span class='symbol'>/</span><span class='bottom'>" + mcm + "</span></span><br>";
            fraccionsemifinal += "<span class='frac'><span class='top'>" + elem1 + " " + symbol1 + " " + elem2 + " " + symbol2 + " " + elem3 + " "
            exp1 += symbol2 + elem3simpl
            fraccionfinal = "<span class='frac'><span class='top'>" + elem1 + " " + symbol1 + " " + elem2 + " " + symbol2 + " " + elem3 + " "
            if (symbol3 == "-") {
                fraccionsemifinal += "+ " + elem4 + "</span><span class='symbol'>/</span><span class='bottom'>" + mcm + "</span></span><br>";
                fraccionfinal += "+ " + elem4 + "</span><span class='symbol'>/</span><span class='bottom'>" + mcm + "</span></span><br>";
                exp1 += "+" + elem4simpl
            } else {
                fraccionsemifinal += "- " + elem4 + "</span><span class='symbol'>/</span><span class='bottom'>" + mcm + "</span></span><br>";
                fraccionfinal += "- " + elem4 + "</span><span class='symbol'>/</span><span class='bottom'>" + mcm + "</span></span><br>";
                exp1 += "-" + elem4simpl
            }
        } else {
            fraccionfinal = "<span class='frac'><span class='top'>" + elem1 + " " + symbol1 + " " + elem2 + " " + symbol2 + " " + elem3 + " " + symbol3 + " " + elem4 + "</span><span class='symbol'>/</span><span class='bottom'>" + mcm + "</span></span>"; 
            fraccionsemifinal += symbol2 + " " + elem3 + " " + symbol3 + " " + elem4 + "</span><span class='symbol'>/</span><span class='bottom'>" + mcm + "</span></span>"; 
            exp1 += symbol2+elem3simpl+symbol3+elem4simpl          
        }

        var acom = "<br><br>Acomodemos todos los elementos respetando su signo:<br>" + fraccionsemifinal + "<br>"


        var parseelem1 = algebra.parse(exp1)
        var parsedLatex = parseelem1;

        
        //var parseelem2 = algebra.parse(elem2simpl)
        //var parseelem3 = algebra.parse(elem3simpl)
        //var parseelem4 = algebra.parse(elem4simpl)

        //var parsed = algebra.parse(exp1)
        //var exp = new Expression("x");
        //exp = exp.simplify();
        //exp = exp.toTex();
        var den = new Expression(denominador);
        
        var simplificar = "<br>Ahora simplificamos y la respuesta final es:<br><span class='frac'><span class='top'>" + parsedLatex + "</span><span class='symbol'>/</span><span class='bottom'>" + denominador + "</span></span>"

            

            


        var explicacion = "<p id='explicacion" + i + "'>" + intro + mcme + mult1 + num1 + num2 + mult2 +num3 + num4 + acom + simplificar + "</p>"

        correctText += "<p><span class='numbers'>" + (i + 1) + ". </span>" + frac1 + frac2 + " = <span class='frac'><span class='top' id='latexNumerator" + i + "'>" + parsedLatex + "</span><span class='symbol'>/</span><span class='bottom'>" + denominador + "</span></span></p>"
        correctText += explicacion

        var options = [];

        options.push(parseelem1.toString(), den.toString());


        solution.push(options);


    }
}

setBoard();

document.getElementById("fillblank-text").innerHTML = text;


function answer() {


    if (reset == false) {

        document.getElementById("fillblank-text").innerHTML = correctText;
       

        document.getElementById("answerButton").innerHTML = "Mas ejercicios";
        reset = true;

    } else {

        text = "";
        correctText = "";
        binomials = [];
        ejercicio = [];


        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();

        document.getElementById("fillblank-text").innerHTML = text;
    }


}

