<template>
    <div>
        <Searchbar @searchMovie="searchMovie" :searchError="searchError"/>
        <div class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-cyan-50">
            <div v-for="movie in movies.results" :key="movie.id">
                <MovieCard :id="movie.id" :title="movie.original_title" :poster="movie.poster_path" :date="movie.release_date" />
            </div>
        </div>
    </div>
</template>

<script setup>
    // fetch all Movie `
    const movies = ref([]);
    const searchError = ref(false);
    const searchMovie = async (searchInput) => {
        if(searchInput === "") {
            searchError.value = true;
        }
        if(searchInput !== "") {
            searchError.value = false;
            const {data,error} = await useFetch(`/api/search?searchInput=${searchInput}`)
            movies.value = data.value;
        }
    }
    const {data,error} = await useFetch("/api");
    movies.value = data.value;
</script>

<style lang="scss" scoped>
    
</style>