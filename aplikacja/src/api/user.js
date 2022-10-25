import { BASE_URL } from './common';

const USER_PATH = '/user';

export const getUser = (token) => fetch(`${BASE_URL}${USER_PATH}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-auth': token
    },
})