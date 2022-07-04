import React, { Component } from 'react';
import './App.css';
import Task from "./components/Task/Task";

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
            <Task description={tasks[0].description}
                  date={tasks[0].date}
            />
            <Task description={tasks[1].description}
                  date={tasks[1].date}
            />
            <Task description={tasks[2].description}
                  date={tasks[2].date}
            />
        </div>
    )
}

export default App;
