<template>
    <router-link
        :to="to"
        class="rounded-lg border border-gray-300 bg-white p-6 outline-none
        dark:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-700
        hover:border-gray-400
        focus:outline-none focus:border-green-200 focus:ring-1 focus:ring-green-200"
    >
        <div class="flex flex-col">
            <div class="hidden items-center justify-center pb-6">
                <slot name="icon-large"></slot>
            </div>
            <div class="flex-row">
                <div class="flex items-center mb-2">
                    <slot name="icon"></slot>
                    <p class="font-medium text-gray-900 dark:text-gray-50 ml-2">
                        <slot></slot>
                    </p>
                </div>
                <div class="flex-1 text-sm">
                    <div class="text-gray-500">
                        <slot name="description"></slot>
                    </div>
                </div>
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
