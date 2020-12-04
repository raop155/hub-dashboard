<template>
  <div id="indexes">
    <div class="datosUP">
      <div class="tituloDatos">INDICES</div>
      <div class="columnaDato">
        <IndexInternational
          v-for="item in indexes.slice(0, 8)"
          :key="item.nemotecnico"
          :index="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IndexInternational from '../IndexInternational.vue';

import axios from 'axios';

export default {
  name: 'IndexesInternational',
  components: {
    IndexInternational
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
            JSON.stringify(this.indexes) !==
            JSON.stringify(response.data.indices)
          ) {
            this.indexes = response.data.indices;
            console.log('IndexesInternational - new data');
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
