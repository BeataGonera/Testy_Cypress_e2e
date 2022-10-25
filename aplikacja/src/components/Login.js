import './login.css';
import { useState } from 'react';
import { login, USERNAME_FIELD, PASSWORD_FIELD } from '../api/login';

const USERNAME_LABEL = 'Username';
const PASSWORD_LABEL = 'Hasło';

export const Login = (props) => {
    const [formInput, setFormInput] = useState({
        [USERNAME_FIELD]: null,
        [PASSWORD_FIELD]: null
    });

    const handleSubmit = () => {
        login(formInput[USERNAME_FIELD], formInput[PASSWORD_FIELD])
            .then(response => response.json())
            .then(content => props.setToken(content.token))
            .catch(error => alert(error));
    }

    const handleUsernameInput = (event) => {
        setFormInput({ ...formInput, [USERNAME_FIELD]: event.target.value });
    }

    const handlePasswordInput = (event) => {
        setFormInput({ ...formInput, [PASSWORD_FIELD]: event.target.value });
    }

    return (<div className="login-form">
        <label htmlFor={USERNAME_FIELD}>{USERNAME_LABEL}</label>
        <input type="text" id={USERNAME_FIELD} onChange={handleUsernameInput} />
        <label htmlFor={PASSWORD_FIELD}>{PASSWORD_LABEL}</label>
        <input type="password" id={PASSWORD_FIELD} onChange={handlePasswordInput} />
        <button onClick={handleSubmit}>Login</button>
    </div>)
}
