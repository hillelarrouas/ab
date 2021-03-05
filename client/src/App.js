import './App.css';
import React, { useEffect } from "react";
import Login from './login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="cardmnue">
          <div className="nav-linkdiv">
            <Link className='nav-link' to="/">דף הבית</Link>
          </div>
          <div className="nav-linkdiv">
            <Link className='nav-link' to="/move">חיפוש סרט</Link>
          </div>
        </div>
        <div className="cardto">
          <Switch>
            <Route path="/move">
              <Move />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}


const Home = () => {
  return (
    <div className="home">
      <div className="home-text">React - האתר הראשון שלי ב</div>
    </div>
  )
}



function Move() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
