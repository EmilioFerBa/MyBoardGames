<template>
    <div id="GameSection">
        <div class="game-card" v-for="game in filteredGames " :key="game.id" @click="showGame(game.id)">
            <h2>{{ game.name }}</h2>
            <img :src="`images/${game.image}`" :alt="game.name">
            <section class="info">
                <span>{{ game.minplayers }} - {{ game.maxplayers }} jugadores</span>
                <span>{{ game.minplaytime }} - {{ game.maxplaytime }} minutos</span>
            </section>
            <section>
                <span class="categories" v-for="cat in game.categories" :key="cat">{{ cat }}</span>
            </section>
            <p class="short-description">{{ game.longdescription }}</p>
        </div>
        <game-detail v-show="detailsId" :gameId="detailsId" ref="GameDetail"/>
    </div>
</template>

<script>
import gamesData from '../assets/data/games.json'
import GameDetail from './gameDetail.vue'

export default {
    components: { GameDetail },
    props: {
        allFilters: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        games: gamesData,
        detailsId: NaN
        }
    },
    computed: {
        filteredGames() {
            return this.games.filter(game => {
                const matchesPlayers = this.allFilters.players ? (game.minplayers <= parseInt(this.allFilters.players) && game.maxplayers >= parseInt(this.allFilters.players)) : true;
                const matchesTime = this.allFilters.time && this.allFilters.time > 0 ? (parseInt(this.allFilters.time) >= game.maxplaytime || (game.minplaytime <= parseInt(this.allFilters.time) && game.maxplaytime >= parseInt(this.allFilters.time))) : true;
                const matchesGameType = this.allFilters.gametype.length > 0 ? this.allFilters.gametype.some(type => game.categories.includes(type)) : true;
                return matchesPlayers && matchesTime && matchesGameType;
            });
        }
    },
    methods: {
        showGame(id) {
            this.detailsId = id;
            document.getElementById('GameDetail').showModal();
        }
    }
}
</script>