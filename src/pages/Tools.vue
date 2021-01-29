<template>
    <div id="app" class="flex flex-col h-screen relative">
        <navigation />

        <div class="w-full max-w-2xl mx-auto px-4">
            <h1 class="text-base font-semibold text-gray-800 tracking-wide mb-4">A list of useful tools</h1>

            <panel-link :to="{ name: 'keylogger' }">
                KeyLogger
                <template #description>
                    <p>Check what the <pre class="inline bg-gray-100 text-xs font-medium p-1 rounded">Keycode</pre> or <pre class="inline bg-gray-100 text-xs font-medium p-1 rounded">Key</pre> is for a particular key press</p>
                </template>
            </panel-link>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import PanelLink from '../components/PanelLink.vue';

export default {
    name: 'Page',
    components: {
        Navigation,
        PanelLink,
    },
};
</script>
