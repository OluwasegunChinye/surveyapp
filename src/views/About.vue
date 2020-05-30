<template>
    <div class="hidden-sm-and-up mx-6 my-12 about" >
        <v-btn router to="/" text ><v-icon color="#5a189a">fas fa-arrow-left</v-icon></v-btn>
        
        <v-container>
            <v-row class="text-justify">
                <v-col class="col-5">
                        <h2>A</h2>
                        <h2>little</h2>
                        <h2>something</h2>
                        <h2>about</h2>
                        <h2>the</h2>
                        <h2>app.</h2>
                </v-col>
                <v-col class="text-justify col-7">
                    <p>Firstly, the content of the Spiritual Gifts Survey App is credited to the Bible Study Outline by Sis Moyin at Ketu House Fellowship Lagos, the study included a take home survey in hard copy. Soruce of Survey is <a v-bind:href ="website"  target="_blank" style="text-decoration:none;">Lifeway Christain Resources</a></p>
                </v-col>
            </v-row>
            <v-row class="mt-6">
                <v-col class="text-justify">
                    <h2>So.....</h2>
                    <p>I participated in the survey exercise and rigth there the idea of having the survey in electronic format seemed a cool thing to do. I am not a tech person by profession, but basic understanding of Tech is adds an extra feather to the cap in a driven Tech world) i am self taught and how else was i suppose to practice what i have learned ...so there we have it.</p>
                    
                </v-col>
            </v-row>
            <v-row class="mt-12">
                <v-col>
                    <p>Built by <v-icon color="yellow">far fa-grin-stars</v-icon>  with <v-icon color="red" >fas fa-heart</v-icon> using <v-icon color="#00cecb" >fab fa-vuejs</v-icon> for the year 2020</p>
                </v-col> 
            </v-row>
        </v-container>
    </div>




</template>

<script>

    export default {

        data(){
            return {
                website:'https://www.lifeway.com/',
            }
        },
    }

</script>

<style lang="scss" scoped>

.about {
    font-family : 'Kodchasan', sans-serif;
    font-size: 11px;
}
#header{

}

</style>