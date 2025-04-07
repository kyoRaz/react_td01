import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/mbds.jpeg';
import './App.css'




function Header(){
  return (
    <header className="header-container">
      <img 
        src={logo}
        alt="Logo de la formation" 
        className="header-logo"
        style={{ width: '350px'  }}
      />
      <h1 className="header-title">Introduction à React</h1>
      <h2 className="header-subtitle">
        À la découverte des premières notions de React
      </h2>
    </header>
  );
}

const MainContent = () => {
  return (
    <main className="main-content">
      <p>Ici, nous afficherons des MainContentrmations intéressantes :) </p>
    </main>
  );
};


const Footer = () => {
  return (
    <footer className="footer">
      <p>Tous droits réservés - Steeve Peraly</p> 
    </footer>
  );
};


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <MainContent></MainContent>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer></Footer>
    </>
  )
}

export default App
