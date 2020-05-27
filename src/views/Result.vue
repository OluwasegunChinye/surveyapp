<template>
  <div>
    <v-container>
      <v-row class="mx-4 mt-8" style='justify-content: center;'>
        <v-col xs="12" sm="6" md="6">
          <v-progress-linear :value="leadership" color="blue-grey" ></v-progress-linear>

          <v-progress-circular :value="80" color="deep-orange lighten-2" ></v-progress-circular>
          <p >5+5 = {{surveys[0].value + surveys[1].value}}</p>
          <p> 4 = {{surveys[2].value}}</p>
        </v-col>
      </v-row>
    </v-container>
    
    
  </div>

</template>


<script>
import { mapGetters } from 'vuex';

export default {

  data() {
    return {
    
    }
  },

  computed: {
    surveys() {
      return this.$store.state.surveys;
    },
    ...mapGetters ([
      'leadership',
      'administration',
      'teaching',
      'knowledge',
      'wisdom',
      'prophecy',
      'discernment',
      'exhortation',
      'shepherding',
      'faith',
      'evangelism',
      'apostleship',
      'serviceHelps',
      'mercy',
      'giving',
      'hospitality'
    ])
  }
}
</script>

<style lang="scss" scoped>




</style>