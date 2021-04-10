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
                    <div class="absolute inset-0 bg-gray-500 opacity-25"></div>
                </div>

                <div class="sm:my-8 sm:max-w-xl w-full z-10" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="border bg-white rounded-lg overflow-hidden shadow-xl w-full">
                        <input
                            type="text"
                            autofocus
                            ref="input"
                            class="outline-none w-full px-6 py-4 text-gray-700"
                            placeholder="Search..."
                            v-model="search"
                            @keydown.enter="onEnter"
                            @keydown.up.prevent="onArrowUp"
                            @keydown.down.prevent="onArrowDown"
                            @change="onChange"
                        >
                    </div>

                    <div class="mt-4 bg-white rounded-lg border overflow-hidden" v-show="filteredPages.length">
                        <ul class="text-left">
                            <li
                                v-for="(page, index) in filteredPages"
                                :key="index"
                                class="py-3 px-5 hover:bg-gray-50 text-gray-700 text-sm cursor-pointer"
                                :class="(index == selected) ? 'bg-gray-50' : ''"
                                @click="navigate(page)"
                            >
                                {{ page.name }}
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
                },
                {
                    name: 'Timestamp',
                    url: 'timestamp',
                },
                {
                    name: 'Image generator',
                    url: 'image-generator',
                },
                {
                    name: 'Base64',
                    url: 'base64',
                },
                {
                    name: 'Scratchpad',
                    url: 'scratchpad',
                },
                {
                    name: 'JSON Formatter',
                    url: 'json-formatter',
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
            this.$router.push({ name: page.url });
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
