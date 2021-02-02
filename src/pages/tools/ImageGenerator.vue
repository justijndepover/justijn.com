<template>
    <tool-page name="Image Generator" description="Generate a placeholder image with a specific width & height">
        <div class="rounded-lg border border-gray-300 p-4 mb-4">
            <form @submit.prevent="setCanvas">
                <text-input label="Enter the width" placeholder="1024" v-model="width" :error="widthError" class="mb-4" />
                <text-input label="Enter the height" placeholder="768" v-model="height" :error="heightError" class="mb-4" />
                <text-input label="Enter the background color" placeholder="#eeeeee" v-model="backgroundColor" class="mb-4" />
                <text-input label="Enter the svg color" placeholder="#ffffff" v-model="svgColor" class="mb-4" />

                <div class="flex items-center">
                    <button type="submit" class="py-1 px-2 mr-4 text-xs inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none focus:ring-2 font-medium rounded-md transition duration-150 ease-in-out appearance-none text-green-700 bg-green-100 hover:bg-green-50 active:bg-green-50 hover:text-green-600 active:text-green-600 focus:border-green-300 focus:ring-green-100">Generate svg</button>
                    <a v-show="showCanvas" ref="link" target="_blank" href="#" class="py-1 px-2 text-xs inline-flex items-center justify-center border border-transparent leading-5 focus:outline-none focus:ring-2 font-medium rounded-md transition duration-150 ease-in-out appearance-none text-green-700 bg-green-100 hover:bg-green-50 active:bg-green-50 hover:text-green-600 active:text-green-600 focus:border-green-300 focus:ring-green-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-2">
                            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        <span>Download</span>
                    </a>
                </div>
            </form>
        </div>

        <div class="hidden">
            <svg ref="svg" :width="computedWidth" viewBox="0 0 511 511" xmlns="http://www.w3.org/2000/svg">
                <path :fill="svgColor" d="m133.320312 373.828125c-34.152343 0-64.53125-21.867187-75.5625-54.421875l-.746093-2.453125c-2.601563-8.621094-3.691407-15.871094-3.691407-23.125v-145.453125l-51.753906 172.757812c-6.65625 25.410157 8.511719 51.753907 33.960938 58.773438l329.878906 88.34375c4.117188 1.066406 8.234375 1.578125 12.289062 1.578125 21.246094 0 40.660157-14.101563 46.101563-34.882813l19.21875-61.117187zm0 0"/>
                <path :fill="svgColor" d="m191.988281 149.828125c23.53125 0 42.664063-19.136719 42.664063-42.667969s-19.132813-42.667968-42.664063-42.667968-42.667969 19.136718-42.667969 42.667968 19.136719 42.667969 42.667969 42.667969zm0 0"/>
                <path :fill="svgColor" d="m458.652344.492188h-320c-29.394532 0-53.332032 23.9375-53.332032 53.335937v234.664063c0 29.398437 23.9375 53.335937 53.332032 53.335937h320c29.398437 0 53.335937-23.9375 53.335937-53.335937v-234.664063c0-29.398437-23.9375-53.335937-53.335937-53.335937zm-320 42.667968h320c5.890625 0 10.667968 4.777344 10.667968 10.667969v151.445313l-67.390624-78.636719c-7.148438-8.382813-17.496094-12.863281-28.609376-13.117188-11.050781.0625-21.417968 4.96875-28.5 13.460938l-79.234374 95.101562-25.8125-25.75c-14.589844-14.589843-38.335938-14.589843-52.90625 0l-58.878907 58.859375v-201.363281c0-5.890625 4.777344-10.667969 10.664063-10.667969zm0 0"/>
            </svg>
        </div>

        <div class="rounded-lg border border-gray-300 p-4" v-show="showCanvas">
            <canvas ref="canvas" class="w-full h-auto"></canvas>
        </div>
    </tool-page>
</template>

<script>
import ToolPage from '../../components/ToolPage.vue';
import TextInput from '../../components/TextInput.vue';

export default {
    name: 'ImageGenerator',
    components: {
        ToolPage,
        TextInput,
    },
    data() {
        return {
            width: 1024,
            widthError: '',
            height: 768,
            heightError: '',
            svgColor: '#ffffff',
            backgroundColor: '#eeeeee',
            showCanvas: false,
        };
    },
    methods: {
        validateInput() {
            // eslint-disable-next-line
            this.widthError = !(!isNaN(this.width) && parseInt(Number(this.width)) == this.width && !isNaN(parseInt(this.width, 10)));
            // eslint-disable-next-line
            this.heightError = !(!isNaN(this.height) && parseInt(Number(this.height)) == this.height && !isNaN(parseInt(this.height, 10)));

            if (this.widthError || this.heightError) {
                this.showCanvas = false;
            } else {
                this.showCanvas = true;
            }

            return this.showCanvas;
        },
        setCanvas() {
            if (!this.validateInput()) {
                return;
            }

            this.$refs.canvas.width = this.width;
            this.$refs.canvas.height = this.height;
            const ctx = this.$refs.canvas.getContext('2d');
            ctx.fillStyle = this.backgroundColor;
            ctx.fillRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);

            const xml = new XMLSerializer().serializeToString(this.$refs.svg);
            const img = document.createElement('img');
            img.src = `data:image/svg+xml;base64,${btoa(xml)}`;

            ctx.drawImage(img, (this.width / 2 - this.computedWidth / 2), (this.height / 2 - this.computedWidth / 2));

            this.$refs.link.href = this.$refs.canvas.toDataURL('image/jpg');
            this.$refs.link.download = `${this.width}x${this.height}.jpg`;
        },
    },
    computed: {
        computedWidth() {
            if (parseInt(this.width, 10) < parseInt(this.height, 10)) {
                return this.width / 4;
            }

            return this.height / 4;
        },
    },
};
</script>
