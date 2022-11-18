import React from "react";
import {useState,useContext,useEffect} from 'react'
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm(){
    const [text,setText]=useState('')
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState('')
    const [rating,setRating]=useState(10)
    const{addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)

    useEffect(()=>{
if(feedbackEdit.edit===true){
    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
}
    },[feedbackEdit])

    const handleTextChange=(e)=>{
        if(text===""){
           setBtnDisabled(true)
            setMessage(null)
        }

        else if(text !=="" && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage(" Text must be  at least 10 characters")
        }

        else{
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={
                text,
                rating
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }
            else{
            addFeedback(newFeedback)
            }
            setText("")

        }

    }

    return(
        
        <div className=" container-fluid card">
            <form onSubmit={handleSubmit}>
                <RatingSelect select={(rating)=>setRating(rating)}/>
                <h3>How would you rate your service with us?</h3>
                <div className="input-group">
                <input onChange={handleTextChange} type='text' placeholder="write a review" value={text}/>
                <button className="btn" type="submit" disabled={btnDisabled}
                 style={{backgroundColor:"pink"}}>send</button>
                </div>
                {message && <div>{message}</div> }
            </form>
        </div>
    )
}
export default FeedbackForm