const match = {
  maxPlayers: 4,
  roundTime: 60, // seconds
  minPlayersToStart: 2,
  votingTime: 30 // seconds
};

const scoring = {
  pointsPerWin: 10,
  pointsPerVote: 2,
  bonusPoints: {
    perfectScore: 5,
    quickResponse: 3
  }
};

module.exports = {
  match,
  scoring
};