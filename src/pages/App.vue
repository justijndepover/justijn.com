<template>
    <div id="app" class="flex flex-col h-screen relative">
        <navigation />

        <router-view></router-view>

        <command-palette />
    </div>
</template>

<script>
import { EventBus } from '../eventbus';
import Navigation from '../components/Navigation.vue';
import CommandPalette from '../components/CommandPalette.vue';

export default {
    name: 'App',
    components: {
        Navigation,
        CommandPalette,
    },
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
                EventBus.$emit('toggle-command-palette');
            }

            if (e.key === '/') {
                e.preventDefault();
                EventBus.$emit('toggle-command-palette');
            }

            if (e.key === 'Escape') {
                EventBus.$emit('command-palette', false);
            }
        });
    },
};
</script>
