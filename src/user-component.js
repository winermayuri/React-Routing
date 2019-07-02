import React from 'react';
import  {Link,Route} from  'react-router-dom'


class User extends React.Component{   
       render(username){ return(
            <div> 
                <h1 style={{color:'green'}}>    
                    Inside User {username}
            </h1> 
                <Link to='/' >Go to Home</Link>
                
            
            </div> 
            )      
       } 
        
}

class UserName extends React.Component{   
    render(){ return(
         <div> 
             UserName is Mayuri Jain       
         </div> 
         )      
    } 
     
}

export {User,UserName}