<template>
  <div id="marketList">
    <div class="content">
      <List title="MAYORES ALZAS" :items="higher" />
      <List title="MENORES ALZAS" :items="lower" />
    </div>
  </div>
</template>

<script>
import List from '../List.vue';

import axios from 'axios';
// import markets from '../../tests/markets.json';

export default {
  name: 'marketList',
  components: {
    List
  },
  props: {
    token: String
  },
  data: () => {
    return {
      higher: [],
      lower: [],
      timer: null,
      counter: 0,
      error: ''
    };
  },
  mounted() {
    this.getMarkets();
    // this.timer = setInterval(this.getMarkets, 1000);
  },
  methods: {
    getMarkets() {
      let headers = {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      };

      let params = {};

      // console.log('this.token', this.token);

      axios
        .post(
          process.env.VUE_APP_VALOR_FUTURO_API_URL +
            '/api/Accion/MayoresAlzasCL',
          params,
          headers
        )
        .then(response => {
          //console.log(response.data);

          if (JSON.stringify(this.higher) !== JSON.stringify(response.data)) {
            this.higher = response.data;
            console.log('Market higher - new data');
          } else {
            // console.log('They are equal!');
          }
        })
        .catch(error => {
          if (error.response) {
            console.log('data', error.response.data);
            //console.log('status', error.response.status);
            //console.log('headers', error.response.headers);
          }
          // console.log('config', error.config);
        });

      axios
        .post(
          process.env.VUE_APP_VALOR_FUTURO_API_URL +
            '/api/Accion/MayoresBajasCL',
          params,
          headers
        )
        .then(response => {
          //console.log(response.data);
          if (JSON.stringify(this.lower) !== JSON.stringify(response.data)) {
            this.lower = response.data;
            console.log('Market lower - new data');
          } else {
            // console.log('They are equal!');
          }

          this.getMarkets();
        })
        .catch(error => {
          if (error.response) {
            console.log('data', error.response.data);
            //console.log('status', error.response.status);
            //console.log('headers', error.response.headers);
          }
          // console.log('config', error.config);
          this.getMarkets();
        });

      this.counter++;
      // console.log('getMarkets', this.counter);
    }
  },
  beforeDestroy() {
    // clearInterval(this.timer);
  }
};
</script>

<style scoped>
#marketList {
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 55px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}
</style>