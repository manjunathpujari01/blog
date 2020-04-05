import React from 'react' 
import Home from './Home'
import Users from './Users'
import Post from './Post'
import UserShow from './UserShow'
import PostShow from './PostShow'

import { BrowserRouter, Route, Link } from 'react-router-dom'

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <Link to="/">Home</Link>
                <Link to="/Users">Users</Link>
                <Link to="/Post">Post</Link>
            

                
                <Route path="/" component={Home} exact={true} />
                <Route path="/users" component={Users} exact={true} />
                <Route path="/post" component={Post} exact={true} /> 
                <Route path="/users/:id" component={UserShow} />
                <Route path="/post/:id" component={PostShow}/>
                
            
                
            </div>
        </BrowserRouter>
    )
}

export default App
