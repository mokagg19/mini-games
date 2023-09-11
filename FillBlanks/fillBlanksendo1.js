var textItems = [
    '<p><span class="numbers">1. </span>My mother has ',
    ' the shopping.</p><p><span class="numbers">2. </span>Walter ',
    ' fly to Rome, he flies to Venice.</p><p><span class="numbers">3. </span>',
    ' you always recycle inkjet cartridges?</p><p><span class="numbers">4. </span>',
    ' drink and drive.</p><p><span class="numbers">5.</span> When ',
    ' the first lesson start at your school?</p><p><span class="numbers">6. </span>Yesterday Rick ',
    ' forget his homework.</p><p><span class="numbers">7.</span> What have you ',
    ' with your money, Jack?</p><p><span class="numbers">8.</span> Last week we ',
    ' write a test.</p><p><span class="numbers">9.</span> ',
    ' Amy come to school by bike this morning?</p><p><span class="numbers">10. </span>Have you ever ',
    ' anything silly?</p>'];
var anItems = [
    ' ',
    'do', 'don\'t', 'does', 'doesn\'t', 'did', 'didn\'t', 'done'];
var anItemsCorrect = [7, 4, 1, 2, 3, 6, 7, 6, 5, 7];
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
var string2 = 'energía';
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