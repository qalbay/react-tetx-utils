import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router, Switch, Route, Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const changeTheme = (event) => {
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value;
  }

  const showAlert = (alertMsg, type) => {
    setAlert({
      alertMsg: alertMsg,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      showAlert('Dark mode enabled', 'success');
      document.title = "Text Utils - Dark Mode";
    }
    else {
      setMode("light");
      showAlert('Light mode enabled', 'success');
      document.title = "Text Utils - Light Mode";

    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} changeTheme={changeTheme} />
      <Alert alert={alert} />

      {/* <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Form mode={mode} />
          </Route>
        </Switch>
      </Router> */}
      <Form mode={mode} />

    </>
  );
}

export default App;
