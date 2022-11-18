import React from "react";
function TeamMember(props){
    return(
        <div className="col-md-4 col-sm-6 border">
           <div className="card">

              <div className="card-header">
              <img style={{maxWidth:'100%'}} src={props.info.img} alt={props.info.name}/>
              </div>

              <div className="card-body" style={{backgroundColor:props.info.website?'white':'gray'}}>
              <h2>{props.info.name}</h2>
              <h5>{props.info.psoition}</h5>
              <div>{props.info.phone}</div>
              <div>{props.info.email}</div>
              <div>{props.info.website}</div>
              </div>

           </div>

        </div>
    );

}
export default TeamMember;