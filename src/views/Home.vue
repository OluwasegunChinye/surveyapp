<template>
  <div class="main hidden-sm-and-up"> 
    <v-container >
      <p class="font-weight-bold text-center mt-7" id="title" >Spiritual Growth Survey</p>
      <p class="font-weight-bold text-capitalize text-center mt-12 mb-0">The body of Christ and your part</p>
      <p class="font-weight-light text-justify px-3 mx-6" id="content">Every Christian is given at least one gift at conversion. Our initial gift may lie dormant for a while as we mature. These gifts seem to remain with believers throughout their lives. One can have more than one( 1 ) gift as ministry increases and the need for manisfestation of these gifts increase.</p>
      <p class="font-weight-bold text-capitalize text-left ml-9 mt-12 mb-0 ">love to identify your gifts?</p>
      <p class="font-weight-light text-justify px-3 mx-6" id="content2">If your answer is 'yes', click button to take a quick survey.</p>

      <div class="mt-10 ml-8">
        <v-btn dark large color="#00cecb" class="text-capitalize" router to="/survey">get started</v-btn>
      </div>
    
    </v-container>
    
    
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  
}

</script>

<style lang="scss" scoped>

.main {
  font-family: 'Kodchasan', sans-serif;
  background-image: url("../assets/mobileBg.svg");
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  position : absolute;
  background-size: cover;
  color: #1b3b6f;
}

#title {
  font-size: 22px;
  letter-spacing: 2px;
}

#content {
  font-size: 12px;
}

#content2 {
  font-size: 12px;
}
</style>