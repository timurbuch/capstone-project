import PlayerList from './components/PlayerList/PlayerList'
import Nav from './components/Nav/Nav'
import ChallengeList from './components/ChallengeList/ChallengeList'
import ResultsList from './components/ResultsList/ResultsList'
import Profile from './components/Profile/Profile'
import players from './players.json'
import results from './results.json'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

const mockResults = results.results
const mockData = players.players
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PlayerList players={mockData} />
        </Route>
        <Route path="/challenge">
          <ChallengeList players={mockData} />
        </Route>
        <Route path="/results">
          <ResultsList results={mockResults} />
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
