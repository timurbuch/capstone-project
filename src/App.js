import PlayerList from './components/PlayerList/PlayerList'
import Nav from './components/Nav/Nav'
import ChallengeList from './components/ChallengeList/ChallengeList'
import ResultsList from './components/ResultsList/ResultsList'
import Profile from './components/Profile/Profile'
import playerData from './players.json'
import resultData from './results.json'
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import useStateWithLocalStorage from './hooks/useStateWithLocalStorage'
import { nanoid } from 'nanoid'
import Header from './components/Header/Header'
import LoginForm from './components/LoginForm/LoginForm'

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
  const [username, setUsername] = useStateWithLocalStorage('', 'storedUser')

  const onUserSubmit = userName => {
    setUsername(userName)
    setPlayers([
      ...players,
      {
        id: nanoid(),
        name: userName,
        age: '???',
        img: 'https://picsum.photos/200',
        wins: 0,
        losses: 0,
        rating: 200,
        challenged: false,
      },
    ])
  }
  const onResultSubmit = (opponent, submitResult) => {
    setResults([
      {
        id: nanoid(),
        player_1: username,
        player_2: opponent,
        result: submitResult,
      },
      ...results,
    ])
  }

  return (
    <Router>
      <Route exact path={['/playerlist', '/challenge', '/results', '/profile']}>
        <Header />
      </Route>
      <Switch>
        <Route exact path="/">
          {username ? (
            <Redirect to="/playerlist" />
          ) : (
            <LoginForm onUserSubmit={onUserSubmit} />
          )}
        </Route>
        <Route exact path="/playerlist">
          {!username ? (
            <Redirect to="/" />
          ) : (
            <PlayerList
              players={players}
              setPlayers={setPlayers}
              onResultSubmit={onResultSubmit}
              username={username}
            />
          )}
        </Route>
        <Route path="/challenge">
          {!username ? (
            <Redirect to="/" />
          ) : (
            <ChallengeList
              players={players}
              setPlayers={setPlayers}
              onResultSubmit={onResultSubmit}
              username={username}
            />
          )}
        </Route>
        <Route path="/results">
          {!username ? <Redirect to="/" /> : <ResultsList results={results} />}
        </Route>
        <Route path="/profile">
          {!username ? <Redirect to="/" /> : <Profile user={username} />}
        </Route>
      </Switch>
      <Route exact path={['/playerlist', '/challenge', '/results', '/profile']}>
        <Nav />
      </Route>
    </Router>
  )
}

export default App
