import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom' 

class Post extends React.Component{
    constructor(){
        super()
        this.state={
            postList:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const postList=response.data
            this.setState({postList})
        })
    }

    render(){
        return(
            <Posts postlist={this.state.postList}/>
        )
    }
}

function Posts (props){
    return(
        <div>
                <h2>Total post -{props.postlist.length}</h2>
                <ul>
                {props.postlist.map(post=>{
                    return  <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>
                  })}
                </ul>
            </div>
    )
}
export default Post
