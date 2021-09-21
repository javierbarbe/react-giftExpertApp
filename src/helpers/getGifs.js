const apikey= 'BNHr7DKKtEZKrh4560eX15w3h5oNDWT5';

export const getGifs = async (category) => {

    const url     = 'https://api.giphy.com/v1/gifs/search?api_key='+apikey+'&limit=10&q='+encodeURI(category);
    const resp    = await fetch(url);
    const {data}  = await resp.json();
    const gifs    = data.map(img=> {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // por si no hubiera imagenes se pone ? 
        }
    });
    // console.log('en getGifs.js',gifs);
    return gifs;
}