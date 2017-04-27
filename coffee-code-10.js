// const doesnt change
const cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
const aliceDeck = ['A', '7', '8']
const bobDeck = ['A', '7', '8']

// let is something that can change
let bobScore = 0;
let aliceScore = 0;

function winner(deckAlice, deckBob) {
  for (var i = 0; i < 3; i++){
    if (cards.indexOf(aliceDeck[i]) > cards.indexOf(bobDeck)) {
      aliceScore += 1;
    } else {
      bobScore += 1;
    }
  }
  if (aliceScore > bobScore){
    return 'Alice wins $aliceScore to $bobScore'
  }
};
