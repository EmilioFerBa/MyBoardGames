<template>
    <dialog id="GameDetail" closedby="any" >
        <div class="modal-content" v-if="selectedGame">
            <form method="dialog">
                <button class="close-button"><Icon class="close-icon" name="mdi:close-circle-outline"/></button>
            </form>
            
            <section id="headerModal">
                <h1>{{ selectedGame.name }}</h1>
                <div ref="slider" class="slider">
                    <img v-for="image in images" :key="image" :src="`images/${selectedGame.name}/${image}`" :alt="selectedGame.name">
                </div>
            </section>
            <section>
                <div class="info">
                    <span>{{ totalPlayers }} <Icon name="mdi:account-multiple"/></span>
                    <span>{{ totalPlaytimes }} <Icon name="mdi:clock-outline"/></span>
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
        selectedGame: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            // Aquí podrías tener un objeto para el juego seleccionado
            games: gamesData
        }
    },
    computed: {
        hasSelectedGame() {
            return Object.keys(this.selectedGame).length > 0;
        },
        images() {
            return this.hasSelectedGame ? [this.selectedGame.image, ...this.selectedGame.galery] : [];
        },
        totalPlayers() {
            if (this.selectedGame.minplayers === this.selectedGame.maxplayers) {
                return this.selectedGame.minplayers;
            }
            return this.hasSelectedGame ? `${this.selectedGame.minplayers} - ${this.selectedGame.maxplayers}` : '';
        },
        totalPlaytimes() {
            if (this.selectedGame.minplaytime === this.selectedGame.maxplaytime) {
                return this.selectedGame.minplaytime;
            } 
            return this.hasSelectedGame ? `${this.selectedGame.minplaytime} - ${this.selectedGame.maxplaytime}` : '';
        }
    },
    watch: {
        selectedGame() {
            this.$nextTick(() => {
                if (this.$refs.slider) {
                    this.$refs.slider.scrollLeft = 0
                }
            })
        }
    },
}
</script>