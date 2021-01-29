<template>
    <header class="w-full max-w-6xl mx-auto px-4 py-8 flex items-center">
        <router-link :to="{ name: 'home' }" class="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium pr-3" active-class="text-gray-800">
            <img src="/assets/me.png" alt="Justijn Depover" class="rounded-full mr-4 w-8 h-8">
            <span>Home</span>
        </router-link>

        <router-link :to="{ name: 'tools' }" class="text-gray-600 hover:text-gray-700 font-medium pr-3" active-class="text-gray-800">Tools</router-link>
    </header>
</template>

<script>
export default {
    name: 'navigation',
};
</script>
