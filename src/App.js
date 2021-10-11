import PlayerList from './components/PlayerList/PlayerList'
import data from './data.json'
import GlobalStyle from './GlobalStyles/GlobalStyles'

const mockData = data.data
function App() {
  return (
    <>
      <GlobalStyle />
      <PlayerList data={mockData} />
    </>
  )
}

export default App
