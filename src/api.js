import axios from "axios";

const searchImages = () => {
    axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization:'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y'
        },
        params: {

        }
    })
}