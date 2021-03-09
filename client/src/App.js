import './App.css';
import React from "react";
import Timehtml from './Timehtml';
import Cardtext from './Cardtext';
import TimerManagement from './TimerManagement';

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
        <div className="cardto">
          <Switch>
            <Route path="/Management">
              <Card />
            </Route>
            <Route path="/">
              <Time />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}
// console.log('ll')

// let array = []
// fetch('/getdata')
//   .then(r => r.json())
//   .then(d => {
//     d.deta.forEach(element => {
//       array.push(element)
//     });
//   })

const Time = () => {
  return (
    <>
      <Link className='nav-link' to="/Management"><div className="nav-linkdiv">ניהול טיימר</div></Link>
      <div className="home">
        <Timehtml text={'שולחן שמאל'} />
        <Timehtml text={'שולחן ימין'} />
      </div>
      <Cardtext />
    </>
  )
}

function Card() {
  return (
    <>
      <Link className='nav-link' to="/"><div className="nav-linkdiv">טיימר</div></Link>
      <TimerManagement />
    </>
  );
}

export default App;
