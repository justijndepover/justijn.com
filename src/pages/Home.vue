<template>
    <div id="app" class="flex flex-col h-screen relative">
        <navigation />

        <div class="flex-1 flex items-center justify-center flex-col text-center">
            <div class="relative">
                <svg class="hidden lg:block absolute left-full transform -translate-x-1/2" width="404" height="300" fill="none" viewBox="0 0 404 300" style="left: 100%; z-index: -10">
                    <defs>
                        <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-gray-800" fill="currentColor"></rect>
                        </pattern>
                    </defs>
                    <rect width="404" height="300" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"></rect>
                </svg>

                <img src="/assets/me.png" alt="Justijn Depover" class="rounded-full mb-6 block mx-auto" width="120" height="120">

                <h1 class="mb-6 text-3xl leading-8 font-bold text-gray-800 dark:text-gray-200 sm:leading-10 tracking-wide">👋 Hi, I'm Justijn</h1>

                <span class="text-gray-500 dark:text-gray-400">
                    Full stack developer from Belgium,
                    <br>currently working at <a class="font-bold hover:text-red-400" target="_blank" rel="nofollow, noreferrer" href="https://www.in2red.be">in2red</a>.
                    <br><br>I build and maintain a couple <a class="font-bold hover:text-red-400" target="_blank" rel="nofollow, noreferrer" href="https://github.com/justijndepover">open source projects</a>. Mostly for Laravel.
                </span>

                <div class="mt-4 flex justify-center">
                    <svg class="w-6 h-6 text-gray-200 dark:text-gray-800" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" fill="currentColor">
                        <path d="M150,5.1L4.6,203.7L150,294.9l145.4-91.2L150,5.1z M150,272.3L32.1,198.4l31.7-43.3l27.8,17.4l-13.8,18.8 l36.5,22.9v-72.7V86.2L150,37.4V272.3z M185.7,141.5l36.5,49.8l-36.5,22.9V141.5z"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import DarkmodeToggle from '../components/DarkmodeToggle.vue';
import Navigation from '../components/Navigation.vue';

export default {
    name: 'Home',
    components: {
        // DarkmodeToggle,
        Navigation,
    },
    data() {
        return {
            darkmode: (document.cookie.indexOf('darkmode=true') !== -1),
        };
    },
    mounted() {
        if (document.cookie.indexOf('darkmode=true') !== -1) {
            this.darkmode = true;
            document.documentElement.classList.add('dark');
        }
    },
};
</script>
