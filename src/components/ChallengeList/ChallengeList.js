import { StyledList } from '../PlayerList/PlayerList'
import ListItem from '../ListItem/ListItem'
import { useEffect } from 'react'

const ChallengeList = ({
  players,
  onPlayersChange,
  onResultSubmit,
  username,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StyledList>
      {players
        .filter(player => player.challenged)
        .map(player => {
          return (
            <ListItem
              key={player.id}
              name={player.name}
              img={player.img}
              wins={player.wins}
              losses={player.losses}
              challenged={player.challenged}
              players={players}
              onPlayersChange={onPlayersChange}
              onResultSubmit={onResultSubmit}
              username={username}
            />
          )
        })}
    </StyledList>
  )
}
export default ChallengeList
