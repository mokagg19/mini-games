var textItems = [
    '<p>At the end of May we went to California in America. We stayed in the Hotel Irvine for four days which was a brilliant hotel and then we ',
    '  for a week which was also really cool. Grandpa has a cool house and he also has the Disney Channel, which we loved!</p><p>The first couple of days, we went to Del Taco. This is a Mexican restaurant like you\'ve never seen in England before. It has tacos, quesadillas (the soft ones) and it also has burritos. Del Taco was my favourite place to eat because it ',
    ' Mexican food. We also went to Rubio\'s (king of the fish taco) which is another Mexican restaurant. My sister BooJam went to a sandwich place called "Which Witch" and she ',
    '.</p><p>We went to Knottsberry Farm and I went on the Jaguar rollercoaster ride. My sister ',
    ' because she was too small. The queuing was very scary because it was in an Egyptian tomb, but the ride was really good. One of the rides ',
    '. It was a ride where you got to lie down and fly in Camp Snoopy. I loved it and so did my sister too. We also went on a ride where we bounced up and down and that was so much fun.</p><p>We ', 
    ' to look around. Our tour guide was Grandpa. We saw the Hollywood Sign, Mann\'s Chinese Theatre, the handprints in the concrete on the floor and the Hollywood Walk of Fame which ',
    ' on the floor. I saw the handprints of Daniel Radcliffe, Rupert Grint and Emma Watson. They are my favourite characters from Harry Potter.</p><p>Los Angeles has lots of swimming pools. We went in a swimming pool with diving boards and had lots of fun swimming around and diving.</p><p>We went to Newport Beach and I was swimming in the sea and there ',
    ' and I had to cling onto the sand as the wave washed over me. It really hurt but it was also cool at the same time. We also bought necklaces for each other.</p>'];
var anItems = [
    ' ',
    'went to Hollywood',
    'couldn\'t go on',
    'had delicious',
    'was closed',
    'had lots of stars',
    'stayed at our Grandpa\'s house',
    'had really big',
    'was this really big wave',
    'loved the food there',
    'was really cool'];
var anItemsCorrect = [6, 3, 9, 2, 10, 1, 5, 8];
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