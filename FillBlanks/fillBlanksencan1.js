var textItems = [
'<p><span class="numbers">1.</span> In my first year as a teacher, I almost lost my self-confidence because I ',
' teach anything.</p><p><span class="numbers">2.</span> Mary tried hard to persuade her friend but she ',
' change her mind.</p><p><span class="numbers">3-4.</span> Bijan says he ',
' speak four languages but he ',
' talk to customers yesterday as he was a bit nervous.</p><p><span class="numbers">5.</span> Adan and her mother', 
' open the door because it was locked.</p><p><span class="numbers">6.</span> I ',
' finally talk to John after I tried to reach him on the phone for hours.</p><p><span class="numbers">7-8.</span> I ',
' never memorize all of the rules in the past, and I ',
' do it now either.</p><p><span class="numbers">9-10.</span> Mike was the only one who ',
' understand me, but now he ',
' either.</p><p><span class="numbers">11.</span> Before the nuclear disaster in the 1980\'s, people ', 
' grow everything in their gardens.</p><p><span class="numbers">12-13.</span> No matter how hard I try, I ',
' see the difference in the two pictures Susan says she ',
' easily see.</p><p><span class="numbers">14.</span> We ',
' choose our opponents. The teams will be matched randomly.</p>'];
var anItems = [
    ' ',
    'could',
    'couldn\'t',
    'can',
    'can\'t'];
var anItemsCorrect = [2, 2, 3, 2, 2, 1, 1, 4, 1, 4, 1, 4, 3, 4];
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