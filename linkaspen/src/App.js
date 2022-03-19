import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Ian Lockhart's LinkAspen!</h1>
        <img className="main" src='https://media-exp1.licdn.com/dms/image/D5635AQGdJkjMyLDA9g/profile-framedphoto-shrink_200_200/0/1638893979703?e=1647637200&v=beta&t=sB8HDWnOabOtD0dUpqWFcJnUzSqyWF8H97EdQ-HK3Xo'></img>
        <div className='main-links-container'>
          <a src=' https://ian-lockhart-portfolio.netlify.app/'     className='main-links'>Portfolio</a>
          <a src='https://github.com/lockhaim/Final_Angular_FE' className='main-links'>Angular Shop</a>
          <a src='https://project-3-front-end-seir.herokuapp.com/' className='main-links'>Culinary REACT-ions</a>
          <a src='https://lockhaim-project-2.herokuapp.com/onlyjams' className='main-links'>OnlyJams</a>
          <a src='https://dota2-stat-tracker-poc.netlify.app/' className='main-links'>Dota 2 Stat Tracker</a>

        </div>
        <div className='socials-container'>
          <a src='https://www.linkedin.com/in/ian-lockhart-/' alt= className='socials-links'>LinkedIn</a>
          <a src='github.com/lockhaim/' className='socials-links'>Github</a>
        </div>
    </div>
  );
}

export default App;
