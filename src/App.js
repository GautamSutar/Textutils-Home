import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextFile from "./component/TextFile";
// import About from "./component/About";
import React, { useState } from "react";
// import Alert from "./component/Alert";

import {
   BrowserRouter as Router,
   Routes,
   Route,
   link,
   BrowserRouter
} from "react-router-dom";

let name = "Gautam";
function App() {
   const [mode, setMode] = useState("light");
   const [alert, setAlert] = useState(null);
   const [Color, setColor] = useState("light");
   const [Color2, setColor2] = useState("warning");
   const showAlert = (message, type) => {
      setAlert({
         msg: message,
         type: type,
      })
      setTimeout(() => {
         setAlert(null);
      }, 1500);
   }

   const handleColor = () => {
      if (Color === "light") {
         setMode("yellow");
         document.body.style.backgroundColor = 'yellow';
         showAlert("yellow Mode Enable", "success : ");
      } else {
         setMode("dark");
         document.body.style.backgroundColor = '#301934';
         showAlert(" Mode Enable", "success : ");
      }
   };
   const handleColor2 = () => {
      if (mode === "yellow") {
         setMode("white");
         document.body.style.backgroundColor = 'white';
         showAlert("yellow Mode Enable", "success : ");
      } else {
         setMode("dark");
         document.body.style.backgroundColor = 'white';
         showAlert(" Mode Enable", "success : ");
      }
   };

   const handleMode = () => {
      if (mode === "dark") {
         setMode("light");
         document.body.style.backgroundColor = 'white';
         showAlert("Light Mode Enable", "success : ");
         document.title = 'Textutils-Light mode';
         setInterval(() => {
            document.title = 'Textutil is in danger';
         }, 3000)
         setInterval(() => {
            document.title = 'Install Textutil';
         }, 2500)
      } else {
         setMode("dark");
         document.body.style.backgroundColor = '#301934';
         showAlert("Dark Mode Enable", "success : ");
         document.title = 'Textutils-Dark mode';
      }
   };

   return (
      <>
         {/* <BrowserRouter>
            <div> */}
         <Navbar title="Gautam Sutar" aboutText="About" mode={mode} handleMode={handleMode} handleColor={handleColor} handleColor2={handleColor2} />
         {/* <Routes> */}
         {/* <Route exact path="/about" element={<About />}></Route> */}
         {/* <Route exact path="/" element={}></Route> */}
         <TextFile heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
         {/* </Routes>
            </div >
         </BrowserRouter > */}
      </>
   );
}

export default App;
