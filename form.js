document.getElementById("startGameForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const playerName = document.getElementById("playerName").value;
    localStorage.setItem("playerName", playerName);
    window.location.href = "doodlejump.html";
});
