import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchData = async () => {
    try {
        const response = await axios.get(url);
        return response;
    } 
    catch(error){
        console.log(error);
    }
}