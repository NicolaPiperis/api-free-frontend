<script>
    import axios from 'axios';

    export default {
    components: {
    }
    , 
    data() {
        return {
        posts: [],
        };
    },
    mounted () {
        axios.get('http://localhost:3000/posts/all').
        then( (res) => {
        this.posts = res.data;
        }
        )
    }
    };
</script>

<template>

    <div id="elenco-post" v-for="post in posts">
        <h2>Titolo: {{ post.title }}</h2>
        <div>Slug: {{ post.slug }}</div>
        <div>Descrizione: {{ post.content }}</div>
        <div>Path immagine: {{ post.image }}</div>
        <div :class="{ 'green-text': post.published, 'red-text': !post.published }">
            E' un post pubblicato: 
            {{ post.published ? 'Yes' : 'No' }}
        </div>
    </div>

</template>

<style scoped>
div{
    color: white;
    padding: 7px;
}
#elenco-post{
    padding: 20px;
}
.green-text {
  color: green;
  font-weight: bold;
}

.red-text {
  color: red;
  font-weight: bold;
}
</style>