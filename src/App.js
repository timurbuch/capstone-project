import PlayerList from './components/PlayerList/PlayerList'
import players from './players.json'

const mockData = players.players
function App() {
  return <PlayerList players={mockData} />
}

export default App
