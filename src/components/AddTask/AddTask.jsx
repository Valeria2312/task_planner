import "./AddTask.css"
import Button from "../Button/Button";
import {useEffect, useState} from "react";

function AddTask({items, setItems}) {
    const [inputValue, setInputValue] = useState('');
    const [inputValueData, setInputValueData] = useState('');

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(items))
    }, [items])
    const addTask = () => {
        console.log(setInputValueData)
        if(inputValue && inputValueData) {
            const newTask = {
                text: inputValue,
                deadline: inputValueData,
                createdAt: Date.now(),
                checked:false,
            }
            setItems((items) => [...items, newTask])
            setInputValue('');
            setInputValueData('');
        }
    }

    return (
        <div className="add-task">
            <input type = "text"
                   className="inputPlusValue"
                   value={inputValue}
                   onChange={(event) => {
                       setInputValue(event.target.value);
                   }}
                   onKeyDown={(event) => {
                       if(event.key === 'Enter') {
                           addTask();
                       }
                   }}
                   placeholder = "Type here..."/>
            <input type="datetime-local" id="start" name="trip-start" value={inputValueData} onChange={(event) => {
                setInputValueData(event.target.value);
            }}/>
            <Button onClick={addTask} class={"btn-addTask"} style={{width: "180px",height: "60px", borderRadius: "20px",  background: "rgba(255, 255, 255, 0.75)"}} content={"Add task"}/>
        </div>
    );
}

export default AddTask;
