import axios from 'axios';

const instace = axios.create({
     baseURL: 'http://26.98.14.153:8080',
     headers: {
          'Authorization': `${sessionStorage.getItem('token')}`,
     }
})

export default instace;
