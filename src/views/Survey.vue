<template>
  <div class="" >
  
    <div class="inner-wrapper">
      <v-row class="mx-4 mt-8" style='justify-content: center;'>
        <v-col xs="12" sm="6" md="6">
          <v-card outlined class="pa-2 mb-2" v-for="(survey, index) in surveys" :key="index"  >
            <p> <span>Q{{index+1}} </span>{{survey.question}}</p>
            <v-radio-group row dense v-model="survey.value">
              <v-radio label="1" value="1"></v-radio>
              <v-radio label="2" value="2"></v-radio>
              <v-radio label="3" value="3"></v-radio>
              <v-radio label="4" value="4"></v-radio>
              <v-radio label="5" value="5"></v-radio>
            </v-radio-group>
            asnwer = {{survey.value}} id={{survey.id}}
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

    }
  },
  computed : {
    surveys() {
      return this.$store.state.surveys;
    }
  }
}




</script>

<style lang="scss" scoped>




</style>