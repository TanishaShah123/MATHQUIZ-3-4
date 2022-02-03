var actualanswer = "";
var question_turn = "p1";
var answer_turn = "p2";
player1_name = localStorage.getItem("p1namekey");
player2_name = localStorage.getItem("p2namekey");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    var no1 = document.getElementById("no1input").value;
    var no2 = document.getElementById("no2input").value;
    actualanswer = parseInt(no1) * parseInt(no2);
    var question = '<h4>' + no1 + 'x' + no2 + '</h4>';
    var answerinput = '<br> <input type="number" id="answerinput">';
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + answerinput + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1input").value = "";
    document.getElementById("no2input").value = "";
}

function check() {
    var userans = document.getElementById("answerinput").value;
    if (userans == actualanswer) {
        if (answer_turn == "p1") {
            player1_score = player1_score + 1;
            console.log(player1_score);
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        if (answer_turn == "p2") {
            player2_score = player2_score + 1;
            console.log(player2_score);
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        if (questionturn == "p1") {
            questionturn = "p2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
        }
        if (questionturn == "p2") {
            questionturn = "p1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
        }
        if (answerturn == "p1") {
            answerturn = "p2";
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
        }
        if (answerturn == "p2") {
            answerturn = "p1";
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
        }
    }
}