

export const getGifs = async ( category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=ME04GtHiw0xqE7qij5SJ4JupXuEkBL4d`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(i =>{
        return {
            id: i.id,
            title: i.title,
            url:i.images?.downsized_medium.url
        }

    })

    // console.log(gif) 
    return gifs
}