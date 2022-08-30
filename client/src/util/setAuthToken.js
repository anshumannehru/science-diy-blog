/*This is a util function which will help us to send the token everytime when the request is made*/
import axios from 'axios'
const setAuthToken = token =>{
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;/*send with headers as token*/
    }else{
        delete axios.defaults.headers.common['x-auth-token']/*delete the headers*/
    }
}
export default setAuthToken