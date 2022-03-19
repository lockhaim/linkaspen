import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Ian Lockhart's LinkAspen!</h1>
        <img className="main" src='https://media-exp1.licdn.com/dms/image/D5635AQGdJkjMyLDA9g/profile-framedphoto-shrink_200_200/0/1638893979703?e=1647637200&v=beta&t=sB8HDWnOabOtD0dUpqWFcJnUzSqyWF8H97EdQ-HK3Xo'></img>
        <div className='main-links-container'>
          <a className='main-links'>Portfolio</a>
          <a className='main-links'>Dota 2 Stat Tracker</a>
          <a className='main-links'>OnlyJams</a>
          <a className='main-links'>Culinary REACT-ions</a>
          <a className='main-links'>Angular Shop</a>
        </div>
        <div className='socials-container'>
          <a src='https://www.linkedin.com/in/ian-lockhart-/' alt= className='socials-links'>LinkedIn</a>
          <a src='github.com/lockhaim/' className='socials-links'>Github</a>
        </div>
    </div>
  );
}

export default App;
