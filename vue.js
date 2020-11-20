var app = new Vue({
    el: '#root',
    data: {

      mailList :{
        mail1:'',
        mail2:'',
        mail3:'',
        mail4:'',
        mail5:'',
        mail6:'',
        mail7:'',
        mail8:'',
        mail9:'',
        mail10:'',
      }

    },

    mounted() {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((risposta) => {
          this.mailList.mail1 = risposta.data.response

        }).then((risposta) => {
          console.log(risposta);
          

        });
    }
});
