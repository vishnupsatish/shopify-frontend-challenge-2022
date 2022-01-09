import nasa from "./api/nasa";

export const getImages = async (params) => {
    // // Set the startDate to 10 days ago (to load 10 images) and the endDate to the current day
    // const endDate = new Date();
    // const startDate = new Date();
    // startDate.setDate(startDate.getDate() - 10);

    // Load 10 images from NASA's picture of the day endpoint
    const response = await nasa.get('/planetary/apod', {
        // params: { 'start_date': formatDate(startDate), 'end_date': formatDate(endDate) }
        params: { ...params, thumbs: 'true' }
    })

    return response.data;
}