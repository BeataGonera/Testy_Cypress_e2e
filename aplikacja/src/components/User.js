import './user.css';
import { useEffect, useState } from 'react';
import { getUser } from '../api/user';

const USERNAME_LABEL = 'Użytkownik';
const NAME_FIELD = 'imie';
const NAME_LABEL = 'Imię';
const LAST_NAME_FIELD = 'nazwisko';
const LAST_NAME_LABEL = 'Nazwisko';
const SUBSCRIPTION_FIELD = 'subskrypcja';
const SUBSCRIPTION_LABEL = 'Subskrypcja';
const NOT_AVAILABLE_LABEL = 'N/A';

export const User = (props) => {
    const [user, setUser] = useState({
        [NAME_FIELD]: NOT_AVAILABLE_LABEL,
        [LAST_NAME_FIELD]: NOT_AVAILABLE_LABEL,
        [SUBSCRIPTION_FIELD]: false
    });

    useEffect(() => {
        getUser(props.token)
            .then(response => response.json())
            .then(content => setUser(content))
            .catch(error => alert(error));
    }, [props.token, setUser]);

    return (<div>
        <h1>{USERNAME_LABEL}:</h1>
        <ul>
            <li>{NAME_LABEL}: {user[NAME_FIELD]}</li>
            <li>{LAST_NAME_LABEL}: {user[LAST_NAME_FIELD]}</li>
            <li>{SUBSCRIPTION_LABEL}: <input type="checkbox" checked={user[SUBSCRIPTION_FIELD]} /></li>
        </ul>
    </div>)
}