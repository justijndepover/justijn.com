<template>
    <tool-page name="JSON Prettifier" description="Format truncated or minified JSON into a readable format, or vise versa">
        <div class="rounded-lg border border-gray-300 p-4">
            <text-input-area label="Input text" v-model="text" class="mb-4" />

            <div class="flex items-center mb-4">
                <button @click="format" class="py-1 px-2 mr-4 text-xs inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none focus:ring-2 font-medium rounded-md transition duration-150 ease-in-out appearance-none text-green-700 bg-green-100 hover:bg-green-50 active:bg-green-50 hover:text-green-600 active:text-green-600 focus:border-green-300 focus:ring-green-100">
                    Format
                </button>
                <button @click="minify" class="py-1 px-2 mr-4 text-xs inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none focus:ring-2 font-medium rounded-md transition duration-150 ease-in-out appearance-none text-green-700 bg-green-100 hover:bg-green-50 active:bg-green-50 hover:text-green-600 active:text-green-600 focus:border-green-300 focus:ring-green-100">
                    Minify
                </button>
            </div>

            <text-input-area label="Result" v-model="result" readonly disabled class="mb-4" />
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
        };
    },
    methods: {
        format() {
            try {
                this.result = JSON.stringify(JSON.parse(this.text), null, 4);
            } catch (error) {
                this.result = 'Could not convert the input. Are you sure you entered correct JSON?';
            }
        },
        minify() {
            try {
                this.result = JSON.stringify(JSON.parse(this.text), null, 0);
            } catch (error) {
                this.result = 'Could not convert the input. Are you sure you entered correct JSON?';
            }
        },
    },
};
</script>
