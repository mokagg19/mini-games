var textItems = [
    ['He ','loves',' to play basketball everyday.','present','to love'],
    ['He ','goes',' to school in the afternoon.','present','to go'],
    ['','Does',' he still go to school?','present','to do'],
    ['She ','writes',' an e-mail to her best friend every friday.','present','to write'],
    ['He ','thinks',' he is very handsome.','present','to think'],
    ['It usually ','rains',' every day here.','present','to rain'],
    ['It ','smells',' very delicious in the kitchen. What are you cooking?','present','to smell'],
    ['We generally ','sing',' songs all together.','present','to sing'],
    ['We ','go',' to a gallery every Sunday.','present','to go'],
    ['','Does',' he write an email?','present','to do'],
    ['The sun ','rises',' at the east.','present','to rise'],
    ['She ','goes',' to work by car.','present','to go'],
    ['It ','doesn\'t',' rain here in the summer.','present','to do - negative'],
    ['We ','cook',' rice every day.','present','to cook'],
    ['We ','go',' to the gym club together.','present','to go'],
    ['You ','have',' a big house.','present','to have'],
    ['','Do',' we know each other?','present','to do'],
    ['They ','sleep',' in the afternoon.','present','to sleep'],
    ['When ','do',' they usually talk to each other?','present','to do'],
    ['The children ','are',' at home.','present','to be'],
    ['The earth ','goes',' round the sun.','present','to go'],
    ['George ','brushes',' his teeth twice a day.','present','to brush'],
    ['He ','gets',' up early every day.','present','to get'],
    ['They ','speak',' English in USA.','present','to speak'],
    ['I ','like',' reading detective stories.','present','to like'],
    ['I ','like',' geography and science.','present','to like'],
    ['She ','doesn\'t',' study German on Monday.','present','to do - negative'],
    ['','Does',' she live in Paris?','present','to do'],
    ['He ','doesn\'t',' teach math.','present','to do - negative'],
    ['Cats ','hate',' water.','present','to hate'],
    ['Every child ','likes',' an ice cream.','present','to like'],
    ['My mother never ','lies','.','present','to lie'],
    ['The Earth ','is',' spherical.','present','to be'],
    ['She ','doesn\'t',' use a computer.','present','to do - negative'],
    ['It ','snows',' a lot in winter in Russia.','present','to snow'],
    ['We ','live',' in Texas.','present','to live'],
    ['You ','go',' to holiday every summer.','present','to go'],
    ['','Do',' you like spaghetti?','present','to do'],
    ['My daughter ','does',' the laundry.','present','to do'],
    ['My brother ','takes',' out the trash.','present','to take'],
    ['The course ','starts',' next Sunday.','present','to start'],
    ['She ','swims',' every morning.','present','to swim'],
    ['I ','don\'t',' wash the dishes.','present','to do - negative'],
    ['We ','see',' them every week.','present','to see'],
    ['I ','don\'t',' like tea.','present','to do - negative'],
    ['When ','does',' the train usually leave?','present','to do'],
    ['She always ','forgets',' her purse.','present','to forget'],
    ['You ','don\'t',' have children.','present','to do - negative'],
    ['I and my sister ','don\'t',' see each other anymore.','present','to do - negative'],
    ['They ','don\'t',' go to school tomorrow.','present','to do - negative'],

];


var anItems = [];
var anItemsCorrect = [];
var optionslist = [];
var text = "";
var correctText = "";
var answers = [];
var correctAnswers = 0;
var reset = false;

var arr = [];


function setBoard() {
    //set random numbers in an array
    while(arr.length < 10){
        var r = Math.floor(Math.random() * textItems.length-1) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    };
    
    //Prepare text
    for (var i = 0; i < arr.length; i++) {
        number = i + 1;
        text += "<p><span class='numbers'>" + number + ".</span> " + textItems[arr[i]][0] + '<span class="cursive">(' + textItems[arr[i]][4] +  ')</span> ' + '<input type="text" id="answerText' + [i] + '" name="answerText' + [i] + '"></input>' + textItems[arr[i]][2] + "</p>"
    };
    
    document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';

    for (var i = 0; i < arr.length; i++) {

        document.getElementById("answerText"+i).value = "";
    }

}

setBoard();

function answer() {
    if (reset == false) {

        for (var i = 0; i < arr.length; i++) {
            anItems.push(document.getElementById("answerText"+i).value);
            number = i + 1;
            correctText += "<p><span class='numbers'>" + number + ".</span> " + textItems[arr[i]][0] + " <span id='answer" + i + "' class=''>" + textItems[arr[i]][1] + "</span>" + textItems[arr[i]][2] + "</p>"
        };
    
        document.getElementById("respuesta").innerHTML = '<b>La respuesta correcta es:</b><p>' + correctText + '</p>';
    
        for (var i = 0; i < arr.length; i++) {
            
            var answer = anItems[i].localeCompare(textItems[arr[i]][1], 'en', { sensitivity: 'base' });

            if (answer == 0) {
                document.getElementById('answer' + i).classList.add("correct");
                correctAnswers++
            } else {
                document.getElementById('answer' + i).classList.add("incorrect");
            }
            
            /*if (document.getElementById("answerText"+i).value == textItems[arr[i]][1]) {
                document.getElementById('answer' + i).classList.add("correct");
                correctAnswers++
            } else {
                document.getElementById('answer' + i).classList.add("incorrect");
            }*/
    
        }
    
        if (correctAnswers == 10) {
            document.getElementById("solucion").innerHTML = "<p>&iexcl;Felicidades! Contestaste todas las preguntas correctamente</p>"
        } else if (0 < 10) {
            document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
        } else {
            document.getElementById("solucion").innerHTML = "<p>Sigue estudiando y vuelve a intentar</p>"
        }
        document.getElementById("answerButton").innerHTML = "Vuelve a empezar";
        reset = true;
        document.getElementById("fillblank-text").style.display = "none";

    } else {    
       
        optionslist = [];
        text = "";
        correctText = "";
        answers = [];
        correctAnswers = 0;
        arr = [];
        anItems = [];
        anItemsCorrect = [];

        document.getElementById("fillblank-text").innerHTML = "";
        document.getElementById("respuesta").innerHTML = "";
        document.getElementById("solucion").innerHTML = "";
        document.getElementById("fillblank-text").style.display = "block";

        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();
    }

    
}