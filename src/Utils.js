import nasa from "./api/nasa";

// Load media from NASA's astronomy picture of the day endpoint
export const getImages = async (params) => {
    const response = await nasa.get('/planetary/apod', {
        params: params
    })

    return response.data;
}