import axios from 'axios';
import { LOCAL_STORAGE } from '../config/constants';
import { showMessage } from '../config/utils';

import * as URLS from './urls';

const method_types = {
    get: "GET",
    post: "POST",
    delete: "DELETE",
    put: "PUT"
};

function getHeaders() {
    let user = localStorage.getItem(LOCAL_STORAGE.ORI_ADMIN);
    user = user && (user != 'undefined') ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.ORI_ADMIN)) : null;
    let headers = { 'Content-Type': 'application/json' };
    if (user && user.token) {
        headers.Authorization = `bearer ${user.token}`
    }
    return headers;
}

function fetchDataAndProceed(url, method, data, callback) {
    axios({
        method: method,
        params: method === method_types.get ? data : {},
        data: method !== method_types.get ? data : {},
        url: url,
        baseURL: URLS.BASE_URL,
        headers: getHeaders(),
        validateStatus: function (status) {
            return ((status >= 200 && status < 300) || status === 412);
        },
    }).then((response) => {
        callback(false, response.data);
    }).catch((error) => {
        if (error && error.response && error.response.data && error.response.data.message) {
            showMessage('error', error.response.data.message);
        }
        if (error && error.response && error.response.status === 401) {
            localStorage.removeItem(LOCAL_STORAGE.ORI_ADMIN);
            document.location.reload();
        } else {
            callback(true, error.response && error.response.data ? error.response.data : error.response);
        }
    });
}

/*--------------------------- AUTHENTICATION API ------------------------ */

export const loginUser = (data, callback) => {
    return fetchDataAndProceed('', method_types.post, data, callback);
};

export const validateToken = (data, callback) => {
    return fetchDataAndProceed('', method_types.post, data, callback);
};
