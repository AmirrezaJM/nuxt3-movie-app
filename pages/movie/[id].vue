<template>
    <div>
        <MovieDetail 
            :title="movie.title" 
            :date="movie.release_date" 
            :revenue="movie.revenue" 
            :poster="movie.poster_path" 
            :overview="movie.overview" 
        />
    </div>
</template>

<script setup>
const route = useRoute();
const {data: movie, error} = await useFetch(`/api/${route.params.id}`);
definePageMeta({layout:"custom"});
</script>

<style lang="scss" scoped>

</style>