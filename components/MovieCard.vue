<script setup>
defineProps(['id','title',"date","poster"])
</script>

<template>
  <div class="relative overflow-hidden">
      <img 
        class="h-400 w-300 object-cover rounded-lg hover:rounded-none transition-all"
        :src="`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${poster}.jpg`"
        :alt="`${title} image`"
      />
      <p class="absolute -top-1/2 text-center text-cyan-100">{{ title }}</p>
  </div>
  <!-- <div class="bg-cyan-50 rounded-lg shadow-md overflow-hidden m-4 px-2">
    <div class="p-1 py-4">
      <h3 class="font-semibold text-lg mb-2 text-center">{{ title }}</h3>
      <div class="overflow-hidden mb-4">
        <img
          class="h-400 w-300 object-cover"
          :src="`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${poster}.jpg`"
          alt="batman Image"
        />
      </div>
      <p class="text-gray-500 text-sm mb-2 px-2">Release Date: {{ date }}</p>
      <div class="mt-4 p-2 text-right">
        <NuxtLink
          :to="`movie/${id}`"
          class="bg-rose-400 hover:bg-rose-500 text-white font-medium py-2 px-4 rounded"
          >Get Details</NuxtLink
        >
      </div>
    </div>
  </div> -->
</template>

<style scoped>
.h-400 {
  height: 400px;
}
.w-300 {
  width: 300px;
}
</style>