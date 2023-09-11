var textItems = [
    '<p><span class="numbers">1. </span>',
    ' do you like best?</p><p><span class="numbers">2. </span>',
    ' does Bill get up in the morning?</p><p><span class="numbers">3. </span>',
    ' don\'t you go by bus, Max?</p><p><span class="numbers">4. </span>',
    ' hobbies does Andrew have?</p><p><span class="numbers">5. </span>',
    ' do they go to every week?</p><p><span class="numbers">6. </span>',
    ' old is Mike?</p><p><span class="numbers">7. </span>',
    ' is Susan\'s birthday?</p><p><span class="numbers">8. </span>',
    ' are my exercise books?</p><p><span class="numbers">9. </span>',
    ' are you doing at the moment, Sally?</p><p><span class="numbers">10. </span>',
    ' do the Robinsons live?</p>'];
var anItems = [
    ' ', 'How', 'What', 'When', 'Where', 'Why'];
var anItemsCorrect = [2, 3, 5, 2, 4, 1, 3, 4, 2, 1];
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
        console.log(correctText);
    };

    document.getElementById("respuesta").innerHTML = '<b>La respuesta correcta es:</b><p>' + correctText + textItems[textItems.length - 1] + '</p>';

    for (var i = 0; i < anItemsCorrect.length; i++) {
        var checkanswer = document.getElementById('dropdown' + i).selectedIndex;
        answers.push(checkanswer);
        console.log(answers);

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