import React from "react";
import './Task.css';
import TaskDate from "../TaskDate/TaskDate";

const Task = (props) => {



   	return (
		<div className='task-item'>
			<TaskDate date={props.date}/>
			<div className='task-descr'>{props.description}</div>
			<div className='task-done'>Сделано </div>
		</div>
	)
}

export default Task;