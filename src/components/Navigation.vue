<template>
    <header class="w-full max-w-6xl mx-auto px-4 py-8 flex items-center">
        <router-link
            :to="{ name: 'home' }"
            class="inline-flex
                items-center
                text-gray-600
                hover:text-gray-700
                dark:text-gray-500
                dark:hover:text-gray-400
                font-medium
                px-3
                -ml-3
                h-10
                outline-none
                focus:outline-none
                focus:bg-gray-200
                focus:text-gray-800
                dark:focus:bg-gray-800
                dark:focus:text-gray-400
                rounded-lg"
            active-class="text-gray-800 dark:text-gray-500"
        >
            <img src="/assets/me.png" alt="Justijn Depover" class="rounded-full mr-4 w-8 h-8">
            <span>Home</span>
        </router-link>

        <router-link
            :to="{ name: 'tools' }"
            class="inline-flex
                items-center
                text-gray-600
                hover:text-gray-700
                dark:text-gray-500
                dark:hover:text-gray-400
                font-medium
                px-3
                h-10
                outline-none
                focus:outline-none
                focus:bg-gray-200
                focus:text-gray-800
                dark:focus:bg-gray-800
                dark:focus:text-gray-400
                rounded-lg"
            active-class="text-gray-800"
        >
            <span>Tools</span>
        </router-link>

        <button
            class="inline-flex
            items-center
            text-gray-600
            hover:text-gray-700
            dark:text-gray-500
            dark:hover:text-gray-400
            font-medium
            px-2
            py-1
            ml-3
            hover:bg-gray-100
            dark:hover:bg-gray-800
            text-sm
            border
            border-gray-100
            dark:border-gray-600
            outline-none
            focus:outline-none
            focus:bg-gray-200
            focus:text-gray-800
            dark:focus:bg-gray-800
            dark:focus:text-gray-400
            rounded-lg"
            active-class="text-gray-800"
            @click="openCommandPalette"
        >
            <span>⌘k</span>
        </button>
    </header>
</template>

<script>
import { EventBus } from '../eventbus';

export default {
    name: 'navigation',
    methods: {
        openCommandPalette() {
            EventBus.$emit('open-command-palette');
        },
    },
};
</script>
