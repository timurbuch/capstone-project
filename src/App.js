import PlayerList from './components/PlayerList/PlayerList'
import Nav from './components/Nav/Nav'
import ChallengeList from './components/ChallengeList/ChallengeList'
import ResultsList from './components/ResultsList/ResultsList'
import Profile from './components/Profile/Profile'
import playerData from './players.json'
import resultData from './results.json'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import useStateWithLocalStorage from './lib/useStateWithLocalStorage.js'

const mockResults = resultData.resultData
const mockData = playerData.playerData
function App() {
  const [players, setPlayers] = useStateWithLocalStorage(
    mockData,
    'storedPlayers'
  )
  const [results, setResults] = useStateWithLocalStorage(
    mockResults,
    'storedResults'
  )

  const onResultSubmit = (opponent, submitResult) => {
    setResults([
      {
        id: results.length,
        player_1: 'User',
        player_2: opponent,
        result: submitResult,
      },
      ...results,
    ])
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PlayerList
            players={players}
            setPlayers={setPlayers}
            onResultSubmit={onResultSubmit}
          />
        </Route>
        <Route path="/challenge">
          <ChallengeList
            players={players}
            setPlayers={setPlayers}
            onResultSubmit={onResultSubmit}
          />
        </Route>
        <Route path="/results">
          <ResultsList results={results} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Nav />
    </Router>
  )
}

export default App
