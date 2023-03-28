import './App.css'
import Card from "./components/Card";
import PropsProvider from "./contexts/ContextProps";

function App() {
  return (
    <div className="App">
      <PropsProvider>
        <Card />
      </PropsProvider>
    </div>
  )
}

export default App
