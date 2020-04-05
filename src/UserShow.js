import React from 'react' 
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component {
    constructor(){
        super()
        this.state={
            user:[],
            userpost:[]
        }
    }
   
    componentDidMount(){
        const id=this.props.match.params.id
        //console.log(id)
        
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                //console.log(response.data)
                const user =response.data
                this.setState({user})
            })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                //console.log(response.data)
                const userpost =(response.data)
                this.setState({userpost})
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    
    render() {
        return (
            <div> 
                <h2> User name -{this.state.user.name}</h2>
                <h2>POST WRITTEN BY USER</h2>
                <ul>
                    {this.state.userpost.map(post=>{
                      return  <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
            </div> 
        )
    }
}

export default UserShow