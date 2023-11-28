<script setup>

</script>

<template>

    <header>
        <nav>

            <div>
                <a href="#">
                    <router-link :to="{ name: 'home' }">Blog</router-link>
                </a>
            </div>

            <div id="container-crud">
                <div>
                    <a href="#">
                        <router-link :to="{ name: 'index' }">Index</router-link>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <router-link :to="{ name: 'create' }">Create</router-link>
                    </a>
                </div>
            </div>

        </nav>
    </header>

</template>

<style scoped>
    header{
        height: 120px;
        background-color: pink;
        position: fixed;
        width: 100%;
        top: 0;
        border-bottom: 1px solid white;
    }

    a{
        text-decoration: none;
        color: black;
        font-size: 20px;
    }
    nav{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    #container-crud{
        width: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

</style>
