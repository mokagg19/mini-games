var textItems = [
    ['want', 'wants', 'wanting', 'wanted', 'wanted'], 
['look', 'looks', 'looking', 'looked', 'looked'], 
['use', 'uses', 'using', 'used', 'used'], 
['work', 'works', 'working', 'worked', 'worked'], 
['call', 'calls', 'calling', 'called', 'called'], 
['try', 'tries', 'trying', 'tried', 'tried'], 
['ask', 'asks', 'asking', 'asked', 'asked'], 
['need', 'needs', 'needing', 'needed', 'needed'], 
['seem', 'seems', 'seeming', 'seemed', 'seemed'], 
['help', 'helps', 'helping', 'helped', 'helped'], 
['talk', 'talks', 'talking', 'talked', 'talked'], 
['turn', 'turns', 'turning', 'turned', 'turned'], 
['start', 'starts', 'starting', 'started', 'started'], 
['play', 'plays', 'playing', 'played', 'played'], 
['move', 'moves', 'moving', 'moved', 'moved'], 
['like', 'likes', 'liking', 'liked', 'liked'], 
['live', 'lives', 'living', 'lived', 'lived'], 
['believe', 'believes', 'believing', 'believed', 'believed'], 
['happen', 'happens', 'happening', 'happened', 'happened'], 
['provide', 'provides', 'providing', 'provided', 'provided'], 
['include', 'includes', 'including', 'included', 'included'], 
['continue', 'continues', 'continuing', 'continued', 'continued'], 
['change', 'changes', 'changing', 'changed', 'changed'], 
['watch', 'watches', 'watching', 'watched', 'watched'], 
['follow', 'follows', 'following', 'followed', 'followed'], 
['stop', 'stops', 'stopping', 'stopped', 'stopped'], 
['create', 'creates', 'creating', 'created', 'created'], 
['allow', 'allows', 'allowing', 'allowed', 'allowed'], 
['add', 'adds', 'adding', 'added', 'added'], 
['open', 'opens', 'opening', 'opened', 'opened'], 
['walk', 'walks', 'walking', 'walked', 'walked'], 
['offer', 'offers', 'offering', 'offered', 'offered'], 
['remember', 'remembers', 'remembering', 'remembered', 'remembered'], 
['love', 'loves', 'loving', 'loved', 'loved'], 
['consider', 'considers', 'considering', 'considered', 'considered'], 
['appear', 'appears', 'appearing', 'appeared', 'appeared'], 
['wait', 'waits', 'waiting', 'waited', 'waited'], 
['serve', 'serves', 'serving', 'served', 'served'], 
['die', 'dies', 'dying', 'died', 'died'], 
['expect', 'expects', 'expecting', 'expected', 'expected'], 
['stay', 'stays', 'staying', 'stayed', 'stayed'], 
['reach', 'reaches', 'reaching', 'reached', 'reached'], 
['kill', 'kills', 'killing', 'killed', 'killed'], 
['remain', 'remains', 'remaining', 'remained', 'remained'], 
['suggest', 'suggests', 'suggesting', 'suggested', 'suggested'], 
['raise', 'raises', 'raising', 'raised', 'raised'], 
['pass', 'passes', 'passing', 'passed', 'passed'], 
['require', 'requires', 'requiring', 'required', 'required'], 
['report', 'reports', 'reporting', 'reported', 'reported'], 
['decide', 'decides', 'deciding', 'decided', 'decide'], 
['pull', 'pulls', 'pulling', 'pulled', 'pulled'], 
['return', 'returns', 'returning', 'returned', 'returned'], 
['explain', 'explains', 'explaining', 'explained', 'explained'], 
['hope', 'hopes', 'hoping', 'hoped', 'hoped'], 
['develop', 'develops', 'developing', 'developed', 'developed'], 
['carry', 'carries', 'carrying', 'carried', 'carried'], 
['thank', 'thanks', 'thanking', 'thanked', 'thanked'], 
['receive', 'receives', 'receiving', 'received', 'received'], 
['join', 'joins', 'joining', 'joined', 'joined'], 
['agree', 'agrees', 'agreeing', 'agreed', 'agreed'], 
['pick', 'picks', 'picking', 'picked', 'picked'], 
['support', 'supports', 'supporting', 'supported', 'supported'], 
['end', 'ends', 'ending', 'ended', 'ended'], 
['base', 'bases', 'basing', 'based', 'based'], 
['produce', 'produces', 'producing', 'produced', 'produced'], 
['face', 'faces', 'facing', 'faced', 'faced'], 
['cover', 'covers', 'covering', 'covered', 'covered'], 
['describe', 'describes', 'describing', 'described', 'described'], 
['cause', 'causes', 'causing', 'caused', 'caused'], 
['point', 'points', 'pointing', 'pointed', 'pointed'], 
['listen', 'listens', 'listening', 'listened', 'listened'], 
['realize', 'realizes', 'realizing', 'realized', 'realized'], 
['place', 'places', 'placing', 'placed', 'placed'], 
['close', 'closes', 'closing', 'closed', 'closed'], 
['involve', 'involves', 'involving', 'involved', 'involve'], 
['increase', 'increases', 'increasing', 'increased', 'increased'], 
['fill', 'fills', 'filling', 'filled', 'filled'], 
['represent', 'represents', 'representing', 'represented', 'represented'], 
['focus', 'focuses', 'focusing', 'focused', 'focused'], 
['drop', 'drops', 'dropping', 'dropped', 'dropped'], 
['plan', 'plans', 'planning', 'planned', 'planned'], 
['push', 'pushes', 'pushing', 'pushed', 'pushed'], 
['reduce', 'reduces', 'reducing', 'reduced', 'reduced'], 
['note', 'notes', 'noting', 'noted', 'noted'], 
['enter', 'enters', 'entering', 'entered', 'entered'], 
['share', 'shares', 'sharing', 'shared', 'shared'], 
['save', 'saves', 'saving', 'saved', 'saved'], 
['protect', 'protects', 'protecting', 'protected', 'protected'], 
['occur', 'occurs', 'occurring', 'occurred', 'occurred'], 
['accept', 'accepts', 'accepting', 'accepted', 'accepted'], 
['identify', 'identifies', 'identifying', 'identified', 'identified'], 
['determine', 'determines', 'determining', 'determined', 'determined'], 
['prepare', 'prepares', 'preparing', 'prepared', 'prepared'], 
['argue', 'argues', 'arguing', 'argued', 'argued'], 
['recognize', 'recognizes', 'recognizing', 'recognized', 'recognized'], 
['indicate', 'indicates', 'indicating', 'indicated', 'indicated'], 
['wonder', 'wonders', 'wondering', 'wondered', 'wondered'], 
['lay', 'lays', 'laying', 'laid', 'laid'], 
['fail', 'fails', 'failing', 'failed', 'failed'], 
['arrive', 'arrives', 'arriving', 'arrived', 'arrived'], 
];
var pronouns = ['I', 'You', 'He', 'She', 'It', 'We', 'You (pl)', 'They'];
var pronounsquestions = [];
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

    //Select random pronouns
    while(pronounsquestions.length < 10){
        var r = Math.floor(Math.random() * pronouns.length-1) + 1;
        if(pronounsquestions.indexOf(r) === -1) pronounsquestions.push(pronouns[r]);
    };

    //Set right anwers
    for (var i = 0; i < arr.length; i++) {
        if (pronounsquestions[i] == pronouns[2] || pronounsquestions[i] == pronouns[3] || pronounsquestions[i] == pronouns[4]){
            if (anItemsCorrect.includes(textItems[arr[i]][1])) {
            } else {
                anItemsCorrect.push(textItems[arr[i]][1])
            }
        } else {
            if (anItemsCorrect.includes(textItems[arr[i]][0])) {
            } else {
                anItemsCorrect.push(textItems[arr[i]][0])
            }
        } 
    }

    //Set options per question
    for (var i = 0; i < arr.length; i++) {
        var option = [" ",];

        for (var e = 0; e < 2; e++) {
            if (anItems.includes(textItems[arr[i]][e])) {
            } else {
                option.push(textItems[arr[i]][e])
            }
        }
        anItems.push(option);
    }

    for (var i = 0; i < anItems.length; i++) {
        var option = [];

        for (var e = 0; e < anItems[i].length; e++) {
            option.push("<option>" + anItems[i][e] + "</option>")
        }
        optionslist.push(option);
    };
    
    //Prepare text
    for (var i = 0; i < arr.length; i++) {
        number = i + 1;
        text += "<p>" + number + ". " + pronounsquestions[i] + " <select id='dropdown" + [i] + "' class='dropdown'>" + optionslist[i][0] + optionslist[i][1] + optionslist[i][2] + "</select></p>"
    };
    
    document.getElementById("fillblank-text").innerHTML = '<p>' + text + '</p>';

}

setBoard();

function answer() {

    if (reset == false) {
        for (var i = 0; i < arr.length; i++) {
            number = i + 1;
            correctText += "<p>" + number + ". " + pronounsquestions[i] + " <span id='answer" + i + "' class=''>" + anItemsCorrect[i] + "</span></p>";
        };
    
        document.getElementById("respuesta").innerHTML = '<b>La respuesta correcta es:</b><p>' + correctText + '</p>';
    
        for (var i = 0; i < arr.length; i++) {
            var checkanswer = document.getElementById('dropdown' + i).selectedIndex;
            answers.push(checkanswer);
    
            if (answers[i] == [anItemsCorrect[i]]) {
                document.getElementById('answer' + i).classList.add("correct");
                correctAnswers++
            } else {
                document.getElementById('answer' + i).classList.add("incorrect");
                document.getElementById('answer' + i).innerHTML = "<span id='answer" + i + "' class='correct'><span class='incorrect strike'>" + anItems[i][answers[i]] + "</span> " + anItemsCorrect[i] + "</span>";
            }
    
        }
    
        if (correctAnswers == anItemsCorrect.length) {
            document.getElementById("solucion").innerHTML = "<p>&iexcl;Felicidades! Contestaste todas las preguntas correctamente</p>"
        } else if (0 < correctAnswers) {
            document.getElementById("solucion").innerHTML = "<p>Lograste " + correctAnswers + " respuestas correctas</p>"
        } else {
            document.getElementById("solucion").innerHTML = "<p>Sigue estudiando y vuelve a intentar</p>"
        }
        document.getElementById("answerButton").innerHTML = "Vuelve a empezar";
        reset = true;

    } else {    
       
        optionslist = [];
        text = "";
        correctText = "";
        answers = [];
        correctAnswers = 0;
        arr = [];
        anItems = [];
        anItemsCorrect = [];
        pronounsquestions = [];

        document.getElementById("fillblank-text").innerHTML = "";
        document.getElementById("respuesta").innerHTML = "";
        document.getElementById("solucion").innerHTML = "";

        reset = false;
        document.getElementById("answerButton").innerHTML = "Checa tus respuestas";
        setBoard();
    }

    
}