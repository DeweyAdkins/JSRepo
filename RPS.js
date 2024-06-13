const hands = ['rock' , 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random()*10)%3]
} 

const player1 = {
    name: 'Dewey',
    getHand: getHand
};

const player2 = {
    name: 'Friend',
    getHand: getHand
};

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`Dewey played: ${hand1}`);
    console.log(`Friend played: ${hand2}`);

    if (hand1 === hand2) {
        console.log('It\'s a tie!');
        return null;

    } else if ((hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')) {
        return console.log(`The winner is dewey ${hand1}`);
    } else {
        return console.log(`The winner is Friend ${hand2}`);
    }
}

playRound(player1, player2)
            
        
