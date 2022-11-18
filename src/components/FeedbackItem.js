import React from "react";
import Card from "./shared/Card";
import {FaTimes,FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item }){
    const {deleteFeedback,editFeedback}=useContext(FeedbackContext)
    return(
        <Card >
        
        <div className="card">
       
        <span className="  position-absolute top-0 start-0 translate-middle
         badge rounded-pill bg-secondary ">
         {item.rating}
         </span>
        
        <div className="card-body">
        <div className="d-flex justify-content-end">
        <button type="button" className="btn " onClick={()=>deleteFeedback(item.id)} >
             <FaTimes color="purple"/> </button>
        <button type="button" className="btn" onClick={()=>editFeedback(item)}>
            <FaEdit color="purple"/>
        </button>
        </div>
        {item.text}
        </div>
        </div>
        
        </Card>
         
    )
}

export default FeedbackItem;