<template>
    <router-link
        :to="to"
        class="rounded-lg border border-gray-300 bg-white dark:bg-gray-900 dark:border-gray-800 px-6 py-4 mb-4 hover:border-gray-400 dark:hover:border-gray-700 flex justify-between outline-none focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
    >
        <div class="flex flex-1 items-center">
            <div class="text-sm">
                <p class="font-medium text-gray-900 dark:text-gray-50">
                    <slot></slot>
                </p>
                <div class="text-gray-500">
                    <slot name="description"></slot>
                </div>
            </div>
        </div>

        <div class="flex text-sm items-center">
            <div class="font-medium text-gray-700 ml-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'PanelLink',
    props: {
        to: {
            type: Object,
        },
    },
};
</script>
