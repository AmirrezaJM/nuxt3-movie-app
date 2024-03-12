export default defineEventHandler(async(event: any) => {
    console.log(event)
    const movieId = event.context.params.id;
    try {
        const data = await $fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2790ae9c110061c844859b585ee1999e&language=en-US`);
        return data;
    } catch(error) {
        console.error(error);
        return null
    }
})