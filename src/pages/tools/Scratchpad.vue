<template>
    <tool-page name="Scratchpad" description="Quickly store snippets">
        <div class="rounded-lg border border-gray-300 dark:border-gray-800 p-4">
            <text-input-area placeholder="Start typing" v-model="text" rows="30" autofocus />
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
            text: localStorage.getItem('scratchpad'),
        };
    },
    watch: {
        text(value) {
            localStorage.setItem('scratchpad', value);
        },
    },
};
</script>
