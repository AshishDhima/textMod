import React, {useState} from 'react'


export default function Form(props) {
    const handleUpclick= ()=>{
        //console.log("Upper case was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to upper case","success !");
    }
  const handleClearclick= ()=>{
    //To change the font type
    let newtext = "";
    setText(newtext)
    props.showAlert("Text cleared","success !");
}
    const handleLoclick= ()=>{
      //console.log("Upper case was clicked"+text);
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showAlert("Converted to lower case","success !");
  }
  const handleCopy=()=>{
    console.log('I am copy');
    var text=document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success");
  }
    const[text, setText]=useState('Enter text here');
    //text = "new text" Wrong way to change the state
    //setText("new text"); Correct way to change the state
    const handleOnChange=(event)=>{
      //console.log("On charge");
      setText(event.target.value); // Taking Inputs from the user
    }
  return (
      <>
      <div className='container'  style={{color: props.textColor}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Area to write</label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{"backgroundColor": props.mode==='dark'?'#022647':'white', "color": props.mode==='dark'?'white':'black'}} rows="8" id="mybox"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpclick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoclick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearclick}>Clear text</button>  
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>      
      </div>
      {/* //mode==='dark'?'white':'black' */}
      <div className="container my-3"  style={{color:props.textColor}}>                                    
        <h2>Your text summary</h2>
        <p1>{text.length<1?0 :text.split(" ").length} words and {text.length} characters</p1>
        <br></br>
        <p1>{0.008 * text.split(" ").length} Minutes read</p1>
        <h2 className='my-2'>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box"}</p>
      </div>
      </>
  )
}