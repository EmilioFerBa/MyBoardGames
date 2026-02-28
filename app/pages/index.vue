<template>
    <div class="main">
        <Hero :filteredGames="filteredGames" @randomGame="showGameDetails"/>
        <div class="content">
            <Filters :allFilters="allFilters"/>
            <Games :allFilters="allFilters" :filteredGames="filteredGames" :randomGame="randomGame"/>
        </div>
    </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Filters from '~/components/Filters.vue'
import Games from '~/components/Games.vue'
import gamesData from '../assets/data/games.json'

export default {
    data() {
        return {
            allFilters: {
                players: null,
                time: 0,
                gametype: []
            },
            gamesData: gamesData,
            randomGame: NaN
        }
    },
    computed: {
        filteredGames() {
            return this.gamesData.filter(game => {
                const matchesPlayers = this.allFilters.players ? (game.minplayers <= parseInt(this.allFilters.players) && game.maxplayers >= parseInt(this.allFilters.players)) : true;
                const matchesTime = this.allFilters.time && this.allFilters.time > 0 ? (parseInt(this.allFilters.time) >= game.maxplaytime || (game.minplaytime <= parseInt(this.allFilters.time) && game.maxplaytime >= parseInt(this.allFilters.time))) : true;
                const matchesGameType = this.allFilters.gametype.length > 0 ? this.allFilters.gametype.some(type => game.categories.includes(type)) : true;
                return matchesPlayers && matchesTime && matchesGameType;
            });
        }
    },
    methods:{
        showGameDetails(gameId) {
            this.randomGame=gameId;
        }
    },
    components: {Hero, Filters, Games}
}
</script>
