import React from "react";
import ReactDOM from 'react-dom/client'

function App(){

  return(
    <div>
      <h1>Hello Peanut</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)