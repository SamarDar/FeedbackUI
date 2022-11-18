import React from "react";
import TeamMember from "./TeamMember";
function Team(){
    const info=[
        {id:1, img:"/images/01.jpg", name:"Samar Daroesh",  psoition:"Dubai",   phone:"+971506058722", email:"samar66@gmail.com"     ,website:"samarDaroesh.com" },
        {id:2, img:"/images/02.jpg", name:"Mohamad Daroesh",psoition:"Safita",  phone:"+963997285536", email:"Aboadam11@gmail.com",  },
        {id:3, img:"/images/03.jpg", name:"Lama Daroesh",   psoition:"Lebanon", phone:"+96170004961",  email:"Lama-daroesh@gmail.com",website:"LoloNail.com"  },
        {id:4, img:"/images/04.jpg", name:"Nawal Daroesh",  psoition:"Damascus",phone:"+963953449504", email:"Nawal9@gmail.com",      website:"nawalTatoo.com"  },
        {id:5, img:"/images/05.jpg", name:"Adam Daroesh",   psoition:"Safita",  phone:"+963986475121", email:"Dodo7@gmail.com", },
        {id:6, img:"/images/06.jpg", name:"Samira Moustafa",psoition:"Kuwait",  phone:"+9655565058722",email:"Samira86@gmail.com", },
    ]

    const members=info.map(member => <TeamMember
           key={member.id}
           img={member.img}
           name={member.name}
           phone={member.phone}
           email={member.email}
           website={member.website}
           psoition={member.psoition}
           />)
    return(
        <div className="row">
           {members}
       </div>
    );
};
export default Team;