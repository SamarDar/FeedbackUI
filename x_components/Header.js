import React from "react";

function Header(){

    const client="React";
    const title={
        flutter:' Flutter ',
        react:' React '
    }
    const info={
        name:"Samar",
        nick:"Daroesh"
    }
  
    return(
        <div className="navbar bg-dark rounded text-white">
             <h2>
             Hello {`${info.name}  ${info.nick}`}
             </h2>
             <h1>
              {client==="React"?title.react:title.flutter}
             course
             </h1>
        </div>
    );
}
export default Header;