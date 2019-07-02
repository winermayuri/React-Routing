import React,{Component} from 'react';
import  {Route,Switch,Link, Redirect} from  'react-router-dom'
import About from './about-component';
import {User,UserName} from './user-component'

class Routing extends Component{   
    //exact -matches 1char of regex
    //exact strict - matches whole string

    state = {
        logged :false
    }

    login=()=>{
          this.setState({
            logged:true
          })   
    }
        render(){return(  
            <div>
                <div>
                    <ul >
                        <li>
                            <Link to='/' >Home</Link>
                        </li>
                    </ul>

                    <ul >
                        <li>
                            <Link to='/user/Mayuri' >User- This will be clickable after Login</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to='/about' >Message</Link>
                        </li>
                    </ul>

                </div>
            <div>  
             <Switch> 
            <Route exact path='/' render={()=><h1 style={{color:'red'}}>In Home</h1>}></Route> 
            <Route path='/about' component={About} ></Route>
            <Route exact path='/about/company' render={()=><h1>Welcome to Sagacity</h1>}></Route> 
            <Route path='/user/:username' render={
              ({match})=>(
                this.state.logged ? (<User username={match.params.username} />)
                                   :
                  <Redirect to="/" />)
                 
              
            }></Route>
            
            </Switch> 
            <button type="button" onClick={this.login}>Login</button>
            </div> 
            </div>
            )  }      
            
           
}

export default Routing