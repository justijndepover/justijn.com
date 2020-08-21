<template>
    <div id="app" class="flex items-center justify-center h-screen relative">
        <div class="absolute top-0 right-0 p-4 flex items-center">
            <span class="uppercase text-xs text-gray-500 mr-2">darkmode</span>
            <darkmode-toggle :value="true"></darkmode-toggle>
        </div>

        <div class="py-8 px-16 text-center w-screen">
            <svg class="w-16 md:w-32 m-auto text-gray-300 dark:text-gray-700" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" fill="currentColor">
                <path d="M150,5.1L4.6,203.7L150,294.9l145.4-91.2L150,5.1z M150,272.3L32.1,198.4l31.7-43.3l27.8,17.4l-13.8,18.8 l36.5,22.9v-72.7V86.2L150,37.4V272.3z M185.7,141.5l36.5,49.8l-36.5,22.9V141.5z"/>
            </svg>

            <h1 class="text-3xl md:text-5xl mt-4 uppercase font-bold text-red-300 tracking-wider" style="font-family: 'Hind'">Justijn.pro</h1>
        </div>
    </div>
</template>

<script>
import DarkmodeToggle from './components/DarkmodeToggle.vue';

export default {
    name: 'App',
    components: {
        DarkmodeToggle,
    }
}
</script>
