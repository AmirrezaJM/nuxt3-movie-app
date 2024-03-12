<template>
    <div class="flex flex-col md:flex-row m-8">
        <div class="md:w-1/2 p-8">
            <img src="" alt="Contact Us" />
        </div>
        <div class="md:w-1/2 p-8 shadow-md">
            <p class="text-lg mb-2">
                123 Main Street <br />
                Ranchi India 3423,
            </p>
            <p class="text-lg mb-2">
                Phone: 123 Main Street <br />
                Email: info@test.com
            </p>
            <form>
                <div>
                    <label for="name" class="block text-lg font-bold mb-2">
                        Name
                    </label>
                    <input type="text" placeholder="Name" name="name" id="name" class="w-full border border-gray-300 p-2 mb-4 rounded-lg" />
                </div>
                <div>
                    <label for="email" class="block text-lg font-bold mb-2">
                        Email
                    </label>
                    <input type="text" placeholder="Email" name="email" id="email" class="w-full border border-gray-300 p-2 mb-4 rounded-lg" />
                </div>
                <button class="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                </button>

            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>