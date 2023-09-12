import { Observable, Subject } from 'rxjs';

const alertsSubject = new Subject();
const closedAlertsSubject = new Subject();

const alert = (status, message, timeout) => {
    alertsSubject.next({
        id: Math.round(window.performance.now()*10),
        status, message, timeout
    });
};
const success = (message, timeout = 0) => {
    console.log('я сработал')
    alert('success', message, timeout);
};
const onAlert = () => {
    return alertsSubject
        .asObservable();
};
const close = (id) => {
    closedAlertsSubject.next(id);
};
const onClosed = () => {
    return closedAlertsSubject
        .asObservable();
};

export {success, onAlert, onClosed, close}
