import {Alert} from "../Alert";
import './AlertingService.css'
import {useEffect, useState} from "react";
import {onAlert, onClosed} from "../../services/alerting_service";
export const AlertingService = (props) => {
    const [alerts, setAlerts] = useState([]);

    const alertsContent = alerts.map((alert) => {
        return <Alert
            key={alert.id}
            {...alert}
        />;
    });

    useEffect(() => {
        const onAlertSubscription$ = onAlert().subscribe(v => {
            // console.log("z hf,jnf.")
            setAlerts([
                ...alerts,
                v,
            ]);
        });
        const onClosedSubscription$ = onClosed().subscribe(id => {
            setAlerts(
                alerts.filter(alert => alert.id !== id),
            );
        });

        return () => {
            onAlertSubscription$.unsubscribe();
            onClosedSubscription$.unsubscribe();
        };
    }, [alerts]);

    return (
        <div className='AlertingService'>
            {alertsContent}
        </div>
    );
};
