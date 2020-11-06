import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-tinder-clone.herokuapp.com/'
});

export default instance;