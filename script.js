Vue.component('counter', {
  props:['message'],
  data:function(){
    return{
      count:0
    }
  },
  
})

var app =new Vue({
  el:"#app",
  data:{
    name1:"Protagonist",
    codename1:"Joker",
    name2:"Anne",
    codename2:"Panther",
    name3:"Ryuji",
    codename3:"Skull",
    text:"",
    text2:"",
    mess:"",
    mess2:"",
   
  },
  computed:{
    fullName: function(){
      var twisted = this.fName+" "+this.lName;
      return twisted.split('').reverse().join('');
    }
  },
  watch:{
    text: function(){
      if(this.text.length<2){
        this.mess="Needs to have at least 2 characters "
      }else{(this.text.length>2)
        this.mess=""
      }
    }, 
   
    text2: function(){
      if(this.text2.length<12){
        this.mess2="Email needs to be formated like this example@domain.com"
      }else{
        this.mess2="Submitted" 
        }
     }
    }
  
  
      
  

})