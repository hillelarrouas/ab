import './App.css';
import React from "react";
import Timehtml from './Timehtml';
import Timehtml2 from './Timehtml';
import Cardtext from './Cardtext';
import TimerManagement from './TimerManagement';
import Error from './404';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


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
      <div className="cardnav-link"><Link className='nav-link' to="/Management"><div className="nav-linkdiv">ניהול טיימר</div></Link></div>
      <div className="home">
        <Timehtml2 text={'שולחן שמאל'} />
        <Timehtml text={'שולחן ימין'} />
      </div>
      <Cardtext />
    </>
  )
}

function Card() {
  return (
    <>
      <div className="cardnav-link"><Link className='nav-link' to="/"><div className="nav-linkdiv">טיימר</div></Link></div>
      <TimerManagement />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="cardto">
          <Switch>
            <Route path="/Management">
              <Card />
            </Route>
            <Route exact path="/">
              <Time />
            </Route>
            <Route >
              <Error />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
