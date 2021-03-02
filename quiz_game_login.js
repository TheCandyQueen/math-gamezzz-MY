function addUser() {
    var player1_name = document.getElementById("player1_namezzzzah").value;
    var player2_name = document.getElementById("player2_namezzzzah").value;

    localStorage.setItem("player1", player1_name);
    localStorage.setItem("player2", player2_name);

    window.location.replace("quiz_game_page.html");
}