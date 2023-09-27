import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:4000/marketplace/api/v1'
});

