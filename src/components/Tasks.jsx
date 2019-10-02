import React, { Component } from 'react';
import { apiUrl } from '../config.json';
import axios from 'axios';

const apiEndpoint = apiUrl + '/user/task';

class Tasks extends Component {
	state = {
		todolist: [
			{
				title: 'React-assesment',
				description: 'Complete the Front-end',
				status: 200
			}
		]
	};

	// async componentDidMount() {
	// 	fetch(apiEndpoint).then((response) => response.json()).then((data) =>
	// 		this.setState({
	// 			title: this.state.data.title,
	// 			description: this.state.data.description,
	// 			status: this.state.data.status
	// 		})
	// 	);
	// }

	handleAdd = async () => {
		// const obj = {title:'a',description:'b',status:'1'};
		const { data: todolist } = await axios.post(apiEndpoint, this.state.todolist);
		const todos = [ todolist, ...this.state.todolist ];
		this.setState({ todos });
	};

	render() {
		const { todolist } = this.state;
		return (
			<div>
				<h1 className="d-flex justify-content-center">Tasks List</h1>
				<div className="d-flex justify-content-center">
					<img
						src={require('../assets/images/logo/logo-task.png')}
						width="100"
						height="100"
						className="d-inline-block align-top"
						alt=""
					/>
				</div>
				<button onClick={this.handleAdd} className="btn btn-outline-info mb-3">
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
						{todolist.map((todos) => (
							<tr>
								<td>{todos.title}</td>
								<td>{todos.description}</td>
								<td>{todos.status}</td>
								<td>
									<button className="btn btn-outline-danger btn-sm">Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Tasks;
