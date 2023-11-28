  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newPost: {
          title: '',
          image: '',
          content: '',
          published: true,
        },
        categories: [],
        tags: []
      };
    },
    mounted() {
    },
    methods: {
      createNewPost() {
        axios.post('http://localhost:3000/posts/', this.newPost)
          .then(() => {
            // Reindirizza a 'home' dopo la creazione del post
            this.$router.push({ name: 'home' });
          })
          .catch((error) => {
            console.error('Errore durante la creazione del post:', error);
          });
      }
    }
  };
  </script>
<template>
    <div id="create">
      <h1>Crea il tuo Post</h1>
  
      <form @submit.prevent="createNewPost">
  
        <br>
  
        <label for="title">Titolo </label>
        <input type="text" id="title" name="title" v-model="newPost.title">
        <br>
  
        <label for="image">Path dell'immagine: </label>
        <input type="text" id="image" name="image" v-model="newPost.image">
        <br>
  
        <label for="content">Descrizione: </label>
        <input type="text" id="content" name="content" v-model="newPost.content">
        <br>
  
  
        <br>
  
        <input type="submit" value="Pubblica">
      </form>
    </div>
  </template>
  
  
  <style scoped>
    #create{
        padding: 20px;
        color: white;
    }

    h1{
        text-align: center;
    }
  </style>
  