import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './todoSlice';


function TaskFilter() {
    const dispatch = useDispatch(); 
    const currentFilter = useSelector((state) => state.todos.filter);

    return (
        <div className="task-filter">
            <button
                onClick={() => dispatch(setFilter('all'))}
                disabled={currentFilter === 'all'} 
                className="filter-button"
            >
                Все
            </button>
            <button
                onClick={() => dispatch(setFilter('completed'))} 
                disabled={currentFilter === 'completed'} 
                className="filter-button"
            >
                Выполненные
            </button>
            <button
                onClick={() => dispatch(setFilter('incomplete'))} 
                disabled={currentFilter === 'incomplete'} 
                className="filter-button"
            >
                Невыполненные
            </button>
        </div>
    );
}

export default TaskFilter;
