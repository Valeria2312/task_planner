import "./Tasks.css"
import Task from "../Task/Task";
import { useEffect } from "react";
import {success} from "../../services/alerting_service";

function Tasks({items,setItems}) {
    // const [hasAlerted, setHasAlerted] = useState(false);
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


    // Функция для проверки и вызова success
    const checkDeadlines = () => {
        items.forEach((task) => {
            const hasAlertedKey = `hasAlerted_${task.createdAt}`;
            const hasAlerted = localStorage.getItem(hasAlertedKey);
            if (!hasAlerted) {
                const now = new Date().getTime(); // Текущее время в миллисекундах
                const deadlineTimestamp = new Date(task.deadline).getTime(); // Дедлайн в миллисекундах
                const timeDifference = deadlineTimestamp - now;

                if (timeDifference > 0.9 * 60 * 60 * 1000 && timeDifference < 1.5 * 60 * 60 * 1000) {
                    // Вызываем функцию success для задачи
                    success(`One hour left for task: ${task.text}`);
                    localStorage.setItem(hasAlertedKey, 'true'); // Устанавливаем флаг в локальное хранилище
                }
            }
        });
    };
    // Запускаем интервал при монтировании компонента
    useEffect(() => {
        const intervalId = setInterval(checkDeadlines, 1000); // Проверяем каждые 1 минуту
        return () => clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
    }, [items]);



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
