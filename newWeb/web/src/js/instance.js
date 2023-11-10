import axios from 'axios';

const instace = axios.create({
     baseURL: 'http://10.18.32.87:8080',
     timeout:10000,
     headers: {
          "Content-Type":"application/json",
          
          
     }
})

instace.interceptors.request.use((config) => {
     const token = sessionStorage.getItem('token');
     if(token) {
          config.headers['authorization'] = `Bearer ${token}`
     }
     return config
})

export default instace;