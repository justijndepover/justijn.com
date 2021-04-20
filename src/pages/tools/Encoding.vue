<template>
    <tool-page name="Base64" description="Encode and decode strings with Base64">
        <div class="rounded-lg border border-gray-300 dark:border-gray-800 p-4">
            <text-input-area label="Input text" v-model="text" class="mb-4" />

            <div class="flex items-center mb-4">
                <button @click="encode" class="py-1 px-2 mr-4 text-xs inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none focus:ring-2 font-medium rounded-md transition duration-150 ease-in-out appearance-none text-green-700 bg-green-100 hover:bg-green-50 active:bg-green-50 hover:text-green-600 active:text-green-600 focus:border-green-300 focus:ring-green-100">
                    Encode
                </button>
                <button @click="decode" class="py-1 px-2 mr-4 text-xs inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none focus:ring-2 font-medium rounded-md transition duration-150 ease-in-out appearance-none text-green-700 bg-green-100 hover:bg-green-50 active:bg-green-50 hover:text-green-600 active:text-green-600 focus:border-green-300 focus:ring-green-100">
                    Decode
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
    name: 'base64',
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
        encode() {
            this.result = btoa(this.text);
        },
        decode() {
            this.result = atob(this.text);
        },
    },
};
</script>
