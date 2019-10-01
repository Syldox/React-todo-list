import React, { Component } from 'react';
import axios from 'axios';

const apiEndpoint = 'https://engine-staging.viame.ae/assessment/login';

class Tasks extends Component {
	state = {
		users: [
			//    {
			//     title:"",
			//     description:"",
			//     status: 1
			//    }
		]
	};

	// async componentDidMount(){
	//     fetch(apiEndpoint)
	//   .then(response => response.json())
	//   .then(data => this.setState({
	//       title:data.title,
	//       description: data.description,
	//       status:data.status
	//   }))
	// }

	componentDidMount() {
		axios.get(apiEndpoint).then((res) => this.setState({ tasks: res.data }));
	}

	handleAdd = async () => {
		const register = {
			email: 'test@yes.com',
			password: '12345'
		};

		const { data: user } = await axios.post(apiEndpoint, register);
		const users = [ user, ...this.state.users ];
		this.setState({ users });
	};

	render() {
		const { users } = this.state;
		return (
			<div>
				<h1>Users List</h1>
				<button onClick={this.handleAdd} className="btn btn-primary mb-3">
					Add New Task
				</button>
				<table className="table">
					<thead>
						<tr>
							<th>Task</th>
							<th>Description</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* {users.map(user=>  */}
						<tr>
							<td>{users.email}</td>
							<td>{users.password}</td>
							<td />
							<td>
								<button className="btn btn-danger btn-sm">Delete</button>
							</td>
						</tr>
						{/* )} */}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Tasks;
