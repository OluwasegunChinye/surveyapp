<template>

  <div class="hidden-sm-and-up mx-6 mt-12" >
    <div class="mb-4 main">
      <div class="d-flex flex-column mx-8 ">
        <div class="d-flex ">
          <v-card-text>Leadership</v-card-text>
          <v-progress-circular :value="leadership" :width="5" :size="50" color="blue-grey" >{{leadership}}</v-progress-circular>
        </div>
       <div class="d-flex ">
          <v-card-text>Administration</v-card-text>
          <v-progress-circular :value="administration" :width="5" :size="50"  color="blue-grey" >{{administration}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Teaching</v-card-text>
          <v-progress-circular :value="teaching" :width="5" :size="50"  color="blue-grey" >{{teaching}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Knowledge</v-card-text>
          <v-progress-circular :value="knowledge" :width="5" :size="50"  color="blue-grey" >{{knowledge}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Wisdom</v-card-text>
          <v-progress-circular :value="wisdom" :width="5" :size="50"  color="blue-grey" >{{wisdom}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Prophecy</v-card-text>
          <v-progress-circular :value="prophecy" :width="5" :size="50"  color="blue-grey" >{{prophecy}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Discernment</v-card-text>
          <v-progress-circular :value="discernment" :width="5" :size="50"  color="blue-grey" >{{discernment}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Exhortation</v-card-text>
          <v-progress-circular :value="exhortation" :width="5" :size="50"  color="blue-grey" >{{exhortation}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Shepherding</v-card-text>
          <v-progress-circular :value="shepherding" :width="5" :size="50"  color="blue-grey" >{{shepherding}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Faith</v-card-text>
          <v-progress-circular :value="faith" :width="5" :size="50"  color="blue-grey" >{{faith}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Evangelism</v-card-text>
          <v-progress-circular :value="evangelism" :width="5" :size="50"  color="blue-grey" >{{evangelism}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Apostleship</v-card-text>
          <v-progress-circular :value="apostleship" :width="5" :size="50"  color="blue-grey" >{{apostleship}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Sevice/Helps</v-card-text>
          <v-progress-circular :value="serviceHelps" :width="5" :size="50"  color="blue-grey" >{{serviceHelps}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Mercy</v-card-text>
          <v-progress-circular :value="mercy" :width="5" :size="50"  color="blue-grey" >{{mercy}}</v-progress-circular>
        </div>
        <div class="d-flex ">
          <v-card-text>Giving</v-card-text>
          <v-progress-circular :value="giving" :width="5" :size="50"  color="blue-grey" >{{giving}}</v-progress-circular>
        </div><div class="d-flex ">
          <v-card-text>Hospitality</v-card-text>
          <v-progress-circular :value="hospitality" :width="5" :size="50"  color="blue-grey" >{{hospitality}}</v-progress-circular>
        </div>

        
      </div>
    </div>    
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