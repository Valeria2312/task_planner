import "./Main.css"
import Button from "../Button/Button";
import Tasks from "../Tasks/Tasks";
import AddTask from "../AddTask/AddTask";
import {useState}  from "react";
import {AlertingService} from "../AlertingService/AlertingService";
import {success} from "../../services/alerting_service";

function Main() {
    const [item, setItem] = useState('')
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
    const sortByNewDate = (e) => {
        let sortDirection =
            e.target.getAttribute("data-sort-direction") === "asc" ? "desc" : "asc";
        e.target.setAttribute("data-sort-direction", sortDirection);

        items.sort((a, b) => {
            if (sortDirection === "asc") {
                return b.createdAt - a.createdAt;
            } else {
                return a.createdAt - b.createdAt;
            }
        });
        setItems((items) => [...items])
    }

    const sortByDeadline = (e) => {
        let sortDirection =
                    e.target.getAttribute("data-sort-direction") === "asc" ? "desc" : "asc";
                e.target.setAttribute("data-sort-direction", sortDirection);

                items.sort((a, b) => {
                    if (sortDirection === "asc") {
                        return b.deadline.replace(/\D/g, "") - a.deadline.replace(/\D/g, "");
                    } else {
                        return a.deadline.replace(/\D/g, "") - b.deadline.replace(/\D/g, "");
                    }
                });
                setItems((items) => [...items])
    }
    return (
        <main className="main">
            <AlertingService
                horizontal={'right'}
                vertical={'top'}
            />
                <AddTask item={item} setItem={setItem} items={items} setItems={setItems}/>
                <Button onClick={(e) => { sortByNewDate(e)
                    success('Success message', 3)}} class={"btn-addTask"} style={{width: "180px",height: "60px", borderRadius: "20px",  background: "#517FF6"}} content={"Сортировка по дате создания"}/>
                <Button onClick={(e) => {
                    sortByDeadline(e)
                }} class={"btn-addTask"} style={{width: "180px",height: "60px", borderRadius: "20px",  background: "#517FF6"}} content={"Сортировка по дедлайну"}/>
            <Tasks item={item} setItem={setItem} items={items} setItems={setItems}/>
        </main>
    );
}

export default Main;


//onClick={() => success('Success message', 3)}
