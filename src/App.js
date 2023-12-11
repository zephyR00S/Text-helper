import { useState , useEffect} from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import Alert from './Components/Alert';




function App() {
  const[mode,setMode]=useState({
    color: 'black',
    backgroundColor: 'white'
}); 

const[buttonText, setButtonText]= useState(
  "Enable dark mode"
)

const[alert, setAlert]= useState(null);

const showAlert= (message,type)=> {
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(() => {
    setAlert(null);
  }, 1500);

}

const toggleStyle = ()=>{
  if(mode.color === 'black'){
      setMode(
          {
              color: 'white',
              backgroundColor: 'black',
          }

      )

      setButtonText("Enable light mode");
      showAlert("Dark mode enabled", "success");
  }
  else {
     setMode({
          color: 'black',
          backgroundColor: 'white'
      }
  )

  setButtonText("Enable dark mode");
  showAlert("Light mode enabled", "success");
  }
 
}

useEffect(() => {
  // Apply styles to the body element when mode changes
  if(mode.backgroundColor === 'white'){
  document.body.style.color = mode.color;
  document.body.style.backgroundColor = mode.backgroundColor;}
  else{
    document.body.style.color = mode.color;
  document.body.style.backgroundColor = '#392b2b';
  }
}, [mode]);


const changegreen = ()=>{
  document.body.style.backgroundColor = '#35C649'
}
const changeyellow = ()=>{
  document.body.style.backgroundColor = '#CAB911'
}
const changered = ()=>{
  document.body.style.backgroundColor = '#C15031'
}



  return (
<>

    <Navbar title="Text Helper" mode= {mode} toggleStyle= {toggleStyle} buttonText = {buttonText}  changegreen={changegreen} 
    changered={changered} changeyellow={changeyellow} />
    <Alert alert = {alert}/>
    <div className="container my-3">
          <TextFrom showAlert ={showAlert} heading ="Enter your text to analyze"/>       
    </div>
</>
  );
}

export default App;
