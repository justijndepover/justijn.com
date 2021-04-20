<template>
    <div>
        <label v-if="label" :for="idComputed" class="block text-sm font-medium text-gray-700 dark:text-gray-400">{{ label }}</label>

        <div class="relative rounded-md" :class="label ? 'mt-1' : ''">
            <input
                :type="type"
                :id="idComputed"
                :name="name"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :value="value"
                @input="$emit('input', $event.target.value)"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                class="appearance-none bg-white dark:bg-gray-800 border dark:border-gray-700 outline-none focus:ring-1 ring-offset-0 block w-full pl-3 py-2 sm:text-sm text-base leading-normal rounded-md"
                :class="error ? 'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'pr-3 border-gray-300 text-gray-800 focus:ring-green-400 focus:border-green-400 placeholder-gray-400'">

            <div v-if="error" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-red-500" x-description="Heroicon name: exclamation-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <p v-if="error.length" class="mt-2 text-sm text-red-600">{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'text-input',
    props: {
        id: String,
        name: String,
        label: String,
        placeholder: String,
        value: {
            type: [String, Number],
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        required: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        autocomplete: {
            required: false,
            type: String,
            default: '',
        },
        autofocus: {
            required: false,
            type: Boolean,
            default: false,
        },
        error: {
            required: false,
            type: [String, Boolean],
            default: false,
        },
    },
    computed: {
        idComputed() {
            return this.id || Math.random().toString(36).substring(2, 15);
        },
    },
};
</script>
