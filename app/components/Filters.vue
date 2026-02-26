<template>
    <div id="FiltersSection">
        <section id="playersSection">
            <h3>Número de jugadores: {{ allFilters.players }}</h3>
            <input type="number" name="players" id="playersInput" placeholder="¿Cuántos jugadores sois?" v-model="allFilters.players">
            <h3>Duración</h3>
            <section id="timeSection">
                <input type="range" min="0" max="120" step="15" class="range-slider" v-model="allFilters.time"
                       :style="{'--progress': (allFilters.time / 120) * 100 + '%'}"> {{ allFilters.time }} min 
                <!--<button v-for="option in timeOptions" :key="option" :value="option" @click="toggleTimeFilter(option)" :class="{active: allFilters.time.includes(option)}">{{ option }}</button>
                <label class="switch" v-for="option in timeOptions" :key="option" :value="option">
                    <input type="checkbox" name="time" :id="option">
                    <span class="slider"></span>
                    <span class="label-text">{{ option }}</span>
                </label>-->
            </section>
            <h3>Tipo de juego</h3>
            <section id="GameTypeSection" class="options">
                <button v-for="option in gametype" :key="option" :value="option" @click="toggleGameTypeFilter(option)"
                 :class="{active: allFilters.gametype.includes(option)}">{{ option }}</button>
                <!--<label class="switch" v-for="option in gametype" :key="option" :value="option">
                    <input type="checkbox" name="gametype" :id="option">
                    <span class="slider"></span>
                    <span class="label-text">{{ option }}</span>
                </label>-->
            </section>
            
        </section>
    </div>
</template>

<script>
export default {
    props: {
        allFilters: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            playersOptions: ['2-3', '4-5', '6+'],
            timeOptions: ['0-30 min', '30-60 min', '60+ min'],
            gametype: ['Cooperativo', 'Competitivo', 'Familiar', 'Estrategia', 'Party', 'Abstracto', "Juego de Cartas"],
        }
    },
    methods: {
        toggleGameTypeFilter(option) {
            if(this.allFilters.gametype.includes(option)) {
                this.allFilters.gametype = this.allFilters.gametype.filter(item => item !== option);
                return;
            }
            this.allFilters.gametype.push(option);
            console.log(`Filtro de tipo de juego seleccionado: ${option}`);
        }
    }
}
</script>

<style scoped>

</style>