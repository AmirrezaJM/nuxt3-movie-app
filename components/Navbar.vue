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
                    <button class="header_features-theme--icon">
                        test
                        <!-- &&  theme menu -->
                        <ul class="header_features-theme">
                            <h5>
                                <Icon name="mdi:brush" />
                                theme
                            </h5>
                            <li class="header_features-theme--button" @click="changeTheme('light')">
                                <Icon name="ic:outline-wb-sunny" size="24" class="mx-2" />
                                light
                            </li>
                            <li class="header_features-theme--button" @click="changeTheme('dark')">
                                <Icon name="ri:moon-line" size="24" class="mx-2" />
                                dark
                            </li>
                            <li class="header_features-theme--button" @click="changeTheme('dracula')">
                                <Icon name="game-icons:vampire-dracula" size="24" class="mx-2" />
                                dracula
                            </li>
                        </ul>
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()


const changeTheme = (theme: string) => {
    colorMode.preference = theme;
    console.log(colorMode.preference)
}
</script>

<style lang="postcss" scoped>

</style>