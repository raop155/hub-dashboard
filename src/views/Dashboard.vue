<template>
  <div id="dashboard">
    <MediaPlayer />
    <div id="data">
      <div class="sector">
        <Top />
        <Indexes :token="token" v-if="token" v-show="showIndex == 'local'" />
        <IndexesInternational :token="token" v-if="token" v-show="showIndex == 'international'" />
        <Legal />
      </div>
      <div class="sector">
        <Market :token="token" v-if="token" v-show="showMarket == 'local'" />
        <MarketInternational :token="token" v-if="token" v-show="showMarket == 'international'" />
        <Legal />
      </div>
    </div>
  </div>
</template>

<script>
import MediaPlayer from '../components/MediaPlayer.vue';
import Top from '../components/dashboard/Top.vue';
import Indexes from '../components/dashboard/Indexes.vue';
import IndexesInternational from '../components/dashboard/IndexesInternational.vue';
import Market from '../components/dashboard/Market.vue';
import MarketInternational from '../components/dashboard/MarketInternational.vue';
import Legal from '../components/Legal.vue';

import axios from 'axios';

export default {
  name: 'Dashboard',
  components: {
    MediaPlayer,
    Top,
    Indexes,
    IndexesInternational,
    Market,
    MarketInternational,
    Legal
  },
  data: () => {
    return {
      token: null,
      timer: null,
      timerIndexes: null,
      showIndex: 'local',
      showMarket: 'local',
      counter: 0,
      error: ''
    };
  },
  mounted() {
    console.log('Dashboard mounted!');

    this.getToken();
    this.timer = setInterval(this.getToken, 60000 * 1);
    this.timerIndexes = setInterval(this.changeIndexes, 60000 * 2.5);

    // process.env.NODE_ENV;
    console.log(
      'process.env.VUE_APP_VALOR_FUTURO_TOKEN_URL',
      process.env.VUE_APP_VALOR_FUTURO_TOKEN_URL
    );
  },
  methods: {
    getToken() {
      let headers = {
        headers: {
          'Content-type': 'text/plain'
        }
      };
      let params = 'UserName=bsantander&Password=Santand3R&grant_type=password';

      console.log(process.env.VUE_APP_VALOR_FUTURO_TOKEN_URL + '/oauth/token');

      axios
        .post(
          process.env.VUE_APP_VALOR_FUTURO_TOKEN_URL + '/oauth/token',
          params,
          headers
        )
        .then(response => {
          console.log(response.data);

          this.token = response.data.access_token;
          this.counter++;
        })
        .catch(error => {
          if (error.response) {
            console.log('data', error.response.data);
            //console.log('status', error.response.status);
            //console.log('headers', error.response.headers);
          }
          console.log('config', error.config);
        });

      console.log('counter', this.counter);
    },
    changeIndexes() {
      if (this.showIndex == 'local') {
        this.showIndex = 'international';
        this.showMarket = 'international';
      } else {
        this.showIndex = 'local';
        this.showMarket = 'local';
      }

      console.log('showIndex to', this.showIndex);
      console.log('showMarket to', this.showMarket);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.timerIndexes);
  }
};
</script>

<style scoped>
#dashboard {
  width: 960px;
  height: 1080px;
}

#data {
  position: relative;
}

.sector {
  width: 100%;
  height: 50%;
}
</style>
