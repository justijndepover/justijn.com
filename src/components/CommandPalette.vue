<template>
    <transition
        enter-active-class="transition-all ease-out duration-50"
        enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="transition-all ease-in duration-50"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
        <div v-show="show" class="fixed z-10 inset-0 overflow-y-auto">
            <div class="block sm:flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
                <div class="fixed inset-0" aria-hidden="true" @click="show = false">
                    <div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-25"></div>
                </div>

                <div class="relative sm:my-8 sm:max-w-xl w-full z-10" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="border bg-white dark:bg-gray-700 dark:border-gray-800 rounded-lg overflow-hidden shadow-xl w-full">
                        <input
                            type="text"
                            autofocus
                            ref="input"
                            class="outline-none w-full px-6 py-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700"
                            placeholder="Search..."
                            v-model="search"
                            @keydown.enter="onEnter"
                            @keydown.up.prevent="onArrowUp"
                            @keydown.down.prevent="onArrowDown"
                            @change="onChange"
                        >
                    </div>

                    <div class="mt-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 overflow-hidden" v-show="filteredPages.length">
                        <ul class="text-left">
                            <li
                                v-for="(page, index) in filteredPages"
                                :key="index"
                                class="py-3 px-5 hover:bg-gray-50 text-gray-700 dark:hover:bg-gray-800 dark:text-gray-500 text-sm cursor-pointer"
                                :class="(index == selected) ? 'bg-gray-50 dark:bg-gray-800' : ''"
                                @click="navigate(page)"
                            >
                                <span class="block font-semibold">{{ page.name }}</span>
                                <span class="text-sm text-gray-500">{{ page.description }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Fuse from 'fuse.js';
import confetti from 'canvas-confetti';
import { EventBus } from '../eventbus';

export default {
    name: 'command-palette',
    data() {
        return {
            show: false,
            search: '',
            fuse: '',
            selected: 0,
            pages: [
                {
                    name: 'KeyLogger',
                    url: 'keylogger',
                    description: 'Check what the Keycode or Key is for a particular key press',
                },
                {
                    name: 'Timestamp',
                    url: 'timestamp',
                    description: 'A set of timestamp functions',
                },
                {
                    name: 'Image generator',
                    url: 'image-generator',
                    description: 'Generate a placeholder image with a specific width & height',
                },
                {
                    name: 'Base64',
                    url: 'base64',
                    description: 'Encode and decode strings with Base64',
                },
                {
                    name: 'Scratchpad',
                    url: 'scratchpad',
                    description: 'Quickly store snippets',
                },
                {
                    name: 'JSON Formatter',
                    url: 'json-formatter',
                    description: 'Format truncated or minified JSON into a readable format, or vise versa',
                },
                {
                    name: 'Confetti',
                    function: 'shootConfetti',
                    description: 'Hooray',
                },
            ],
        };
    },
    mounted() {
        this.fuse = new Fuse(this.pages, {
            keys: [
                'name',
                'url',
            ],
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
                this.show = !this.show;

                if (this.show) {
                    this.$nextTick(() => {
                        this.$refs.input.focus();
                    });
                }
            }

            if (e.key === 'Escape') {
                this.show = false;
            }
        });

        EventBus.$on('open-command-palette', () => {
            this.show = true;
            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        });
    },
    methods: {
        navigate(page) {
            this.show = false;
            this.search = '';
            if (page.url) {
                this.$router.push({ name: page.url });
            } else if (page.function) {
                this.shootConfetti();
            }
        },
        onEnter() {
            if (this.filteredPages[this.selected]) {
                this.navigate(this.filteredPages[this.selected]);
            }
        },
        onArrowUp() {
            this.selected = this.selected - 1 < 0 ? this.filteredPages.length - 1 : this.selected - 1;
        },
        onArrowDown() {
            this.selected = this.selected + 1 > this.filteredPages.length - 1 ? 1 : this.selected + 1;
        },
        onChange() {
            this.selected = 0;
        },
        fire(particleRatio, opts) {
            const count = 200;
            const defaults = {
                origin: { y: 0.7 },
            };

            confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
        },
        shootConfetti() {
            this.fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });
            this.fire(0.2, {
                spread: 60,
            });
            this.fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
            });
            this.fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
            });
            this.fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
        },
    },
    computed: {
        filteredPages() {
            if (this.search === '') {
                return this.pages;
            }

            return this.fuse.search(this.search).map((page) => page.item);
        },
    },
};
</script>
