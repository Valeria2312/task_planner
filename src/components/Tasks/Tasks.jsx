import "./Tasks.css"
import Task from "../Task/Task";
import {tasks} from "../../utils/consts";
import getTasks from "../../utils/getTasks";
import {useEffect, useState} from "react";

function Tasks({item,items,setItems,setItem}) {
    const removeTask = (id) => {
        const newItems = items.filter((item) => item.createdAt !== id)
        setItems(newItems)
    }
    const updateTask = (value, id) => {
        const newItems = items.map((item) => (
            item.createdAt === id
                ? { ...item, text: value }
                : item
        ));
        setItems(newItems)
    }
    const doneTask = (id) => {
        const currentItem = document.getElementById(`${id}`)
        currentItem.style.background = "#c5d7f6"
        currentItem.querySelector(".inputTaskTitle").style.textDecoration = "line-through"
    }
    const notDoneTask = (id) => {
        const currentItem = document.getElementById(`${id}`)
        currentItem.style.background = "#DBE2EF"
        currentItem.querySelector(".inputTaskTitle").style.textDecoration = "none"
        const newItems = items.map((item) => (
            item.createdAt === id
                ? { ...item, checked: false }
                : item
        ));
        setItems(newItems)
    }
    return (
            <div className="tasks">
                {items && items.length > 0 ?
                    items.map((task) =>(
                    <Task
                        key={task.createdAt}
                        id={task.createdAt}
                        date={task.createdAt}
                        title={task.text}
                        checkedItem = {task.checked}
                        deadline = {task.deadline}
                        onDone = {doneTask}
                        onEdited = {updateTask}
                        onRemoved = {removeTask}
                        onNotDone = {notDoneTask}
                    />))
                    :
                    <p className="">There is no one task.</p>
                }
            </div>
    );
}

export default Tasks;
