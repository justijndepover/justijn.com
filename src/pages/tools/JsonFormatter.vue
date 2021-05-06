<template>
    <tool-page name="JSON Formatter" description="Format truncated or minified JSON into a readable format, or vise versa">
        <div class="rounded-lg border border-gray-300 dark:border-gray-800 p-4">
            <text-input-area label="Input text" v-model="text" class="mb-4" autofocus/>

            <div class="flex items-center">
                <button @click="format" class="py-1 px-2 mr-4 text-xs inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none focus:ring-2 font-medium rounded-md transition duration-150 ease-in-out appearance-none text-green-700 bg-green-100 hover:bg-green-50 active:bg-green-50 hover:text-green-600 active:text-green-600 focus:border-green-300 focus:ring-green-100">
                    Format
                </button>
                <button @click="minify" class="py-1 px-2 mr-4 text-xs inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none focus:ring-2 font-medium rounded-md transition duration-150 ease-in-out appearance-none text-green-700 bg-green-100 hover:bg-green-50 active:bg-green-50 hover:text-green-600 active:text-green-600 focus:border-green-300 focus:ring-green-100">
                    Minify
                </button>
            </div>

            <div
                v-if="result"
                class="px-3 py-2 border border-gray-300 text-gray-800 rounded-md sm:text-sm text-base leading-normal bg-white z-10"
                :class="fullscreen ? 'absolute inset-0' : 'relative mt-4'"
            >
                <button
                    class="top-3 right-3 p-1 text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded transition-all outline-none focus:outline-none focus:bg-gray-50 focus:text-gray-800"
                    @click="toggleFullscreen"
                    :class="fullscreen ? 'fixed' : 'absolute'"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                </button>
                <pre :class="minified ? 'whitespace-normal' : ''" class="overflow-x-scroll" v-html="result"></pre>
            </div>

            <div v-if="error" class="mt-4 px-3 py-2 border border-gray-300 text-red-500 rounded-md sm:text-sm text-base leading-normal" v-html="error">
            </div>
        </div>
    </tool-page>
</template>

<script>
import ToolPage from '../../components/ToolPage.vue';
import TextInputArea from '../../components/TextInputArea.vue';

export default {
    name: 'json-prettifier',
    components: {
        ToolPage,
        TextInputArea,
    },
    data() {
        return {
            text: '',
            result: '',
            error: '',
            minified: false,
            fullscreen: false,
        };
    },
    mounted() {
        document.addEventListener('keydown', this.handleEscape);
    },
    destroyed() {
        document.removeEventListener('keydown', this.handleEscape);
    },
    methods: {
        format() {
            this.minified = false;

            try {
                this.result = JSON.stringify(JSON.parse(this.text), null, 4);
                this.error = '';
            } catch (error) {
                this.result = '';
                this.error = 'Could not convert the input. Are you sure you entered correct JSON?';
            }
        },
        minify() {
            this.minified = true;

            try {
                this.result = JSON.stringify(JSON.parse(this.text), null, 0);
                this.error = '';
            } catch (error) {
                this.result = '';
                this.error = 'Could not convert the input. Are you sure you entered correct JSON?';
            }
        },
        toggleFullscreen() {
            this.fullscreen = !this.fullscreen;
        },
        handleEscape(e) {
            if (e.key === 'Escape') {
                this.fullscreen = false;
            }
        },
    },
};
</script>
