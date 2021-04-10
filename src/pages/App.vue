<template>
    <div id="app" class="flex flex-col h-screen relative">
        <navigation />

        <router-view></router-view>

        <command-palette />
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import CommandPalette from '../components/CommandPalette.vue';

export default {
    name: 'App',
    components: {
        Navigation,
        CommandPalette,
    },
};
</script>
