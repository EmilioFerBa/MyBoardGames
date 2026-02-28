<template>
    <div id="HeroSection">
        <section id="MainTitles">
            <h1>🎲¿Que jugamos hoy?</h1>
            <h2>Filtra, elige y lo llevo</h2>
        </section>
        <section id="mainButtons">
            <button>Ver todos</button>
            <button @click="randomGame()">🎲Sorpréndenos</button>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        filteredGames: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        randomGame() {
            const randomIndex = Math.floor(Math.random() * this.filteredGames.length);
            this.$emit('randomGame', this.filteredGames[randomIndex].id);
        }
    }
}
</script>


<style scoped>

</style>