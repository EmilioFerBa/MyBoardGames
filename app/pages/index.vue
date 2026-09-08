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
                gametype: [],
                orderBy: '',
                typeOrder: 'desc'
            },
            gamesData: gamesData,
            randomGame: NaN
        }
    },
    computed: {
        filteredGames() {
            const  filtered = this.gamesData.filter(game => {
                const matchesPlayers = this.allFilters.players ? (game.minplayers <= parseInt(this.allFilters.players) && game.maxplayers >= parseInt(this.allFilters.players)) : true;
                const matchesTime = this.allFilters.time && this.allFilters.time > 0 ? parseInt(this.allFilters.time) >= game.maxplaytime : true;
                const matchesGameType = this.allFilters.gametype.length > 0 ? this.allFilters.gametype.some(type => game.categories.includes(type)) : true;
                return matchesPlayers && matchesTime && matchesGameType;
            })
            if(this.allFilters.orderBy) {
                return filtered.sort((a, b) => {
                    const fieldA = a[this.allFilters.orderBy];
                    const fieldB = b[this.allFilters.orderBy];
                    if (this.allFilters.typeOrder === 'asc') {
                        return fieldA - fieldB;
                    } else {
                        return fieldB - fieldA;
                    }
                });
            }
            return filtered;
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
