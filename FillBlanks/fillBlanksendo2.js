var textItems = [
    '<p><span class="numbers">1. </span>',
    ' you write with a pencil?</p><p><span class="numbers">2. </span>',
    ' your father often make breakfast?</p><p><span class="numbers">3. </span>',
    ' your teachers always check your homework?</p><p><span class="numbers">4. </span>',
    ' you and your sister feed the pets?</p><p><span class="numbers">5. </span>',
    ' you upload pictures?</p><p><span class="numbers">6. </span>',
    ' your friend visit museums?</p><p><span class="numbers">7. </span>',
    ' your cats climb trees?</p><p><span class="numbers">8. </span>',
    ' you learn to cook at school?</p><p><span class="numbers">9. </span>',
    ' your sister play badminton?</p><p><span class="numbers">10. </span>',
    ' your grandparents go on holiday in winter?</p>'];
var anItems = [
    ' ', 'Do', 'Does'];
var anItemsCorrect = [1, 2, 1, 1, 1, 2, 1, 1, 2, 1];
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