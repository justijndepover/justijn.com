<template>
    <div class="w-full max-w-2xl mx-auto px-4">
        <router-link :to="{ name: 'tools' }" class="inline-block outline-none focus:outline-none focus:bg-gray-200 -ml-2 -mt-1 px-2 py-1 rounded-md mb-2">
            <h1 class="text-base font-semibold text-gray-800 tracking-wide flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Keylogger</span>
            </h1>
        </router-link>

        <p class="text-sm text-gray-600 mb-4">Press a key to get more information</p>

        <div class="rounded-lg border border-gray-300">
            <div class="border-b border-gray-300 p-4 flex items-center justify-between">
                <span class="text-gray-600 text-sm">which</span>
                <span class="text-gray-600 text-sm">{{ which }}</span>
            </div>
            <div class="border-b border-gray-300 p-4 flex items-center justify-between">
                <span class="text-gray-600 text-sm">shiftKey</span>
                <span class="text-gray-600 text-sm">{{ shiftKey }}</span>
            </div>
            <div class="border-b border-gray-300 p-4 flex items-center justify-between">
                <span class="text-gray-600 text-sm">ctrlKey</span>
                <span class="text-gray-600 text-sm">{{ ctrlKey }}</span>
            </div>
            <div class="border-b border-gray-300 p-4 flex items-center justify-between">
                <span class="text-gray-600 text-sm">altKey</span>
                <span class="text-gray-600 text-sm">{{ altKey }}</span>
            </div>
            <div class="border-b border-gray-300 p-4 flex items-center justify-between">
                <span class="text-gray-600 text-sm">metaKey</span>
                <span class="text-gray-600 text-sm">{{ metaKey }}</span>
            </div>
            <div class="border-b border-gray-300 p-4 flex items-center justify-between">
                <span class="text-gray-600 text-sm">key</span>
                <span class="text-gray-600 text-sm">{{ key }}</span>
            </div>
            <div class="border-b border-gray-300 p-4 flex items-center justify-between">
                <span class="text-gray-600 text-sm">keyCode</span>
                <span class="text-gray-600 text-sm">{{ keyCode }}</span>
            </div>
            <div class="p-4 flex items-center justify-between">
                <span class="text-gray-600 text-sm">code</span>
                <span class="text-gray-600 text-sm">{{ code }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Page',
    data() {
        return {
            which: '',
            shiftKey: '',
            ctrlKey: '',
            altKey: '',
            metaKey: '',
            key: '',
            keyCode: '',
            code: '',
        };
    },
    created() {
        window.addEventListener('keydown', this.keydown);
    },
    destroyed() {
        window.removeEventListener('keydown', this.keydown);
    },
    methods: {
        keydown(event) {
            this.which = event.which;
            this.shiftKey = event.shiftKey;
            this.ctrlKey = event.ctrlKey;
            this.altKey = event.altKey;
            this.metaKey = event.metaKey;
            this.key = event.key;
            this.keyCode = event.keyCode;
            this.code = event.code;
        },
    },
};
</script>
