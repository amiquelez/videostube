import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://videostube.firebaseio.com/'
})

export default instance;