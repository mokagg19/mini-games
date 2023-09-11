var textItems = [
    '<p>Los organismos tienen atributos que los identifican como seres vivos. Uno de esos atributos es que pueden transformar y utilizar ',
    ', adem&aacute;s de ser ',
    ' y poder transferir su informaci&oacute;n ',
    ' a la siguiente generaci&oacute;n.</p><p>En la naturaleza, la materia se organiza en niveles, comenzando desde el ',
    ' hasta la', 'que es el &uacute;ltimo nivel de organizaci&oacute;n biol&oacute;gica. Un conjunto de ',
    ' conforman los ',
    ' y &eacute;stos a su vez conforman los ',
    ' que se agrupan en sistemas dentro de nuestro cuerpo.</p><p>Si bien la materia tiene niveles de organizaci&oacute;n, tambi&eacute;n existen niveles de clasificaci&oacute;n. En los organismos, la unidad b&aacute;sica de clasificaci&oacute;n es la ',
    ' mientras que el ',
    ' es el siguiente nivel de clasificaci&oacute;n.</p><p>El naturalista ',
    ' desarroll&oacute; un sistema de clasificaci&oacute;n ',
    ' donde los nombres cient&iacute;ficos se componen por dos palabras en lat&iacute;n. Actualmente, la clasificaci&oacute;n se basa en la historia ',
    ' de la especie.</p><p>Para poder clasificar una especie es necesario encontrar estructuras ',
    ' las cuales provienen de un ancestro com&uacute;n. Tambi&eacute;n se estudia el registro ',
    ' para buscar las relaciones entre organismos a trav&eacute;s del tiempo.</p>'];
var anItems = [
    '',
    'gen&eacute;tica',
    '&oacute;rganos',
    '&aacute;tomo',
    'binomial',
    'evolutiva',
    'Carlos Linneo',
    'g&eacute;nero',
    'energ&iacute;a',
    'f&oacute;sil',
    'complejos',
    'hom&oacute;logas',
    'bi&oacute;sfera',
    'c&eacute;lulas',
    'tejidos',
    'especie'];
var anItemsCorrect = [8, 10, 1, 3, 12, 13, 14, 2, 15, 7, 6, 4, 5, 11, 9];
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