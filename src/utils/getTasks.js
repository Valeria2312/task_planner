import {localStorageKey} from "./consts";
export default function getTasks() {
    const currenState = localStorage.getItem(localStorageKey)
    console.log(currenState)
    return JSON.parse(currenState)
}
// window.addEventListener('storage', (event) => getTasks())
getTasks()
