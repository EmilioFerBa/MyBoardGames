<template>
    <dialog id="GameDetail" closedby="any" >
        <div class="modal-content" v-if="selectedGame">
            <section id="headerModal">
                <h1>{{ selectedGame.name }}</h1>
                <img :src="`images/${selectedGame.image}`" :alt="selectedGame.name">
            </section>
            <section>
                <div class="info">
                    <span>{{ selectedGame.minplayers }} - {{ selectedGame.maxplayers }} jugadores</span>
                    <span>{{ selectedGame.minplaytime }} - {{ selectedGame.maxplaytime }} minutos</span>
                </div>
                <section >
                    <span class="categories" v-for="cat in selectedGame.categories" :key="cat">{{ cat }}</span>
                </section>
                <p>{{ selectedGame.longdescription }}</p>
            </section>
            
        </div>
        
        <form method="dialog">
            <button>Cerrar</button>
        </form>
    </dialog>
</template>

<script>
import gamesData from '../assets/data/games.json'
export default {
    props: {
        gameId: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            // Aquí podrías tener un objeto para el juego seleccionado
            games: gamesData
        }
    },
    computed: {
        selectedGame() {
            return this.games.find(game => game.id === this.gameId);
        }
    }
}
</script>