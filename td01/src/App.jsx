import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/mbds.jpeg';
import './App.css'
import './header.css'
import data from '../../data.json';



function Header(){

  const handleMenuClick = (item) => {
    alert(`Vous avez cliqué sur ${item}`);
  };


  return (
    <header className="header-container">
      <div className="menu-container">
        <ul className="menu">
          <li className="menu-item" onClick={() => handleMenuClick('Notes')}>Notes</li>
          <li className="menu-item" onClick={() => handleMenuClick('Étudiants')}>Étudiants</li>
          <li className="menu-item" onClick={() => handleMenuClick('Matières')}>Matières</li>
          <li className="menu-item" onClick={() => handleMenuClick('À propos')}>À propos</li>
        </ul>
      </div>

      <div className="logo-container">
        <img
          src={logo}
          alt="Logo de la formation"
          className="header-logo"
        />
      </div>

      <div className="header-text">
        <h1 className="header-title">Introduction à React</h1>
        <h2 className="header-subtitle">À la découverte des premières notions de React</h2>
      </div>
    </header>
  );
}

const trierListe = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));  
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
};

const getDataTrier =() =>{
  let dataTrier=trierListe(data);
  return dataTrier ;
}

const Element = () => {
  let data = getDataTrier();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table border="1">
        <thead>
          <tr>
            <th>Unique ID</th>
            <th>Course</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Student ID</th>
            <th>Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elt, index) => (
            <tr key={index}>
              <td>{elt.unique_id}</td>
              <td>{elt.course}</td>
              <td>{elt.student.firstname}</td>
              <td>{elt.student.lastname}</td>
              <td>{elt.student.id}</td>
              <td>{elt.date}</td>
              <td>{elt.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MainContent = () => {

  const now = new Date();

    const date = now.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const time = now.toLocaleTimeString('fr-FR');

  return (
    <main className="main-content">
      <p>Bonjour, on est le {date} et il est {time}</p>
      <br />
      <Element></Element>
    </main>
  );
};





const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {currentYear} - Steeve Peraly , Tous droits réservés</p> 
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
