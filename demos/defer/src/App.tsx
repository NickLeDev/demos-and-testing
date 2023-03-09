import React, { useState } from 'react'
import Defer from '../../packages/shared/Defer';
import './App.css'
import DeferButton from "./DeferButton";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
       <div>
        <Defer loadingText={{ onLoad: "Chargement de votre compte", onLoaded: "Les informations du compte on été chargées"}} predicate={isLoading}
               fallback={<div>... Loading</div>}>
          <div>
            <h2>Votre compte</h2>
            <p>Nicolas Trudel</p>
            <p>Abonné depuis 2020</p>
          </div>
        </Defer>
      </div>

      <div style={{ marginTop: "50px" }}>
        <DeferButton predicate={isLoading} fallback={<span>...</span>} loadingText={{ onLoad: "Chargement du média", onLoaded: "Média prêt" }} onClick={() => {
          setIsLoading(!isLoading);
        }}>
          ▶️
        </DeferButton>
      </div>
    </div>
  )
}

export default App
