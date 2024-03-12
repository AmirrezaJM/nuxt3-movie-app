export default defineEventHandler(async(event: any) => {
    console.log(event)
    const movieId = event.context.params.id;
    const { searchInput } = getQuery(event);
    try {
        const data = await $fetch(`https://api.themoviedb.org/3/search/movie?${movieId}?api_key=2790ae9c110061c844859b585ee1999e&language=en-US&query=${searchInput}&page=1&include_adult=false`);
        return data;
    } catch(error) {
        console.error(error);
        return null
    }
})