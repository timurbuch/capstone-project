import PlayerList from './components/PlayerList/PlayerList'
import Nav from './components/Nav/Nav'
import ChallengeList from './components/ChallengeList/ChallengeList'
import ResultsList from './components/ResultsList/ResultsList'
import Profile from './components/Profile/Profile'
import playerData from './players.json'
import resultData from './results.json'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import useStateWithLocalStorage from './hooks/useStateWithLocalStorage'
import { nanoid } from 'nanoid'
import Header from './components/Header/Header'

const initialResults = resultData.resultData
const initialData = playerData.playerData

function App() {
  const [players, setPlayers] = useStateWithLocalStorage(
    initialData,
    'storedPlayers'
  )
  const [results, setResults] = useStateWithLocalStorage(
    initialResults,
    'storedResults'
  )

  const onResultSubmit = (opponent, submitResult) => {
    setResults([
      {
        id: nanoid(),
        player_1: 'User',
        player_2: opponent,
        result: submitResult,
      },
      ...results,
    ])
  }

  return (
    <Router>
      <Header />
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
