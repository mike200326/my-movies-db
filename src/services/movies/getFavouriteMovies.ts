import api from "../api";

export const getFavouriteMovies = async () => {
    let res: any;
    const endpoint = 'my-favourites?language=en-US';
    await api
        .get(endpoint)
        .then((d) => {
            res = d.data
        })
        .catch((err) =>{
            res = err.response;
        });
    return res;

}