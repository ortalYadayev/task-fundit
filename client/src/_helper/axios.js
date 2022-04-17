import axios from 'axios'

const instanceAxios = axios.create({
    baseURL: 'http://localhost:8888/api',
    headers: {
        'Accept': 'application/json',
    }
});


export default instanceAxios;