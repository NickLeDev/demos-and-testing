import './App.css'
import UserProvider from "./Context/User.context";
import List from "./List";
import Simple from "./Simple";
import WithContext from "./WithContext";
import WithTurbo from "./WithTurbo";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <h1>Memo or not memo</h1>
        <Simple/>
        <List/>
        <WithContext />
        <WithTurbo />
      </UserProvider>
    </div>
  );
}

export default App
