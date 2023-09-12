import "./Button.css"
function Button(props) {
    return (
        <button onClick={props.onClick} className={props.class} style={props.style}>{props.content}</button>
    );
}

export default Button;
