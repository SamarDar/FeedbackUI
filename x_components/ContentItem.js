import React from "react";
function ContentItem(props){
    return(
        <li className="list-group-item">
        <img src={props.p.img} alt={`icon of ${props.p.id}`}/>
               <input type="checkbox" id={props.p.id} />
               <label htmlFor={props.p.id}>{props.p.name} </label>
       </li>

    );

}
export default ContentItem;