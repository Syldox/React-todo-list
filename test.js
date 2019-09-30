import React, { Component } from 'react';
import axios from'axios';

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts"

 class Tasks extends Component {
     state = {
         posts:[]
     }

async componentDidMount(){
    const {data:posts} = await axios.get(apiEndpoint);
    this.setState({posts})
}

handleAdd = async ()=>{
    const obj = {title:'a', body:'dada'};
    // const obj = {title:'a',description:'b',status:'1'};
    const {data: post} = await axios.post(apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({posts})

}
        
  
    render() {
        return (
            <div>
                <h1>Task List</h1>
                <button onClick={this.handleAdd} className="btn btn-primary mb-3">Add New Task</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tasks</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => 
                                <tr>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                {/* <td>{this.state.status}</td> */}
                                <td><button className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                            )}
                        
                    
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tasks;
