import PlayerList from './components/PlayerList/PlayerList'
import Nav from './components/Nav/Nav'
import ChallengeList from './components/ChallengeList/ChallengeList'
import ResultsList from './components/ResultsList/ResultsList'
import Profile from './components/Profile/Profile'
import playerData from './players.json'
import resultData from './results.json'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect, useState } from 'react'
import saveToLocal from './lib/saveToLocal'

const mockResults = resultData.resultData
const mockData = playerData.playerData
function App() {
  const [players, setPlayers] = useState(() => {
    if (localStorage.getItem('storedPlayers') === null) {
      return mockData
    } else {
      return JSON.parse(localStorage.getItem('storedPlayers'))
    }
  })
  useEffect(() => {
    saveToLocal('storedPlayers', players)
  }, [players])
  const [results, setResults] = useState(() => {
    if (localStorage.getItem('storedResults') === null) {
      return mockResults
    } else {
      return JSON.parse(localStorage.getItem('storedResults'))
    }
  })
  useEffect(() => {
    saveToLocal('storedResults', results)
  }, [results])

  const onResultSubmit = (opponent, submitResult) => {
    setResults([
      ...results,
      {
        player_1: 'User',
        player_2: opponent,
        result: submitResult,
      },
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
