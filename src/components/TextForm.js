import React, { useState } from "react";

export default function TextForm(props) {

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        console.log('Content copied to Clipboard'); 
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")) 
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText); 
        props.showAlert("Text Cleared!", "success");
    }


  const [text, setText] = useState("");
  return (
    <>
    <div className="container"
         style={{color: props.mode === 'dark'?'whitesmoke':'#2b3035'}}
        >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows={8}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'dark'?'#2b3035':'whitesmoke', color: props.mode === 'dark'?'whitesmoke':'#2b3035'}}
        ></textarea>
      </div>
      <button className={`btn btn-${props.mode === 'dark'?'secondary':'primary'} mx-1 my-2`} onClick={handleUpClick}>Uppercase</button>
      <button className={`btn btn-${props.mode === 'dark'?'secondary':'primary'} mx-1 my-2`} onClick={handleLoClick}>Lowercase</button>
      <button className={`btn btn-${props.mode === 'dark'?'secondary':'primary'} mx-1 my-2`} onClick={handleCopyClick}>Copy</button>
      <button className={`btn btn-${props.mode === 'dark'?'secondary':'primary'} mx-1 my-2`} onClick={handleClearClick}>Clear</button>
      <button className={`btn btn-${props.mode === 'dark'?'secondary':'primary'} mx-1 my-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"
         style={{color: props.mode === 'dark'?'whitesmoke':'#2b3035'}}
        >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
