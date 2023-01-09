
import './App.css';
import Header from "./mycomponents/header";
import TextForm from "./mycomponents/TextForm";
import About from "./mycomponents/About";
import Alert from "./mycomponents/Alert";
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() { 
  const[mode,setMode] = useState('light');

  
const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({ 
    msg : message,


    type : type
    })
setTimeout(() => {
  setAlert(null);
},3000);
  
}
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      showAlert("dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
  }
  return (
    <>
     {/* <TextForm showAlert={showAlert} heading="enter the text to analyze" mode={mode}/>
    <About heading="About Us"/> */}
   <Router>
    <Header title="Text Util" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3 '>
   
    <Routes>
          <Route exact path="/about" element={<About heading="About Us"/>}/>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="enter the text to analyze" mode={mode}/>}/>
        </Routes>
    </div>
  </Router>   
    </> 
  ); 
}

export default App;
  