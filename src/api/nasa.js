import axios from 'axios';

// Create an axios instance to call the NASA API
const nasa = axios.create({
    baseURL: 'https://api.nasa.gov/',
    params: { 'api_key': 'V7ktJTeQbFGX11q4ntOPey5Sult6gzQc4ba1ZYPp' } // There is no point in hiding the API key since users can see it in DevTools anyways
})

export default nasa;
