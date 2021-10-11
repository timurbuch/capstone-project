import PlayerList from './components/PlayerList/PlayerList'
const mockData = [
  { name: 'player 1', id: 1 },
  { name: 'player 2', id: 2 },
  { name: 'player 3', id: 3 },
  { name: 'player 4', id: 4 },
  { name: 'player 5', id: 5 },
  { name: 'player 6', id: 6 },
]

function App() {
  return (
    <div className="App">
      <PlayerList data={mockData} />
    </div>
  )
}

export default App
