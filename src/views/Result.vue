<template>

  <div class="hidden-sm-and-up mx-6 mt-4 ">

      <!-- dialog + modal pop up here -->

      <v-dialog v-model= "dialog" persistent width="300" height="50" >
        <v-card color="#5a189a" dark>
          <v-card-text class="pa-5">
            loading.....
            <v-progress-linear  indeterminate color="white" class="mb-0" ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- code ends here here -->


    <div class="mb-4 main">

    <v-btn router to="/" text fab ><v-icon color="#5a189a">fas fa-arrow-left</v-icon></v-btn>

    <!--- intro card for result page here  -->

      <v-container>
        <v-card dark color="#5a189a">
          <v-card-title>Hurray !!!</v-card-title>
        </v-card>
      </v-container>

     <!-- code ends here here -->   

      <div class="d-flex flex-column mx-8 ">
        <div class="d-flex ">
          <v-card-text>Leadership</v-card-text>
          <v-progress-circular :value="leadership" :width="5" :size="50" color="#ffbd00" >{{leadership}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
       <div class="d-flex ">
          <v-card-text>Administration</v-card-text>
          <v-progress-circular :value="administration" :width="5" :size="50"  color="#06d6a0" >{{administration}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Teaching</v-card-text>
          <v-progress-circular :value="teaching" :width="5" :size="50"  color="#f20089" >{{teaching}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Knowledge</v-card-text>
          <v-progress-circular :value="knowledge" :width="5" :size="50"  color="#c44900" >{{knowledge}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Wisdom</v-card-text>
          <v-progress-circular :value="wisdom" :width="5" :size="50"  color="#8ac926" >{{wisdom}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Prophecy</v-card-text>
          <v-progress-circular :value="prophecy" :width="5" :size="50"  color="#1f2c93" >{{prophecy}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Discernment</v-card-text>
          <v-progress-circular :value="discernment" :width="5" :size="50"  color="#ff6392" >{{discernment}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Exhortation</v-card-text>
          <v-progress-circular :value="exhortation" :width="5" :size="50"  color="#462255" >{{exhortation}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Shepherding</v-card-text>
          <v-progress-circular :value="shepherding" :width="5" :size="50"  color="#30f2f2" >{{shepherding}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Faith</v-card-text>
          <v-progress-circular :value="faith" :width="5" :size="50"  color="#f08a4b" >{{faith}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Evangelism</v-card-text>
          <v-progress-circular :value="evangelism" :width="5" :size="50"  color="#7b1e7a" >{{evangelism}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Apostleship</v-card-text>
          <v-progress-circular :value="apostleship" :width="5" :size="50"  color="#f46036" >{{apostleship}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Sevice/Helps</v-card-text>
          <v-progress-circular :value="serviceHelps" :width="5" :size="50"  color="#0a1128" >{{serviceHelps}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Mercy</v-card-text>
          <v-progress-circular :value="mercy" :width="5" :size="50"  color="#8f2d56" >{{mercy}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Giving</v-card-text>
          <v-progress-circular :value="giving" :width="5" :size="50"  color="#06d6a0" >{{giving}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
        <div class="d-flex ">
          <v-card-text>Hospitality</v-card-text>
          <v-progress-circular :value="hospitality" :width="5" :size="50"  color="#283618" >{{hospitality}}</v-progress-circular>
        </div>
        <v-divider></v-divider>
      </div>

    <v-container>
      <v-card class="text-justify pa-2" dark color="#5a189a">
        <v-card-title>Hello again..</v-card-title>
        <v-card-text class="white--text">The Gifts with the highest percentage score indicates your area of strenght and vice versa. Ask God to help you know how He has gifted you for service and how you can begin to use this gift in ministry to others. God bless you.  </v-card-text>
      </v-card>
    </v-container>

     <!--  code for dynamic effect button here..below  -->
    
       <!-- <v-speed-dial v-model="fab" absolute :left='left' :direction='direction' style="margin : 20px 0px 20px 10px;" :transition="transition">
          <v-btn slot="activator" fab large v-model="fab" color="#5a189a">
               <v-icon color="white">fas fa-check</v-icon>
          </v-btn>
          <v-btn fab color="" router to="/"><v-icon color="">fas fa-home</v-icon></v-btn>
          <v-btn fab  color="" router to="/survey"><v-icon color="">far fa-edit</v-icon></v-btn>
          <v-btn fab color="" router to="/about"><v-icon color="">far fa-grin-stars</v-icon></v-btn>
        </v-speed-dial> -->

        <!--  BELOW :- decided to settle for a simpe arrow icon to redirect user to homepage -->

        <v-btn router to="/" text fab ><v-icon color="#5a189a">fas fa-arrow-left</v-icon></v-btn>
    </div>
  </div>

</template>


<script>
import { mapGetters } from 'vuex';

export default {

  data() {
    return {
      dialog: true,
    //  direction: 'right',
    //  fab: false,
     // fling: false,
     // hover: false,
     // tabs: null,
     // top: false,
     // right: true,
     // bottom: true,
     // left: false,
     // transition: 'slide-x-transition',
    }
  },
  
 mounted () {

   return setTimeout(() => (this.dialog = false), 8000);
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