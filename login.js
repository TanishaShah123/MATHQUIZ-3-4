function addUser(){
    var p1name=document.getElementById("player1_name_input").value;
    var p2name=document.getElementById("player2_name_input").value;

    localStorage.setItem("p1namekey",p1name);
    localStorage.setItem("p2namekey",p2name);
    window.location="game.html";
    
}