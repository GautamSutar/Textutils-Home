import React, { useState } from "react";

export default function TextFile(props) {
   const handleUpClick = () => {
      console.log("Upper Case Was Clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
   };

   const handleLoClick = () => {
      let newtext = text.toLowerCase();
      setText(newtext);
   };

   const handleClearClick = () => {
      let clearText = "";
      setText(clearText);
   };

   const handleCopyClick = () => {
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
   };

   const handleOnChange = (event) => {
      console.log("on change");
      setText(event.target.value);
   };

   const [text, setText] = useState("");
   return (
      <>
         <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
               {props.heading}
            </h1>

            <div className="mb-3" style={{ backgroundColor: props.mode === 'dark' ? '#301934' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
               <textarea className="form-control border-black" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="myBox" rows="15" ></textarea>
               <button className="btn btn-primary my-3" onClick={handleUpClick}>
                  Change into UppperCase
               </button>

               <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
                  Change into Lower case
               </button>

               <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>
                  Clear
               </button>
               <button className="btn btn-primary my-3 mx-1" onClick={handleCopyClick}>
                  Copy
               </button>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
               <h2>Your Text Summary</h2>
               <p>
                  {text.split(" ").length} words and {text.length} caracter
               </p>
               <p>Reading Time = {text.split(" ").length * 0.004}</p>
               <h1>Preview</h1>
               <p>{text.length > 0 ? text : 'Enter some text to preview'}</p>
            </div>
         </div >

      </>
   );
}
