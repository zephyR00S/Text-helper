import React, { useState } from 'react';

export default function TextFrom(props) {

    const [text, setText] = useState('Enter your text here');



    const handleUpClick = ()=>{
            console.log("Uppercase was clicked");
            if (text.trim() === '') {
                props.showAlert("Please enter some text", "danger");
                return;
            }
            
            let newText = text.toUpperCase();

            
            setText(newText);
            props.showAlert("Converted to uppercase","success");

    }
    const handleLowClick = ()=>{
        console.log("Lowercase was clicked");
        if (text.trim() === '') {
            props.showAlert("Please enter some text", "danger");
            return;
        }

        let newText = text.toLowerCase();



        setText(newText);
        props.showAlert("Converted to lowercase","success");


    }
    const handleOnChange = (event)=>{
      console.log("On change");
      setText(event.target.value);
    }

    const speak = () => {
        if (text.trim() === '') {
            props.showAlert("Please enter some text", "danger");
            return;
        }

        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking","success");

      }

      const copyText = () => {
        if (text.trim() === '') {
            props.showAlert("Nothing to copy. Please enter some text", "danger");
            return;
        }

        var texta = document.getElementById('myBox')
        texta.select();
        navigator.clipboard.writeText(texta.value);
        props.showAlert("Copied","success");


 }





  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="10" value = {text} onChange={handleOnChange}></textarea>       
        </div>
    

        <button className="btn btn-secondary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-warning mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button type="submit" onClick={speak} className="btn btn-info mx-2 my-2">Speak</button>
        <button className="btn btn-danger mx-2" onClick={copyText}>Copy</button>
  
    </div>

    <div className="container pt-3">
        <h1>Your text summary</h1>
        <hr></hr>
        <p>{text.split(/\s+/).filter((element)=>{
            return element.length!==0
        }).length} words</p>
        <p>{text.length} characters</p>
        <p>This whole thing can be read in {text.split(" ").length * 0.008 } minutes !</p>
        <hr></hr>
        <h3>Preview</h3>
        <hr></hr>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      

    </div>

    </>
  )
}


