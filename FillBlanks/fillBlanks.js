var textItems = ['Start of your text ', '. text continues ', '. text continues here ', ', ... and here ', ' and here it ends.'];
        var anItems = ['Answer1', 'Answer2', 'Answer3', 'Answer4', 'Answer5', 'Answer6', 'Answer7'];
        var anItemsCorrect = [2, 1, 4, 6];
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

            for (var i = 0; i < textItems.length - 1; i++) {
                correctText += textItems[i] + "<span id='answer" + i + "' class=''>" + anItems[anItemsCorrect[i]] + "</span>";
            };

            document.getElementById("respuesta").innerHTML = '<p>' + correctText + textItems[textItems.length - 1] + '</p>';

            for (var i = 0; i < anItemsCorrect.length; i++) {
                var checkanswer = document.getElementById('dropdown' + i).value;
                answers.push(checkanswer);

                if (answers[i] == anItems[anItemsCorrect[i]]) {
                    document.getElementById('answer' + i).classList.add("correct");
                    correctAnswers++
                } else {
                    document.getElementById('answer' + i).classList.add("incorrect");
                    document.getElementById('answer' + i).innerHTML = "<span id='answer" + i + "' class='correct'> <span class='incorrect strike'>" + answers[i] + "</span> " + anItems[anItemsCorrect[i]] + "</span>";
                }
            }

            if (correctAnswers == anItemsCorrect.length) {
                document.getElementById("solucion").innerHTML = "<p>&iexcl;Felicidades! Contestaste todas las preguntas correctamente</p>"
            } else if (0 < correctAnswers) {
                document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
            } else {
                document.getElementById("solucion").innerHTML = "<p>Vuelve a intentar</p>"
            }
            document.getElementById("answerButton").style.display = "none";
        }