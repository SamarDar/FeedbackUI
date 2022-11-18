import React from "react";
import ContentItem from "./ContentItem";
function Content(){

    return(
     <div >
            <p>React is a js library for building user interface.
                Flutter is a framework for mobile application.
            </p>
            <ul className="list-group">
                <ContentItem
                  p={{
                    name:"COMPONENT",
                    id:"component",
                    img:"https://picsum.photos/60",

                }}
                  
                 />
                <ContentItem 
                p={{
                    name:"JSX",
                     id:"jsx",
                     img:"https://picsum.photos/61",
                }}
                     
                 />
                <ContentItem 
                p={{
                    name:"VIRTUAL DOM" ,
                    id:"virtual dom",
                    img:"https://picsum.photos/62"

                }}
                    
                />
                <ContentItem
                p={{
                    name:"PROPS", 
                    id:"props",
                    img:"https://picsum.photos/63",
                }}
                   
                />
             
            </ul>
     </div>
    );
}
export default Content;