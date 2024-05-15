import NewTask from "./NewTask.jsx";
import {useState} from "react";


export default function Tasks({tasks, onAdd, onDelete}) {

    return <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
        <NewTask onAdd={onAdd}/>
        {tasks.length === 0 && <p className="text-stone-800 my-4">This project haven't any tasks.</p>}
        {tasks.length > 0 &&
            <ul className="p-4 mt-8 rounded-md text-stone-100">
                {tasks.map(task => (
                    <li key={task.id} className="flex justify-between my-4">
                        <span className="text-stone-900">{task.text}</span>
                        <button
                            className="text-stone-700 hover:text-red-500"
                            onClick={() => onDelete(task.id)}
                        >
                            Clear
                        </button>
                    </li>))
                }
            </ul>}
    </section>
}