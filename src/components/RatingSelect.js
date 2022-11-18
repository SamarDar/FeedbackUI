import React, { useContext } from "react";
import {useState,useEffect} from "react"
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({select}){

const [selected,setSelected]=useState(10)
const{feedbackEdit}=useContext(FeedbackContext)
useEffect(()=>{
setSelected(feedbackEdit.item.rating)
},[feedbackEdit])
const Radio=(id,value,num)=>{
    return(
        
            <li>
                <input 
                className="btn-check"
                    type="radio"
                     id={id} 
                     name="rating" 
                     value={value} 
                     onChange={handleChange} 
                     checked={selected===num}
                />
                <label className="btn btn-outline-secondary" htmlFor={id} style={{color:"hotpink"}}>
                {value}</label>
            </li>
        
    )
}
const handleChange =(e)=>{
setSelected(+e.currentTarget.value)
select(+e.currentTarget.value)
}

    return(
        <div  >
        <ul className="rating" >
        {Radio("num1","1",1)}  
        {Radio("num2","2",2)}
        {Radio("num3","3",3)}
        {Radio("num4","4",4)}
        {Radio("num5","5",5)}
        {Radio("num6","6",6)}
        {Radio("num7","7",7)}
        {Radio("num8","8",8)}
        {Radio("num9","9",9)}
        {Radio("num10","10",10)}
        </ul>
           
        </div>
    )
}
export default RatingSelect