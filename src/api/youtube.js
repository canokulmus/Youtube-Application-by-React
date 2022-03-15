import axios from 'axios';

const KEY = "AIzaSyD53tcAM5bdUT58eg2ZrDsBBMy84Kxv7FI";

export default axios.create({

    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type:"video",
        maxResults: 25,
        key: KEY,
    }

})