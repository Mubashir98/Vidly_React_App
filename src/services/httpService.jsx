import axios from 'axios';
import { toast } from 'react-toastify';
//import { Raven } from 'raven-js';
import logger from './logService';
axios.interceptors.response.use(null,error=>{
  
    const expectedError=error.response && 
    error.response.status >=400 && 
    error.response.status<500
    
    if(!expectedError)
    {
      
      logger.log(error);
      toast("An Unexpected error occur")
    } 
    
    return Promise.reject(error)
  
  });
export default {
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete
};  