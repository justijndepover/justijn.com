<template>
    <tool-page name="Unix Timestamp" description="Get the current unix timestamp">
        <template #action>
            <button type="button" @click="refresh" class="text-gray-500 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-100 p-1 text-xs inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none font-medium rounded-md transition duration-150 ease-in-out appearance-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </button>
        </template>

        <div class="rounded-lg border border-gray-300">
            <div class="border-b border-gray-300 p-4 flex items-center justify-between">
                <span class="text-gray-600 text-sm">The current unix timestamp is</span>
                <span class="text-gray-600 text-sm">{{ timestamp }}</span>
            </div>
            <div class="p-4">
                <label class="block text-sm font-medium text-gray-700" for="timestamp-field">Enter your own timestamp</label>

                <div class="relative rounded-md mt-2 mb-4">
                    <input
                        type="text"
                        id="timestamp-field"
                        placeholder="Unix timestamp"
                        autocomplete="off"
                        @change="setTimestamp"
                        class="appearance-none bg-white border outline-none focus:ring-1 ring-offset-0 block w-full pl-3 py-2 sm:text-sm text-base leading-normal rounded-md pr-3 border-gray-300 text-gray-800 focus:ring-green-300 focus:border-green-300 placeholder-gray-400">
                </div>

                <span class="block text-sm font-medium text-gray-700">equals:</span>
                <span class="block text-sm text-gray-700">{{ formattedTime }}</span>
            </div>
        </div>
    </tool-page>
</template>

<script>
import ToolPage from '../../components/ToolPage.vue';

export default {
    name: 'Timestamp',
    components: {
        ToolPage,
    },
    data() {
        return {
            timestamp: '',
            formattedTime: '',
        };
    },
    created() {
        this.timestamp = Math.round(Date.now() / 1000);
    },
    methods: {
        refresh() {
            this.timestamp = Math.round(Date.now() / 1000);
        },
        setTimestamp(e) {
            const unixTimestamp = e.target.value;
            const date = new Date(unixTimestamp * 1000);

            const year = date.getUTCFullYear();
            const month = date.getUTCMonth();
            const day = date.getUTCDate();

            const hours = date.getUTCHours();
            const minutes = `0${date.getUTCMinutes().toString()}`;
            const seconds = `0${date.getUTCSeconds().toString()}`;

            this.formattedTime = `${day}/${month}/${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)} UTC`;
        },
    },
};
</script>
