export const ADD_NOTIFICATION = 'ui/ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'ui/REMOVE_NOTIFICATION';

export const addNotification = ({id, type, message, expiration}) => ({
    type: ADD_NOTIFICATION,
    payload: {
        id,
        type,
        message,
        expiration
    }
});

export const removeNotification = (id) => ({
    type: REMOVE_NOTIFICATION,
    payload: id
});

