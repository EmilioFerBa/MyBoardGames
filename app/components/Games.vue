<template>
    <div id="GameSection">
        <div class="game-card" v-for="game in filteredGames " :key="game.id" @click="showGame(game.id)">
            <h2>{{ game.name }}</h2>
            <img :src="`images/${game.name}/${game.image}`" :alt="game.name">
            <section class="info">
                <span>{{ getPlayers(game) }} <Icon name="mdi:account-multiple"/></span>
                <span>{{ getTime(game) }} <Icon name="mdi:clock-outline"/></span>
            </section>
            <section>
                <span class="categories" v-for="cat in game.categories" :key="cat">{{ cat }}</span>
            </section>
            <p class="short-description">{{ game.longdescription }}</p>
        </div>
        <game-detail v-if="selectedGame" :selectedGame="selectedGame" ref="GameDetail"/>
    </div>
</template>

<script>
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
            selectedGame: {}
        }
    },
    methods: {
        getPlayers(game) {
            if (game.minplayers === game.maxplayers) {
                return `${game.minplayers}`;
            }
            return `${game.minplayers}-${game.maxplayers}`;
        },
        getTime(game) {
            if (game.minplaytime === game.maxplaytime) {
                return `${game.minplaytime}`;
            }
            return `${game.minplaytime}-${game.maxplaytime}`;
        },
        showGame(id) {
            this.selectedGame = this.filteredGames.find(game => game.id === id);
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