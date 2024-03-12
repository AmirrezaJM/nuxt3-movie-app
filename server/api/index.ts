export default defineEventHandler(async() => {
    try {
        const data = await $fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=2790ae9c110061c844859b585ee1999e&language=en-US&page=1")
        return data
    } catch(error) {
        console.error(error)
        return null;
    }
    
})