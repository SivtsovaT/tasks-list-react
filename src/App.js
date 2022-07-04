import React from 'react';
import './App.css';
import TaskList from "./components/TaskList/TaskList";

const App = () => {

    const tasks = [
        {
            id: 1,
            description: 'Купить кофе',
            date: new Date(2019, 3, 17)
        },
        {
            id: 2,
            description: 'Вынести мусор',
            date: new Date(2019, 3, 18)
        },
        {
            id: 3,
            description: 'Позвонить в банк',
            date: new Date(2019, 3, 19)
        },


    ]

    return (
        <div>
            <TaskList items={tasks}/>
        </div>
    )
}

export default App;
