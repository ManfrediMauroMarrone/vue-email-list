var app = new Vue({
    el: '#root',
    data: {

      listaMail: [],
    },

    methods: {
      getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    },

    mounted() {
      for (var i = 0; i < 10; i++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((risposta) => {
          this.listaMail.push(risposta.data.response)
          this.loaded = true

        });

      };

    },


});
