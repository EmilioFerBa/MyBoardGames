<template>
    <div id="GameSection">
        <div class="game-card" v-for="game in filteredGames " :key="game.id" @click="showGame(game.id)">
            <h2>{{ game.name }}</h2>
            <img :src="`images/${game.image}`" :alt="game.name">
            <section class="info">
                <span>{{ game.minplayers }} - {{ game.maxplayers }} <Icon name="mdi:account-multiple"/></span>
                <span>{{ game.minplaytime }} - {{ game.maxplaytime }} <Icon name="mdi:clock-outline"/></span>
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
        },
        filteredGames: {
            type: Array,
            default: () => []
        },
        randomGame: {
            type: Number,
            default: NaN
        }
    },
    data() {
        return {
            detailsId: NaN
        }
    },
    methods: {
        showGame(id) {
            this.detailsId = id;
            document.getElementById('GameDetail').showModal();
        }
    },
    watch: {
        randomGame(newVal) {
            if (!isNaN(newVal)) {
                this.showGame(newVal);
            }
        }
    }
}
</script>