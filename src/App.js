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
      document.body.style.backgroundColor = 'rgb(2, 14, 30)';
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

  const [blackText, setBlackText] = useState('Enable Black Mode');


  const blackMode = () => {
      if (mode === 'dark') {
        if (document.body.style.backgroundColor === 'rgb(2, 14, 30)') {
          document.body.style.backgroundColor = 'black';
          setBlackText('Disable Black Mode');
          showAlert("Black Mode Enabled", "success");
        }
        else {
          document.body.style.backgroundColor = 'rgb(2, 14, 30)';
          setBlackText('Enable Black Mode');
          showAlert("Black Mode Disabled", "success");
        }
      }
  }


  return (
    <>
      {/* <Navbar title= "TextUtils" aboutText = "About"/> */}
      {/* <Navbar/> */}

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} blackText={blackText} blackMode={blackMode} toggleMode={toggleMode} text={dark} />
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
              <About mode={mode} />
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
