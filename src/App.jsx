import { Counter } from './components/counter/Counter'
import './App.scss'
import { UserCard } from './components/card/UserCard'

const App = () => {
  return (
    <div className="App">
      <Counter />
      <UserCard />
    </div>
  )
}

export default App
