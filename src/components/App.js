import React from "react";
import {BrowserRouter as Router ,Route,Routes,NavLink} from 'react-router-dom';
import Header from "./Header";
import FeedbackList from "./FeedbackList";
import FeedbackStates from "./FeedbackStates";
import FeedbackForm from "./FeedbackForm";
import AboutIconLink from "./AboutIconLink";
import { FeedbackProvider } from "../context/FeedbackContext";
import About from "../pages/About";


function App(){
   
    return(
        <div className="container-fluid  ">
        <FeedbackProvider>
        <Router>
        <Routes>

        <Route exact path="/" element={<><Header/>
           <FeedbackForm />
           <FeedbackStates />
           <FeedbackList/>
           </>}></Route>

            <Route path="/About" element={<About/>}/>
            
            </Routes>
         
         <NavLink to='/' activeClassName='active'>
            Home
         </NavLink> 

         <NavLink to='/About' activeClassName='active'>
          About
         </NavLink>

            <AboutIconLink/>
            
            </Router>
            </FeedbackProvider>
        </div>
        
        
    )
    }
export default App;