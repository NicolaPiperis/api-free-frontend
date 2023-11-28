<script setup>

</script>

<template>

    <footer>
        <div id="container">

            <section>
                <h2>
                    Chi siamo
                </h2>
                <ul>
                    <li>Una nuova piattaforma social pronta a sfidare le big</li>
                    <li>Applicazione Blog semplice da usare</li>
                </ul>
            </section>

            <section>
                <h2>
                    I nostri clienti
                </h2>
                <ul>
                    <li>Elon Musk</li>
                    <li>Jerry Scotti</li>
                    <li>Cristiano Ronaldo</li>
                </ul>
            </section>

            <section>
                <h2>
                    Contatti
                </h2>
                <ul>
                    <li>Email: blog@gmail.com</li>
                    <li>Sedi a Roma e Milano</li>
                </ul>
            </section>

        </div>
    </footer>

</template>

<style scoped>
    footer {
        width: 100%;
        height: 150px;
        background-color: pink;
        position: fixed;
        bottom: 0;
        border-top: 1px solid white;
    }
    #container{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    section{
        height: 90%;
        width: 20%;
        border-radius: 10px;
        border: 1px white solid;
    }
    h2{
        text-align: center;
        font-size: 15px;
        padding: 5px;
    }
    ul{
        padding: 10px;
        list-style-type:none ;
    }
    li{
        padding: 5px;
        font-size: 13px;
    }
</style>
