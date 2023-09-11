var textItems = [
    '<p><span class="numbers">1. </span>',
    '</p><p>Rose</p><p><span class="numbers">2. </span>',
    '</p><p>11</p><p><span class="numbers">3. </span>',
    '</p><p>Paris</p><p><span class="numbers">4. </span>',
    '</p><p>2345678</p><p><span class="numbers">5. </span>',
    '</p><p>purple</p><p><span class="numbers">6. </span>',
    '</p><p>No, I don\'t.</p><p><span class="numbers">7. </span>',
    '</p><p>Football</p><p><span class="numbers">8. </span>',
    '</p><p>Yes, I have 3 dogs.</p><p><span class="numbers">9. </span>',
    '</p><p>It\'s 11 o\'clock.</p><p><span class="numbers">10. </span>',
    '</p><p>History</p>'];
var anItems = [
    ' ',
    'Do you have any pets?',
    'Have you got sisters or brothers?',
    'How old are you?',
    'What\'s your favorite color?',
    'What\'s your favorite sport?',
    'What\'s your favorite subject at school?',
    'What\'s your name?',
    'What\'s the time?',
    'What\'s your telephone number?',
    'Where are you from?'];
var anItemsCorrect = [7, 3, 10, 9, 4, 2, 5, 1, 8, 6];
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