<template>
    <div class="w-full max-w-5xl mx-auto px-4 sm:flex-1 sm:flex sm:items-center">
        <div class="w-full">
            <h1 class="text-base font-semibold text-gray-800 dark:text-gray-50 tracking-wide mb-4">A list of useful tools</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <panel-link :to="{ name: 'keylogger' }">
                    KeyLogger
                    <template #description>
                        <p>Check what the <pre class="inline bg-gray-100 dark:bg-gray-800 text-xs font-medium p-1 rounded">Keycode</pre> or <pre class="inline bg-gray-100 dark:bg-gray-800 text-xs font-medium p-1 rounded">Key</pre> is for a particular key press</p>
                    </template>
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </template>
                    <template #icon-large>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                        </svg>
                    </template>
                </panel-link>

                <panel-link :to="{ name: 'timestamp' }">
                    Timestamp
                    <template #description>
                        <p>A set of timestamp functions</p>
                    </template>
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </template>
                    <template #icon-large>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                        </svg>
                    </template>
                </panel-link>

                <panel-link :to="{ name: 'image-generator' }">
                    Image generator
                    <template #description>
                        <p>Generate a placeholder image with a specific width & height</p>
                    </template>
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </template>
                    <template #icon-large>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                        </svg>
                    </template>
                </panel-link>

                <panel-link :to="{ name: 'base64' }">
                    Base64
                    <template #description>
                        <p>Encode and decode strings with <pre class="inline bg-gray-100 dark:bg-gray-800 text-xs font-medium p-1 rounded">Base64</pre></p>
                    </template>
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                    </template>
                    <template #icon-large>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd" />
                        </svg>
                    </template>
                </panel-link>

                <panel-link :to="{ name: 'scratchpad' }">
                    Scratchpad
                    <template #description>
                        <p>Quickly store snippets</p>
                    </template>
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </template>
                    <template #icon-large>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                        </svg>
                    </template>
                </panel-link>

                <panel-link :to="{ name: 'json-formatter' }">
                    JSON Formatter
                    <template #description>
                        <p>Format truncated or minified JSON into a readable format, or vise versa</p>
                    </template>
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </template>
                    <template #icon-large>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </template>
                </panel-link>
            </div>
        </div>
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
