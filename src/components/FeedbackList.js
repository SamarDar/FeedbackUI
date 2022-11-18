import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import {motion,AnimatePresence} from 'framer-motion';
import Spinner from "./shared/Spinner";

import FeedbackContext from "../context/FeedbackContext";
function FeedbackList(){
    const { feedback,isLoading}=useContext(FeedbackContext)
    if(!isLoading&&(feedback.length===0||!feedback)){
        return(
            <div>
                Not feedback yet
            </div>
        )
    }
    return isLoading?<Spinner/>:( <div>
        <AnimatePresence>
      {feedback.map((item)=>(
        <motion.div 
        key={item.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
       <FeedbackItem key={item.id} item={item}  />
       </motion.div>
        ))}
        </AnimatePresence>
        </div> )

    
    // return(
    //     <div>
    //   {feedback.map((item)=>(
    //    <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
       
    //     ))}
    //     </div> 
    // ) 
    
}

export default FeedbackList;