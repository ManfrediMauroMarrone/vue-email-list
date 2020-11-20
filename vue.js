var app = new Vue({
    el: '#root',
    data: {

      listaMail: [],

    },

    mounted() {
      for (var i = 0; i < 10; i++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((risposta) => {
          this.listaMail.push(risposta.data.response)

        });

      }
      
    },


});
