import axios from 'axios';
const API_BASE_URL = 'https://api.api-ninjas.com/v1';
const API_KEY = 'kkmz8j1ngXYlxXxG/iYIyQ==giQMIJVDNH3i3shs';


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
  },
});

export const getBabyNames = async (inputdata) => {
  
  if (inputdata === 0){
    inputdata ="neutral"
  }
  console.log( inputdata)
  const response = await api.get('/babynames?gender=' + inputdata);
  console.log( response.data)
  return response.data;

};