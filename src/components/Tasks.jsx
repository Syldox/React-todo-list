import React, { Component } from 'react';
import { apiUrl } from '../config.json';
import axios from 'axios';

const apiEndpoint = apiUrl + '/user/task';

class Tasks extends Component {
	state = {
		todolist: [
			{
				id: 1,
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
				<button
					onClick={this.handleAdd}
					type="button"
					className="btn btn-outline-info mb-3"
					data-toggle="modal"
					data-target="#exampleModal"
				>
					Add New Task
				</button>

				<div
					className="modal fade"
					id="exampleModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Task
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label htmlFor="title" className="col-form-label">
											Task-Title
										</label>
										<input type="text" className="form-control" id="recipient-name" />
									</div>
									<div className="form-group">
										<label htmlFor="description" className="col-form-label">
											Description:
										</label>
										<textarea className="form-control" id="message-text" />
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-outline-danger" data-dismiss="modal">
									Close
								</button>
								<button type="button" className="btn btn-outline-info">
									Add Task
								</button>
							</div>
						</div>
					</div>
				</div>

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
							<tr key={todolist.id}>
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
