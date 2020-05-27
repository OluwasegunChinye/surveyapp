<template>
  <div class="" >
  
    <div class="inner-wrapper">
      <div class="text-center">
        <v-dialog v-model="dialog" persistent width="500">
          <v-card>
            <v-card-title  class="headline" primary-title> Read Carefully</v-card-title>
            <v-card-text class="text-justify mt-2">
              This is not a Test, so there are no wrong answers.The Spritual Gift Survey consist of 80 statements. Some items reflect concrete actions,descriptive traits and statements of belief.
              Do not spend too much time on any item.Remember,its not a test. Usually your immediate response is best.
              Please give an answer for each item, do not skip any item. Your Response choice are between the range of 1 to 5. Good bless :)
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">got it</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <v-row class="mx-4 mt-8" style='justify-content: center;'>
        <v-col xs="12" sm="6" md="6">
          <v-card outlined class="pa-2 mb-2" v-for="(survey, index) in surveys" :key="index" :id="index" >
            <p> <span>Q{{index+1}} </span>{{survey.question}}</p>
            <v-radio-group row dense v-model.number="survey.value">
              <v-radio label="1" value="1"></v-radio>
              <v-radio label="2" value="2"></v-radio>
              <v-radio label="3" value="3"></v-radio>
              <v-radio label="4" value="4"></v-radio>
              <v-radio label="5" value="5"></v-radio>
            </v-radio-group>
          </v-card>
        </v-col>
      </v-row> 
      <v-btn router to="/result">Submit</v-btn>   
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




</style>