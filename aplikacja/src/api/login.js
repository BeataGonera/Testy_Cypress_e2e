import { BASE_URL } from './common';

const LOGIN_PATH = '/login';
export const USERNAME_FIELD = 'username';
export const PASSWORD_FIELD = 'password';

export const login = (username, password) => fetch(`${BASE_URL}${LOGIN_PATH}`, {
    method: 'POST',
    body: JSON.stringify({
        [USERNAME_FIELD]: username,
        [PASSWORD_FIELD]: password
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})