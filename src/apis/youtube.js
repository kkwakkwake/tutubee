import axios from 'axios';

const KEY = `AIzaSyAJaL5pHM1Fb5CWWL_4aE8iV-XK4OiSuv4`;

export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3/`,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})