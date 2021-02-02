<template>
    <div class="w-full max-w-2xl mx-auto px-4 pb-4">
        <div class="flex items-end mb-4">
            <div class="flex-1">
                <router-link :to="{ name: 'tools' }" class="inline-block outline-none focus:outline-none focus:bg-gray-200 -ml-2 -mt-1 px-2 py-1 rounded-md mb-2">
                    <h1 class="text-base font-semibold text-gray-800 tracking-wide flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>{{ name }}</span>
                    </h1>
                </router-link>

                <p class="text-sm text-gray-600">
                    <slot name="description">{{ description }}</slot>
                </p>
            </div>

            <div>
                <slot name="action"></slot>
            </div>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
};
</script>
