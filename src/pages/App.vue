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
    data() {
        return {
            cheatCode: ['ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
            cheatCodePosition: 0,
        };
    },
    mounted() {
        console.log('Inspecting the console hah? Try to see if you can find the hidden secret!');

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

            const requiredKey = this.cheatCode[this.cheatCodePosition];

            if (e.key === requiredKey) {
                this.cheatCodePosition += 1;
                if (this.cheatCodePosition === this.cheatCode.length) {
                    this.activateCheatCode();
                    this.cheatCodePosition = 0;
                }
            } else {
                this.cheatCodePosition = 0;
            }
        });
    },
    methods: {
        activateCheatCode() {
            window.alert('cheat code activated');
        },
    },
};
</script>
