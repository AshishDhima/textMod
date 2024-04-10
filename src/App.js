import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router,Routes, Route, BrowserRouter } from "react-router-dom";


// import About from './components/About';

function App() {
  const [mode, setmode]= useState('light');  //Switching 

  const[textColor,setTextColor]=useState('black');

  const[theme,setTheme]=useState('switch-1');
  
  // const [dim, setbeam] = useState('light'); // Dropdown headlight

  const [alert, setAlert]= useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    },1000);
    }

    // Bg-color of icon

    // Toggling mode

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#022647'; //#212529
      document.getElementById('Switchmd').style.color='white';
      setTextColor('white');
      showAlert("Dark mode has been enabled","success !");
      document.getElementById('switch-3').style.backgroundColor='#FF204E';
      document.getElementById('switch-3').style.borderRadius='15px';
      document.getElementById('switch-2').style.backgroundColor='#15F5BA';
      document.getElementById('switch-2').style.borderRadius='20px';
      document.title='textMod - Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='White';
      setTextColor('black');
      document.getElementById('Switchmd').style.color='black';
      showAlert("Light mode has been enabled","success !");
      document.getElementById('switch-3').style.backgroundColor='white';
      document.getElementById('switch-2').style.backgroundColor='#FFC700';
      document.getElementById('switch-2').style.color='black';
      document.title='textMod - Light Mode';
    }
  }

  const Moon=()=>{
    // let newTheme=document.getElementsByClassName('switch-3');
    // // etTheme(newTheme);
    document.body.style.backgroundColor='black';
    const newColor = textColor === 'black'?'white':'white';
    setTextColor(newColor);
    showAlert("Moon mode has been Activated","success !");
  }
  const light=()=>{
    let newTheme=document.getElementsByClassName('switch-1');
    setTheme(newTheme);
    document.body.style.backgroundColor='White';
    const newColor = textColor === 'black';
    setTextColor(newColor);
    console.log(newColor); 
    showAlert("Light mode has been enabled","success !");
  }
  const drl=()=>{
    let newTheme=document.getElementsByClassName('switch-2');
    setTheme(newTheme);
    document.body.style.backgroundColor='#15F5BA';
    const newColor = textColor === 'black';
    setTextColor(newColor);
    console.log(newColor); 
    showAlert("DRL mode has been enabled","success !");
  }
  const earth=()=>{
    let newTheme=document.getElementsByClassName('switch-4');
    setTheme(newTheme);
    document.body.style.backgroundColor='#836FFF';
    const newColor = textColor === 'black'?'white':'white';
    setTextColor(newColor);
    console.log(newColor); 
    showAlert("Earth mode has been enabled","success !");
  }  


  return (
    <>
        {/*mode={mode} toggleMode={toggleMode}*/}  
    {/* <Router> */}
          {/* <Routes>
        <Route exact path='/home' element={}
        <Route exact path='/about' element=/>{} 
      </Routes>
      </div>
    </Router> */}
    <Navbar title="textMod" search="Search" toggleMode={toggleMode} mode={mode} Moon={Moon} light={light} drl={drl} earth={earth} />
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Form showAlert={showAlert} heading="Write here to analyze" mode={mode} textColor={textColor}/>    
    {/* <About/>        */}
    </div>
    </>
  );
}

export default App;
