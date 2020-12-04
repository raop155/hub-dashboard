<template>
  <div id="indexes">
    <div class="datosUP">
      <div class="tituloDatos">MÁS TRANSADAS</div>
      <div class="columnaDato">
        <Index v-for="item in indexes.slice(0, 8)" :key="item.nemotecnico" :index="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Index from '../Index.vue';

import axios from 'axios';

export default {
  name: 'Indexes',
  components: {
    Index
  },
  props: {
    token: String
  },
  data: () => {
    return {
      indexes: []
    };
  },
  mounted() {
    this.getIndexes();
    // this.timer = setInterval(this.getIndexes, 1000);
  },
  methods: {
    getIndexes() {
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
            '/api/Accion/MayoresMontosCL',
          params,
          headers
        )
        .then(response => {
          //console.log(response.data);
          if (JSON.stringify(this.indexes) !== JSON.stringify(response.data)) {
            this.indexes = response.data;
            console.log('Indexes - new data');
          } else {
            // console.log('They are equal!');
          }

          this.getIndexes();
        })
        .catch(error => {
          if (error.response) {
            console.log('data', error.response.data);
            //console.log('status', error.response.status);
            //console.log('headers', error.response.headers);
          }
          // console.log('config', error.config);
          this.getIndexes();
        });
    }
  },
  beforeDestroy() {
    // clearInterval(this.timer);
  }
};
</script>

<style scoped>
#indexes {
  margin-top: 30px;
}

.datosUP {
  width: 100%;
  height: 330px;
}

.tituloDatos {
  width: 166px;
  height: 23px;
  background-color: #999;
  color: #353534;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
}

.columnaDato {
  width: 850px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
}
</style>
