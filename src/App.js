
import Movies from './components/Movies';
import Hero from './components/Hero';
import './App.css';

function App() {
const myName = '' 

  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Movies/>
        <br/>
        {myName
        ?<p> Welcome back</p>
        :<p className='heller'>Please Login Above ⬆️</p>
      }
     <p >Hello {myName || 'Guest'}. </p>
      </header>
    </div>
  );
}

export default App;
