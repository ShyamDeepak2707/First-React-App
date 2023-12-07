import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  const [dark, setDark] = useState('Enable Dark Mode');

  const [mode, setMode] = useState('light');


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setDark('Disable Dark Mode');
      showAlert("Dark mode Enabled", "success");
      // setInterval(() => {
      //   document.title = 'Install Text-Utils Now'
      // }, 1500);

      // setInterval(() => {
      //   document.title = 'Text-Utils is Amazing!!'
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setDark('Enable Dark Mode')
      showAlert("Dark mode Disabled", "success");
    }
  }

  const [blueText, setBlueText] = useState('Enable Bluish Mode');


  const bluishMode = () => {
    if (mode === 'dark') {
      if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = '#020e1e';
        setBlueText('Disable Bluish Mode');
        showAlert("Bluish mode Enabled", "success")
      }

      else {
        document.body.style.backgroundColor = 'black';
        setBlueText('Enable Bluish Mode');
        showAlert("Bluish mode Disabled", "success")
      }
    }
  }


  return (
    <>
      {/* <Navbar title= "TextUtils" aboutText = "About"/> */}
      {/* <Navbar/> */}

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} blueText={blueText} bluishMode={bluishMode} toggleMode={toggleMode} text={dark} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='First-React-App/' element=
          {
            <div className="container my-5">
              <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
            </div>
          } />
          <Route exact path='First-React-App/about' element=
          {
            <div className="container my-5">
              <About />
            </div>
          } />
        </Routes>
      </BrowserRouter>

      {/* <Alert alert={alert} /> */}
      {/* <div className="container my-5"> */}
      {/* <About /> */}
      {/* <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} /> */}
      {/* </div> */}

    </>
  );
}

export default App;
