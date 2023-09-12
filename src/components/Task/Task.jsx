import "./Task.css"
import {useState} from "react";

function Task({ id, title, date,deadline, onDone, onEdited, onRemoved, onNotDone}) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(title);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return (
    <div className="inputTask" id={id}>
            <label className="inputTaskLabel">
                <input
                    type='checkbox'
                    disabled={isEditMode}
                    checked={checked}
                    className='inputTaskCheckbox'
                    onChange={(event) => {
                        setChecked(event.target.checked);
                        if(event.target.checked) {
                            setTimeout(() => {
                                onDone(id);
                            }, 300)
                        } onNotDone(id)
                    }}
                />
                {
                    isEditMode ? (
                        <input
                            value={value}
                            // ref={editTitleInputRef}
                            onChange={(event) => {
                                setValue(event.target.value)
                                onEdited(event.target.value, id)
                            }}
                            onKeyDown={(event) => {
                                if(event.key === 'Enter') {
                                    // onEdited(id, value)
                                    setIsEditMode(false)
                                }
                            }}
                            className="inputTaskTitleEdit"
                        />
                    ) : (
                        <h3 className='inputTaskTitle'>{title}</h3>
                    )

                }
                <p>Создано: {new Date(
                    date,
                ).toLocaleString("ru", options)}</p>
                <p>Дедлайн: {deadline}</p>
            </label>
                <button aria-label="Edit" className="inputTaskEdit" onClick={() => {
                    setIsEditMode(true)
                }}/>
                <button aria-label="Removed" className="inputTaskRemove" onClick={() => {
                    if(window.confirm('A you sure?')) {
                        onRemoved(id);
                    }
                }}/>
        </div>
    );
}

export default Task;
