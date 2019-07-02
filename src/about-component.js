import React from 'react';
import  {Link,Route} from  'react-router-dom'


function About() {
    return ( <div><h1 style = {
            {
                color: 'green'
            }
        } >
        Inside Message </h1> 
        <ul >
        <li>
            <Link to='/about/company'>Company-Name</Link>
        </li>
    </ul>
    
    </div>
    )

}

export default About