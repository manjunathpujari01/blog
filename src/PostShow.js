import React from 'react'
import axios from 'axios'
import{Link} from 'react-router-dom'
class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            post:{},
            comments:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id

            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response)=>{
                const post=response.data
                const userid=response.data.userId
                axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
             .then((response)=>{
               
                const user =response.data
                this.setState({user,post})
            })
            .catch((err)=>{
                console.log(err)
            })
            })
            .catch((err)=>{
                console.log(err)
            })
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response)=>{
                //console.log(response.data)
                const comments =(response.data)
                this.setState({comments})
            })
            .catch((err)=>{
                console.log(err)
            })
      }
    render(){
       
        return(
            <div>
                <h2>User Name-{this.state.user.name}</h2>
            
                <h2>Title:{this.state.post.title}</h2>
                <h2>BODY:{this.state.post.body}</h2>
                <hr/>
                <h1>Comments</h1>
                <ul>
                    {
                        this.state.comments.map(comment=>{
                            return <li key={comment.id}>{comment.body}</li>
                        })
                    }
                </ul>
                <hr/>
                
                <h2><Link to ={`/users/${this.state.user.id}`}>More About Authors:{this.state.user.name}</Link></h2>


            </div>
        )
    }
}
export default PostShow