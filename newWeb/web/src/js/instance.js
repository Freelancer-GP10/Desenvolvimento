import axios from 'axios';

const instace = axios.create({
     baseURL: 'http://10.18.33.24:8080',
     headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        
          
     }
})

export default instace;