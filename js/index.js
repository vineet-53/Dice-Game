function randomNumberGenerator() {
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    return randomNumber;
}
function toggleChooseWinner() {
    // accessing the container class element
    var winner = document.getElementById("container");


    // generating the random no for different players 
    playerNumber1 = randomNumberGenerator();
    playerNumber2 = randomNumberGenerator();



    // creating address of img src attribute 
    var randomImageSource1 = "images/dice"+playerNumber1+".png";
    var randomImageSource2 = "images/dice"+playerNumber2+".png";


    // getting and setting the src attribute in img 
    var imageSrc = document.querySelectorAll("img")[0];
    imageSrc.setAttribute("src"  , randomImageSource1);
    var imageSrc = document.querySelectorAll("img")[1];
    imageSrc.setAttribute("src"  , randomImageSource2);


    // naming the choices of random generated for game paying by computer
    console.log("player 1 no is : " + playerNumber1);
    console.log("player 2 no is : " + playerNumber2);


    // condition for the game Winning
    if (playerNumber1 < playerNumber2) {
        winner.innerHTML = ("<h1>Player 2 wins </h1>")

    }
    else if (playerNumber1 > playerNumber2) {
        winner.innerHTML = ("<h1>Player 1 wins </h1>")
    } else {
        winner.innerHTML = ("<h1>Game Draws  </h1> ")
    }



    // if condition for checking the winner in player no 
}