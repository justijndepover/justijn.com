<template>
    <div class="w-full max-w-2xl mx-auto px-4">
        <h1 class="text-base font-semibold text-gray-800 dark:text-gray-50 tracking-wide mb-4">A list of useful tools</h1>

        <panel-link :to="{ name: 'keylogger' }">
            KeyLogger
            <template #description>
                <p>Check what the <pre class="inline bg-gray-100 dark:bg-gray-800 text-xs font-medium p-1 rounded">Keycode</pre> or <pre class="inline bg-gray-100 dark:bg-gray-800 text-xs font-medium p-1 rounded">Key</pre> is for a particular key press</p>
            </template>
        </panel-link>

        <panel-link :to="{ name: 'timestamp' }">
            Timestamp
            <template #description>
                <p>A set of timestamp functions</p>
            </template>
        </panel-link>

        <panel-link :to="{ name: 'image-generator' }">
            Image generator
            <template #description>
                <p>Generate a placeholder image with a specific width & height</p>
            </template>
        </panel-link>

        <panel-link :to="{ name: 'base64' }">
            Base64
            <template #description>
                <p>Encode and decode strings with <pre class="inline bg-gray-100 dark:bg-gray-800 text-xs font-medium p-1 rounded">Base64</pre></p>
            </template>
        </panel-link>

        <panel-link :to="{ name: 'scratchpad' }">
            Scratchpad
            <template #description>
                <p>Quickly store snippets</p>
            </template>
        </panel-link>

        <panel-link :to="{ name: 'json-formatter' }">
            JSON Formatter
            <template #description>
                <p>Format truncated or minified JSON into a readable format, or vise versa</p>
            </template>
        </panel-link>
    </div>
</template>

<script>
import PanelLink from '../components/PanelLink.vue';

export default {
    name: 'Page',
    components: {
        PanelLink,
    },
};
</script>
