import React from "react";
import './Task.css';

const Task = () => {


	return (
		<div className='task-item'>
			<div className='task-date'>19/02/2022</div>
			<div className='task-descr'>Купить кофе</div>
			<div className='task-done'>Сделано </div>
		</div>
	)
}

export default Task;