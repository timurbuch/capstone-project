import PlayerList from './components/PlayerList/PlayerList'
import data from './data.json'

const mockData = data.data
function App() {
  return <PlayerList data={mockData} />
}

export default App
