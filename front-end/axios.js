import axios from 'axios';

const host = 'http://localhost';
const port = '8080';
const baseUrl = `${host}:${port}/`;

const instance = axios.create({
    baseURL = baseUrl
});

export default instance;