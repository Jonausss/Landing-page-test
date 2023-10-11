function RollDice(diceNumber) {
    console.log("RollDice("+diceNumber+");")
    var diceImg = document.getElementById("d"+diceNumber+"Img");
    diceImg.style.transform = "rotate(+360deg)";
}