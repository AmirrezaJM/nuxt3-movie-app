<template>
    <div>
        <nav class="bg-cyan-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="mt-4 sm:ml-6 sm:flex sm:items-center">
                        <NuxtLink to="/" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none focus:bg-cyan-900 text-white">Home</NuxtLink>
                        <NuxtLink to="/login" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none focus:bg-cyan-900 text-white">Login</NuxtLink>
                        <NuxtLink to="/registration" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none focus:bg-cyan-900 text-white">Registration</NuxtLink>
                        <NuxtLink to="/contact" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none focus:bg-cyan-900 text-white">Contact</NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>