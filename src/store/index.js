import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    surveys: [
      {question: 'I have the ability to organize ideas, resources, time and people effectively.',value:0, id:1},
      {question: 'I am willing to study and prepare for the task of teaching.',value:0, id:2},
      {question: 'I am able to relate the truths of God to specific situations.',value:0, id:3},
      {question: 'I have a God-given ability to help others grow in their faith.',value:0, id:4},
      {question: 'I possess a special ability to communicate the truth of salvation. ',value:0, id:5},
      {question: 'I have the ability to make critical decisions when necessary.',value:0, id:6},
      {question: 'I am sensitive to the hurts of people.',value:0, id:7},
      {question: 'I experience joy in meeting needs through sharing possessions.',value:0, id:8},
      {question: 'I enjoy studying.',value:0, id:9},
      {question: 'I have delivered Gods message of warning and judgement.',value:0, id:10},
      {question: 'I am able to sense the true motivation of persons and movements.',value:0, id:11},
      {question: 'I have a special ability to trust God in difficult situations.',value:0, id:12},
      {question: 'I have a strong desire to contribute to the establishment of new churches.',value:0, id:13},
      {question: 'I take action to meet physical and practical needs rather than merely talking about or planning help.',value:0, id:14},
      {question: 'I enjoy entertaining guests in my home.',value:0, id:15},
      {question: 'I can adapt my guidance to fit the maturity of those working with me.',value:0, id:16},
      {question: 'I can delegate and assign mmeaningful work.',value:0, id:17},
      {question: 'I have an ability and desire to teach.',value:0, id:18},
      {question: 'I am usually able to analyze a situation correctly.',value:0, id:19},
      {question: 'I have a natural tendency to encourage others.',value:0, id:20},
      {question: 'I am willing to take the initiative in helping other Christians grow in thier faith.',value:0, id:21},
      {question: 'I have an acute awareness of the emotions of other people, such as loneliness, pain, fear and anger.',value:0, id:22},
      {question: 'I am a cheerful giver.',value:0, id:23},
      {question: 'I spend time digging into facts.',value:0, id:24},
      {question: 'I feel that i have a message from God to deliver to others.',value:0, id:25},
      {question: 'I can recognize when a person is genuine/honest.',value:0, id:26},
      {question: 'I am a person of vision (a clear mental portrait of a preferable future given by God).I am able to communicate vision in such a waythat others commit to making the vision a reality',value:0, id:27},
      {question: 'I am willing to yield to Gods will rather than question and waver.',value:0, id:28},
      {question: 'I would like to be more active in getting the gospel to poeple in other lands.',value:0, id:29},
      {question: 'I makes me happy to do things for people in need.',value:0, id:30},
      {question: 'I am successful in getting groups to do its works joyfully.',value:0, id:31},
      {question: 'I am able to make strangers feel at ease.',value:0, id:32},
      {question: 'I have the ability to plan learning approaches.',value:0, id:33},
      {question: 'I can identify those who need encouragement.',value:0, id:34},
      {question: 'I have trained Christians to be more obedient disciples of Christ.',value:0, id:35},
      {question: 'I am willing to do whatever it takes to see others come to Christ.',value:0, id:36},
      {question: 'I am attracted to people whon are hurting.',value:0, id:37},
      {question: 'I am a generous giver.',value:0, id:38},
      {question: 'I am able to discover new truths.',value:0, id:39},
      {question: 'I have spiritual insights from Scripture concerning issues and people that compel me to speak.',value:0, id:40},
      {question: 'I can sense when a person is acting in accord with Gods will.',value:0, id:41},
      {question: 'I can trust in God even when things look dark.',value:0, id:42},
      {question: 'I can determine where God wants a group to go and help it get there.',value:0, id:43},
      {question: 'I have a strong desire to take the gospel to places where it has never been heard.',value:0, id:44},
      {question: 'I enjoy reaching out to new people in my church and community.',value:0, id:45},
      {question: 'I am sensitive to the needs of people.',value:0, id:46},
      {question: 'I have been able to make effective and efficient plans for accomplishing the goals of a group.',value:0, id:47},
























    ],
  },
  getters: {
      leadership: state=> {
        var a = state.surveys[0].value ;
        var b = state.surveys[1].value;
        return a + b; 
      }
  },

  mutations: {
  },
  actions: {
  },

})
