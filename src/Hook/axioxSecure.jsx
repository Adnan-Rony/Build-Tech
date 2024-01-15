import axios from "axios";

 const axioxSecure = axios.create({
    baseURL: 'http://localhost:5000'
})


const UseaxioxSecure = () => {



    return axioxSecure;

}
export default UseaxioxSecure;