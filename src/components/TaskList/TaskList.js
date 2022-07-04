import React from "react";
import './TaskList.css';
import Task from "../Task/Task";

const TaskList = (props) => {
	return (
		<div className='taskList'>
			<Task description={props.items[0].description}
				  date={props.items[0].date}
			/>
			<Task description={props.items[1].description}
				  date={props.items[1].date}
			/>
			<Task description={props.items[2].description}
				  date={props.items[2].date}
			/>
		</div>
	)
}

export default TaskList;