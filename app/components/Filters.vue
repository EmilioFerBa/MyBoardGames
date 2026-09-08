<template>
    <div id="FiltersSection">
        <section class="filter-content">
            <div>
                <h3 class="filter-title">Número de jugadores: {{ allFilters.players }}</h3>
                <input type="number" name="players" id="playersInput" placeholder="¿Cuántos jugadores sois?" v-model="allFilters.players">
            </div>
            <div id="timeFilter">
                <h3 class="filter-title">Duración: {{ allFilters.time }} min</h3>
                <section id="timeSection">
                    <input type="range" min="0" max="120" step="15" class="range-slider" v-model="allFilters.time"
                        :style="{'--progress': (allFilters.time / 120) * 100 + '%'}"> 
                </section>
            </div>
            <div>
                <h3>Tipo de juego</h3>
                <section id="GameTypeSection" class="options">
                    <button v-for="option in gametype" :key="option" :value="option" @click="toggleGameTypeFilter(option); $event.target.blur()"
                    :class="{active: allFilters.gametype.includes(option)}">{{ option }}</button>
                </section>
            </div>
            <div>
                <h3>Ordenación <button @click="toggleTypeOrder(); $event.target.blur()" :class="{active: allFilters.typeOrder === 'asc'}">
                        {{ allFilters.typeOrder === 'asc' ? 'Ascendente' : 'Descendente' }}</button></h3>
                <section id="OrderSection" class="options">
                    <button v-for="option, value in orderByOptions" :key="value" :value="value" @click="setOrderBy(value); $event.target.blur()"
                    :class="{active: allFilters.orderBy === value}">{{ option }}</button>
                    
                </section>
            </div>
            
            
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
            orderByOptions: {'minplaytime': 'Tiempo mínimo',
                             'maxplaytime': 'Tiempo máximo',
                             'minplayers': 'Jugadores mínimos',
                             'maxplayers': 'Jugadores máximos'}
        }
    },
    methods: {
        toggleGameTypeFilter(option) {
            if(this.allFilters.gametype.includes(option)) {
                this.allFilters.gametype = this.allFilters.gametype.filter(item => item !== option);
                return;
            }
            this.allFilters.gametype.push(option);
        },
        toggleTypeOrder() {
            this.allFilters.typeOrder = this.allFilters.typeOrder === 'asc' ? 'desc' : 'asc';
        },
        setOrderBy(value) {
            this.allFilters.orderBy = this.allFilters.orderBy === value ? '' : value;
        }
    }
}
</script>

<style scoped>

</style>