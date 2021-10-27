const EloRank = require('elo-rank')

const elo = new EloRank(28)

const eloRater = (winner, loser) => {
  var expectedScoreA = elo.getExpected(winner, loser)
  var expectedScoreB = elo.getExpected(loser, winner)
  winner = elo.updateRating(expectedScoreA, 1, winner)
  loser = elo.updateRating(expectedScoreB, 0, loser)
  return { winner, loser }
}

export default eloRater
