<template>
  <div class="wrapper hidden-sm-and-up" >
  
    <div class="inner-wrapper">
      <v-row class="mx-4 mt-8">
        <v-col cols="12">
          <v-card outlined class="pa-2">
            <p> <span>Q1. </span>Are you a super start? {{survey.age}} </p>
            <v-radio-group row>
              <v-radio label="1" value="1"></v-radio>
              <v-radio label="2" value="2"></v-radio>
              <v-radio label="3" value="3"></v-radio>
              <v-radio label="4" value="4"></v-radio>
              <v-radio label="5" value="5"></v-radio>
            </v-radio-group>
          </v-card>
        </v-col>
      </v-row>    
    </div>
  </div>
  
  
</template>

<script>
export default {
  
  data() {
    return {
      survey: {
        name : "Jones",
        age: 105
      }
    }
  }  
}
</script>

<style lang="scss" scoped>




</style>