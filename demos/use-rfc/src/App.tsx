import './App.css'
import After from "./After";
import UserProvider from "./Contexts/UserContext";
import Before from './Before';

function App() {
  return (
    <div className="App">
      <UserProvider>
        {/**
          uncomment to see difference
          <Before />
        */}
        <After />
      </UserProvider>
    </div>
  )
}

export default App
