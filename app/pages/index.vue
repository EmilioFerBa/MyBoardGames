<template>
    <div class="main">
        <Hero />
        <div class="content">
            <Filters :allFilters="allFilters"/>
            <Games :allFilters="allFilters"/>
        </div>
    </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Filters from '~/components/Filters.vue'
import Games from '~/components/Games.vue'

export default {
    data() {
        return {
            allFilters: {
                players: null,
                time: 0,
                gametype: []
            },
        }
    },
    components: {Hero, Filters, Games}
}
</script>
