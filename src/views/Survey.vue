<template>
  <div class="hidden-sm-and-up main">
  
    <div class="inner-wrapper">
      <div class="text-center">
        <v-dialog v-model="dialog" persistent width="500">
          <v-card>
            <v-card-title  class="headline" primary-title> Read Carefully</v-card-title>
            <v-card-text class="text-justify mt-2">
              This is not a Test, so there are no wrong answers.The Spritual Gift Survey consist of 80 statements. Some items reflect concrete actions,   descriptive traits and statements of belief.
              Do not spend too much time on any item.Remember, its not a test. Usually your immediate response is best.
              Please give an answer for each item, do not skip. Your Response choice are between the range of 1 to 5, click twice to confirm your choice. God bless :)
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">got it</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <v-row class="mx-4" style='justify-content: center;'>
        <v-col xs="12 " class="mt-12">
          <v-card outlined class="pa-2 mb-3 " color="#b8bedd" v-for="(survey, index) in surveys" :key="index" :id="index" >
            <p> <span id="number">Q{{index+1}}. </span >{{survey.question}}</p>
            <v-radio-group row  dense v-model.number="survey.value">
              <v-radio color="#2a4494" label="1" value="1"></v-radio>
              <v-radio color="#2a4494" label="2" value="2"></v-radio>
              <v-radio color="#2a4494" label="3" value="3"></v-radio>
              <v-radio color="#2a4494" label="4" value="4"></v-radio>
              <v-radio color="#2a4494" label="5" value="5"></v-radio>
            </v-radio-group>
          </v-card>
        </v-col>
      </v-row>
      <v-btn id="" class="mx-8 my-6" color="#2a4494"  dark large router to="/result">s u b m i t</v-btn>       
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      dialog : true,
    }
  },

  computed : {
    surveys() {
      return this.$store.state.surveys;
    }
  },
 
}




</script>

<style lang="scss" scoped>


.main {
 // background-color:#f0e6ef;
  //margin-bottom: 10px;

}

p {
  font-family : 'Kodchasan', sans-serif;
  font-weight:bold;
  color:#2a4494;
  padding: 2px;
  text-align: justify;

  #number {
    font-size: 20px;
    margin: 0 10px ;
  } 

}

#button {
  margin: 30px 130px;

}



</style>