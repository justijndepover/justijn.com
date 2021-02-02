<template>
    <tool-page name="Keylogger" description="Press a key to get more information">
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
    </tool-page>
</template>

<script>
import ToolPage from '../../components/ToolPage.vue';

export default {
    name: 'Keylogger',
    components: {
        ToolPage,
    },
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
