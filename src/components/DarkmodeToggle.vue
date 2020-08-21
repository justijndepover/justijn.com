<template>
    <div class="rounded-full w-12 h-6 bg-red-300 dark:bg-green-300 relative cursor-pointer" @click="darkmode = !darkmode">
        <div class="transition absolute w-5 h-5 bg-gray-200 dark:bg-gray-300 rounded-full m-1/2 left-0 shadow" :class="darkmode ? 'left-6' : ''"></div>
    </div>
</template>

<script>
    export default {
        props: ["value"],
        data() {
            return {
                darkmode: false,
            }
        },
        mounted() {
            this.darkmode = this.value;
        },
        watch: {
            darkmode(val) {
                if (val) {
                    document.documentElement.classList.add('darkmode');
                    document.cookie = "darkmode=true";
                } else {
                    document.documentElement.classList.remove('darkmode');
                    document.cookie = "darkmode=false";
                }
            }
        }
    }
</script>

<style scoped>
    .m-1\/2 {
        margin: 0.125rem;
    }

    .transition {
        transition: all ease .5s;
    }

    .left-6 {
        left: 1.5rem;
    }
</style>