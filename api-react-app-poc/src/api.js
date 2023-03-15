import axios from 'axios';

const searchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID BJoYdGk_qxLfEBxwutLd9-6Giyd8Zd-Ab5g_bdX1vXM'
        },
        params: {
            query: term
        },
    });

    // console.log(response);

    return response.data.results;

}

export default searchImages
