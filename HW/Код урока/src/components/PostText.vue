<template>
    <div class="row container justify-content-center">
        <div class="card col-8 p-2 mb-4" v-for="post in posts" v-bind:key="post.id">
            {{ post.text }}
            <div class="row card-body">
                <button @click="toggleCommentView" class="btn btn-primary mb-2 col-2 offset-10">
                    <i class="fas fa-comment-alt-plus"></i>
                </button>
                <button @click="post.likes++" class="btn btn-danger mb-2 col-2 offset-10">
                    <i class="fas fa-heart"></i> {{ post.likes }}
                </button>
                <div class="row card-body" v-if="addCommentView">
                    <textarea class="card mb-2" cols="30" rows="3" v-model="commentInput"></textarea>
                    <button @click="sendComment(post, commentInput)" class="btn btn-primary self-align-right">Отправить</button>
                </div>
            </div>
            <div class="row card-body">
                <p v-for="(comment, index) in post.comments" :key="index">{{ index }}: {{ comment }}</p>
            </div>
        </div>
    </div>
   
</template>

<script>
    export default {
        name: 'PostText',
        props: ["posts"],
        data() {
            return {
                addCommentView: false,
                commentInput: ""
            }
        },
        methods: {
            toggleCommentView() {
                this.addCommentView = true
            },
            sendComment(post, comment) {
                post.comments.push(comment);
                this.addCommentView = false;
                console.log("post", post)
            }
        }
    }
</script>

<style>

</style>