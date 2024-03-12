<template>
    <div class="w-full max-w-md sm:mx-auto mt-5">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    email
                </label>
                <input placeholder="Email" type="email" name="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    username
                </label>
                <input placeholder="Username" type="text" name="username" id="username"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="password">
                    Password
                </label>
                <input placeholder="Password" type="password" name="password" id="password"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="Cpassword">
                    Confirm Password
                </label>
                <input placeholder="Confirm Password" type="password" name="Cpassword" id="Cpassword"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button class="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline" type="button">
                Sign up
            </button>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>