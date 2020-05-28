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
      {question: 'I can delegate and assign meaningful work.',value:0, id:17},
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
      {question: 'I often am consulted when fellow Christains are struggling to make difficult decisions.',value:0, id:48},
      {question: 'I think about how i can comfort and encourage others in my congregation.',value:0, id:49},
      {question: 'I am able to give spiritual direction to others.',value:0, id:50},
      {question: 'I am able to present the gospel to lost persons in such a way that they accept the Lord and His salvation.',value:0, id:51},
      {question: 'I possess an unusual capacity to understand the feelings of those in distress.',value:0, id:52},
      {question: 'I have a strong sense of stewardship based on the recognition that God owns all things.',value:0, id:53},
      {question: 'I have delivered to other persons messages that have come directly from God.',value:0, id:54},
      {question: 'I can sense when a person is acting under Gods leadership.',value:0, id:55},
      {question: 'I try to be in Gods will continually and be available for His use.',value:0, id:56},
      {question: 'I feel that i should take the gospel to people who have different beliefs from me.',value:0, id:57},
      {question: 'I have an acute awareness of the physical needs of others.',value:0, id:58},
      {question: 'I am skilled in setting forth positive and precise steps of action.',value:0, id:59},
      {question: 'I like to meet visitors at church and make them feel welcome.',value:0, id:60},
      {question: 'I explain Scripture in such a way that others understand it.',value:0, id:61},
      {question: 'I can usually see spiritual solutions to problems.',value:0, id:62},
      {question: 'I welcome opportunities to help people who need comfort, consolation, encouragement, and counseling.',value:0, id:63},
      {question: 'I feel at ease in sharing Christ with non-believers.',value:0, id:64},
      {question: 'I can influence others to perform to their highest God-given potential.',value:0, id:65},
      {question: 'I recognize the signs of stress and distress in others.',value:0, id:66},
      {question: 'I desire to give generously and unpretentiously to worthwhile projects and ministries.',value:0, id:67},
      {question: 'I can organize facts into the meaningful relationships.',value:0, id:68},
      {question: 'God gives me messages to deliver to His people.',value:0, id:69},
      {question: 'I am able to sense whether people are being honest when they tell of their religious experiences.',value:0, id:70},
      {question: 'I enjoy presenting the gospel to persons of other cultures and backgrounds.',value:0, id:71},
      {question: 'I enjoy doing little that help people.',value:0, id:72},
      {question: 'I can give a clear, uncomplicated presentation.',value:0, id:73},
      {question: 'I have been able to apply biblical truth to the specific needs of my church.',value:0, id:74},
      {question: 'God has used me to encourage others to live Christ-like lives.',value:0, id:75},
      {question: 'I have sensed the need to help other people become more effective in their ministries.',value:0, id:76},
      {question: 'I like to talk about Jesus to those who do not know Him.',value:0, id:77},
      {question: 'I have the ability to make strangers feel comfortable in my home.',value:0, id:78},
      {question: 'I have a wide range of study resources and know how to secure information.',value:0, id:79},
      {question: 'I feel assured that a situation will change for the glory of God even when the situation seem impossible.',value:0, id:80},

    ],

  },
  getters: {
      leadership: state=> {
        var a = state.surveys[5].value ;
        var b = state.surveys[15].value;
        var c = state.surveys[26].value;
        var d = state.surveys[42].value;
        var e = state.surveys[64].value;
        return (a + b + c + d + e)*4; 
      },
      administration: state=> {
        var f = state.surveys[0].value ;
        var g = state.surveys[16].value;
        var h = state.surveys[30].value;
        var i = state.surveys[46].value;
        var j = state.surveys[49].value;
        return (f + g + h + i + j)*4; 
      },
      teaching: state=> {
        var k = state.surveys[1].value ;
        var l = state.surveys[17].value;
        var m = state.surveys[32].value;
        var n = state.surveys[60].value;
        var o = state.surveys[72].value;
        return (k + l + m + n + o)*4; 
      },
      knowledge: state=> {
        var p = state.surveys[8].value ;
        var q = state.surveys[23].value;
        var r = state.surveys[38].value;
        var s = state.surveys[67].value;
        var t = state.surveys[78].value;
        return (p + q + r + s + t)*4; 
      },
      wisdom: state=> {
        var u = state.surveys[2].value ;
        var v = state.surveys[18].value;
        var w = state.surveys[47].value;
        var x = state.surveys[61].value;
        var y = state.surveys[73].value;
        return (u + v + w + x + y)*4; 
      },
      prophecy: state=> {
        var aa = state.surveys[9].value ;
        var ba = state.surveys[24].value;
        var ca = state.surveys[39].value;
        var da = state.surveys[53].value;
        var ea = state.surveys[68].value;
        return (aa + ba + ca + da + ea)*4; 
      },
      discernment: state=> {
        var fa = state.surveys[10].value ;
        var ga = state.surveys[25].value;
        var ha = state.surveys[40].value;
        var ia = state.surveys[54].value;
        var ja = state.surveys[69].value;
        return (fa + ga + ha + ia + ja)*4; 
      },
      exhortation: state=> {
        var ka = state.surveys[19].value ;
        var la = state.surveys[33].value;
        var ma = state.surveys[48].value;
        var na = state.surveys[62].value;
        var oa = state.surveys[74].value;
        return (ka + la + ma + na + oa)*4; 
      },
      shepherding: state=> {
        var pa = state.surveys[3].value ;
        var qa = state.surveys[20].value;
        var ra = state.surveys[34].value;
        var sa = state.surveys[49].value;
        var ta = state.surveys[75].value;
        return (pa + qa + ra + sa + ta)*4; 
      },
      faith: state=> {
        var ua = state.surveys[11].value ;
        var va = state.surveys[27].value;
        var wa = state.surveys[41].value;
        var xa = state.surveys[55].value;
        var ya = state.surveys[79].value;
        return (ua + va + wa + xa + ya)*4; 
      },
      evangelism: state=> {
        var ab = state.surveys[4].value ;
        var bb = state.surveys[35].value;
        var cb = state.surveys[4].value;
        var db = state.surveys[63].value;
        var eb = state.surveys[78].value;
        return (ab + bb + cb + db + eb)*4; 
      },
      apostleship: state=> {
        var ac = state.surveys[12].value ;
        var bc = state.surveys[28].value;
        var cc = state.surveys[43].value;
        var dc = state.surveys[56].value;
        var ec = state.surveys[70].value;
        return (ac + bc + cc + dc + ec)*4; 
      },
       serviceHelps: state=> {
        var ad = state.surveys[13].value ;
        var bd = state.surveys[29].value;
        var cd = state.surveys[45].value;
        var dd = state.surveys[57].value;
        var ed = state.surveys[71].value;
        return (ad + bd + cd + dd + ed)*4; 
      },
      mercy: state=> {
        var ae = state.surveys[6].value ;
        var be = state.surveys[21].value;
        var ce = state.surveys[36].value;
        var de = state.surveys[51].value;
        var ee = state.surveys[65].value;
        return (ae + be + ce + de + ee)*4; 
      },
      giving: state=> {
        var af = state.surveys[7].value ;
        var bf = state.surveys[22].value;
        var cf = state.surveys[37].value;
        var df = state.surveys[52].value;
        var ef = state.surveys[66].value;
        return (af + bf + cf + df + ef)*4; 
      },
      hospitality: state=> {
        var ag = state.surveys[14].value ;
        var bg = state.surveys[31].value;
        var cg = state.surveys[44].value;
        var dg = state.surveys[59].value;
        var eg = state.surveys[77].value;
        return (ag + bg + cg + dg + eg)*4; 
      },
  },

  mutations: {
  },
  actions: {
  },

})
