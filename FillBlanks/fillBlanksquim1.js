var textItems = [
    '<p>El &aacute;tomo est&aacute; compuesto de 3 tipos de part&iacute;culas subat&oacute;micas que poseen diferentes atributos. Los ',
    ' tienen carga negativa y se encuentran orbitando alrededor del n&uacute;cleo, por otra parte, los ',
    ' tienen carga positiva y se encuentran en el n&uacute;cleo, junto con los ',
    ' los cuales no tienen ning&uacute;n tipo de carga.</p><p>Las ',
    ' se definen como la uni&oacute;n de dos o m&aacute;s ',
    ' para formar estructuras espec&iacute;ficas. Las mol&eacute;culas ',
    ' son aquellas que se componen de dos &aacute;tomos elementales diferentes, mientras que las ',
    ' son las que est&aacute;n formadas por el mismo tipo de &aacute;tomos, es decir, del mismo elemento.</p><p>Los ',
    ' son elementos que tienen el mismo n&uacute;mero de masa (suma de neutrones y protones) pero diferente n&uacute;mero at&oacute;mico. Por otra parte, los ',
    ' son elementos que difieren en el n&uacute;mero de neutrones, pero conservan el mismo n&uacute;mero de protones.</p><p>Un ',
    ' est&aacute; definido como la unidad de materia que contiene un objeto. Su valor es equivalente al n&uacute;mero de ',
    ' por lo tanto igual a 6.022 x 10<sup>23</sup> mol&eacute;culas.</p>'];
var anItems = [
    ' ',
    'mol',
    'is&oacute;baros',
    'monoat&oacute;micas',
    'neutrones',
    'is&oacute;topos',
    'Dalton',
    'mol&eacute;culas',
    'electrones',
    'Avogadro',
    '&aacute;tomos',
    'diat&oacute;micas',
    'protones',
    'poliat&oacute;micas'];
var anItemsCorrect = [8,12, 4, 7, 10, 11, 3, 2, 5, 1, 9];
var optionslist = "";
var text = "";
var correctText = "";
var answers = [];
var correctAnswers = 0;

for (var i = 0; i < anItems.length; i++) {
    optionslist += ("<option>" + anItems[i] + "</option>");
};

for (var i = 0; i < textItems.length - 1; i++) {
    text += textItems[i] + "<select id='dropdown" + [i] + "' class='dropdown'>" + optionslist + "</select>"
};

document.getElementById("fillblank-text").innerHTML = '<p>' + text + textItems[textItems.length - 1] + '</p>';

var string1 = 'energ&iacute;a';
var string2 = 'energ&iacute;a';
console.log(string1.normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
console.log(string2.normalize());


function answer() {

    document.getElementById("fillblank-text").style.display = "none";

    for (var i = 0; i < textItems.length - 1; i++) {
        correctText += textItems[i] + "<span id='answer" + i + "' class=''>" + anItems[anItemsCorrect[i]] + "</span>";
    };

    document.getElementById("respuesta").innerHTML = '<b>La respuesta correcta es:</b><p>' + correctText + textItems[textItems.length - 1] + '</p>';

    for (var i = 0; i < anItemsCorrect.length; i++) {
        var checkanswer = document.getElementById('dropdown' + i).selectedIndex;
        answers.push(checkanswer);

        if (answers[i] == [anItemsCorrect[i]]) {
            document.getElementById('answer' + i).classList.add("correct");
            correctAnswers++
        } else {
            document.getElementById('answer' + i).classList.add("incorrect");
            document.getElementById('answer' + i).innerHTML = "<span id='answer" + i + "' class='correct'> <span class='incorrect strike'>" + anItems[answers[i]] + "</span> " + anItems[anItemsCorrect[i]] + "</span>";
        }

    }

    if (correctAnswers == anItemsCorrect.length) {
        document.getElementById("solucion").innerHTML = "<p>&iexcl;Felicidades! Contestaste todas las preguntas correctamente</p>"
    } else if (0 < correctAnswers) {
        document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
    } else {
        document.getElementById("solucion").innerHTML = "<p>Sigue estudiando y vuelve a intentar</p>"
    }
    document.getElementById("answerButton").style.display = "none";
}