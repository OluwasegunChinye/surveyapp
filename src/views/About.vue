<template>
    <div class="hidden-sm-and-up mx-6 my-1 about" >
        <v-btn router to="/" text fab ><v-icon color="#5a189a">fas fa-arrow-left</v-icon></v-btn>
        
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
                    <p>Firstly, the content of the Spiritual Gifts Survey App is credited to the Bible Study Outline by Sis Moyin at Ketu House Fellowship Lagos, the study included a take home survey in hard copy. Source of Survey is <a v-bind:href ="website"  target="_blank" style="text-decoration:none;">Lifeway Christain Resources</a></p>
                </v-col>
            </v-row>
            <v-row class="mt-7">
                <v-col class="text-justify">
                    <h2>So.....</h2>
                    <p>I participated in the survey exercise and rigth there the thought of having the survey in electronic format seemed a cool idea.... how else was i suppose to practice what i have learned ?. You see, am not a tech person by profession but sometime ago i decided to  learn the basics of programming. Thanks to google and youtube i am self taught green horn. With the current lock down situation i just had to take it up as a project to test my knowledge...So here we have it...the app.</p>
                </v-col>
            </v-row>
            <v-row class="mt-12">
                <v-col>
                    <p>Built and Designed by <a v-bind:href="me"  target="_blank" style="text-decoration:none;"><v-icon color="yellow">far fa-grin-stars</v-icon> </a> with <v-icon color="red" small >fas fa-heart</v-icon> using <v-icon color="#00cecb" small >fab fa-vuejs</v-icon></p>
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
                me: "https://twitter.com/SegunChinye",
            }
        },
    }

</script>

<style lang="scss" scoped>

.about {
    font-family : 'Kodchasan', sans-serif;
    font-size: 11px;
}


</style>