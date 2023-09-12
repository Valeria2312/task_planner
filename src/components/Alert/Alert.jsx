import './Alert.css'
import {useEffect} from "react";
import { close } from '../../services/alerting_service';
export const Alert = (props) => {
    useEffect(() => {
        if (props.timeout > 0){
            const timer = setTimeout(() => {
                close(props.id);
            }, props.timeout * 1_000);

            return () => {
                clearTimeout(timer);
            };
        }

    }, [props.id, props.timeout]);
    return (
        <div className="alert">
            {props.message}
            <button onClick={() => close(props.id)}>X</button>
        </div>
    );
};
