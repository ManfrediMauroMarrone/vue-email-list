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
      const self = this;
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(risposta) {
          console.log(risposta);
          console.log(risposta.data.response);
          // self.mailList.mail1 = risposta.data.response;
          self.mailList.mail1 = risposta.data.response
          self.mailList.mail2 = risposta.data.response
          self.mailList.mail3 = risposta.data.response
          let mailList = self.mailList
          let mail = risposta.data.response
          console.log(mail);
          for (var element in mailList) {
            element = mail
            console.log(element);
          }
        });

    }
});
