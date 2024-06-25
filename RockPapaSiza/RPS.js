//Possibl Hand
const hands = ['rock' , 'paper', 'scissors'];

//Function to get a random hand from the array of hands
function getHand() {
    return hands[parseInt(Math.random()*10)%3];
} 

const player1 = {
    name: 'Dewey',
    getHand: getHand,
    Wins: 0,
};

const player2 = {
    name: 'Daylen',
    getHand: getHand,
    Wins: 0,

};

const player3 = {
    name: 'Justice',
    getHand: getHand,
    Wins: 0,

};

const player4 = {
    name: 'Ryan',
    getHand: getHand,
    Wins: 0,

};

let firstPlace = {};

//Function to play a round of rock, paper, scissors between two players and update their wins accordingly.
function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`${player1.name} played: ${hand1}`);
    console.log(`${player2.name} played: ${hand2}`);

    if (hand1 === hand2) {
        console.log('It\'s a tie!');
        return null;

    } else if ((hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')) {
        player1.Wins ++; 
        return console.log(`The winner is ${player1.name} ${player1.Wins} ${hand1}`);
    } else {
        player2.Wins ++;
        return console.log(`The winner is ${player2.name} ${player2.Wins} ${hand2}`);
    }
}

function playGame(player1, player2, playUntil) {
        while (player1.Wins < playUntil && player2.Wins < playUntil) {
            playRound (player1, player2);
            if (player1.Wins == playUntil){
                return player1;
            }  else if 
                (player2.Wins == playUntil){
                return player2;
        }


}
}

// Play a  tournamentbetween 4 different players and take the winners to move to the next round.
function playTournament(player1, player2, player3, player4, playUntil) { 
        let gameOneWin = playGame (player1, player2, 3);
        let gameTwoWin = playGame (player3, player4, 3);
        gameOneWin.Wins = 0;
        gameTwoWin.Wins = 0;
        firstPlace = playGame (gameOneWin, gameTwoWin, 3);
    return firstPlace;
}

// Play the tournament and announce the winner.

firstPlace = playTournament (player1, player2, player3, player4, 1);
    console.log(firstPlace.name + " is the world champion!")


        
        
