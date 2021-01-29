<template>
    <div id="app" class="flex flex-col h-screen relative">
        <div class="flex-1 flex items-center justify-center flex-col text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">404</h1>

            <div class="mt-4">
                <router-link :to="{ name: 'home' }" class="py-1 px-2 text-xs inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none focus:ring-2 font-medium rounded-md transition duration-150 ease-in-out appearance-none text-green-700 bg-green-100 hover:bg-green-50 active:bg-green-50 hover:text-green-600 active:text-green-600 focus:border-green-300 focus:ring-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Terug</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
};
</script>
