import PlayerList from './components/PlayerList/PlayerList'
import players from './players.json'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

const mockData = players.players
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <PlayerList players={mockData} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
