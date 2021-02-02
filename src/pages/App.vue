<template>
    <div id="app" class="flex flex-col h-screen relative">
        <navigation />

        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
    name: 'App',
    components: {
        Navigation,
    },
};
</script>
