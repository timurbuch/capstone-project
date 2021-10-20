const setChallengeStatus = (players, name) => {
  const challengedPlayer = players.find(player => player.name === name)
  const status = challengedPlayer.challenged
  challengedPlayer.challenged = !status
}
export default setChallengeStatus
