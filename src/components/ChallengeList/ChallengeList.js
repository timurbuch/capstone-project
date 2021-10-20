import { StyledList } from '../PlayerList/PlayerList'
import ListItem from '../ListItem/ListItem'

const ChallengeList = ({ players, setPlayers }) => {
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
              age={player.age}
              wins={player.wins}
              losses={player.losses}
              challenged={player.challenged}
              players={players}
              setPlayers={setPlayers}
            />
          )
        })}
    </StyledList>
  )
}
export default ChallengeList
