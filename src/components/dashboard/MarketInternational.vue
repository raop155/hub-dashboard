<template>
  <div id="marketList">
    <div class="content">
      <ListInternational title="MONEDAS" :items="coins" />
      <ListInternational title="COMMODITIES" :items="commodities" />
    </div>
  </div>
</template>

<script>
import ListInternational from '../ListInternational.vue';

import axios from 'axios';
// import markets from '../../tests/markets.json';

export default {
  name: 'MarketInternational',
  components: {
    ListInternational
  },
  props: {
    token: String
  },
  data: () => {
    return {
      coins: [],
      commodities: [],
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

      // let params = {};

      // console.log('this.token', this.token);

      axios
        .get(
          process.env.VUE_APP_VALOR_FUTURO_API_URL + '/api/Consorcio/Resumen',
          headers
        )
        .then(response => {
          //console.log(response.data);
          if (
            JSON.stringify(this.commodities) !==
            JSON.stringify(response.data.commodities)
          ) {
            this.commodities = response.data.commodities;
            console.log('MarketInternational commodities - new data');
          } else {
            // console.log('They are equal!');
          }

          if (
            JSON.stringify(this.coins) !== JSON.stringify(response.data.monedas)
          ) {
            this.coins = response.data.monedas;
            console.log('MarketInternational monedas - new data');
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