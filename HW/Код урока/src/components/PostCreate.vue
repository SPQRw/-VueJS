<template>
    <div class="container col-8" style="margin-top: 20px;">
        <div class="card p-2 mb-4">
            <textarea class="card mb-2" v-model="textarea"></textarea>
            <button class="btn btn-primary" @click="addPost(textarea)">Отправить</button>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'PostCreate',
        data() {
            return {
                textarea: ""
            }
        },
        props: {
            
        },
        methods: {
            addPost(data) {
                this.$emit("createPost", data);
            }
        }
    }
</script>

<style>

</style>