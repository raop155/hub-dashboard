<template>
  <div class="calugaDato fadeIn">
    <div :class="trend(index.variacion_porcentaje)"></div>
    <ul>
      <li class="txtcalugaB">{{index.nemotecnico}}:</li>
      <li class="txtcalugaB">{{index.valor | currencyFormat}}</li>
      <li :class="trendVariation(index.variacion_porcentaje)">{{index.variacion_porcentaje}}%</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexInternational',
  props: {
    index: Object
  },
  methods: {
    trend(value) {
      if (value > 0) {
        return 'verde';
      } else if (value < 0) {
        return 'rojo';
      } else {
        return 'gray';
      }
    },
    trendVariation(value) {
      if (value > 0) {
        return 'txtcalugaV';
      } else if (value < 0) {
        return 'txtcalugaR';
      } else {
        return 'txtcalugaB';
      }
    }
  },
  filters: {
    currencyFormat: function(value) {
      return (
        value
          .toString()
          // .toFixed(2) // always two decimal digits
          .replace('.', ',') // replace decimal point character with ,
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      ); // use . as a separator
    }
  },
  updated: function() {
    // console.log('Index updated!', this.index.nemotecnico);
  }
};
</script>

<style scoped>
.calugaDato {
  width: 180px;
  height: 100px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.09);
  margin-bottom: 35px;
}
.verde {
  width: 3px;
  height: 100px;
  background-image: url(../assets/verde.png);
  background-position: center;
  background-repeat: no-repeat;
}
.rojo {
  width: 3px;
  height: 100px;
  background-image: url(../assets/rojo.png);
  background-position: center;
  background-repeat: no-repeat;
}
.gray {
  width: 3px;
  height: 100px;
  background-image: url(../assets/gris.png);
  background-position: center;
  background-repeat: no-repeat;
}

.txtcalugaB {
  font-size: 17px;
  font-family: 'DIN_medium';
  color: #fff;
  margin: 5px 0 5px 0;
}

.txtcalugaV {
  font-size: 17px;
  font-family: 'DIN_medium';
  color: #93b367;
  margin: 5px 0 5px 0;
}
.txtcalugaR {
  font-size: 17px;
  font-family: 'DIN_medium';
  color: #f3484d;
  margin: 5px 0 5px 0;
}

ul li {
  list-style: none;
}

ul {
  margin: 0px;
  padding: 0px;
  text-align: center;
  width: 150px;
  margin-left: 10px;
  margin-top: 10px;
}

ul li:first-child {
  /* text-align: start; */
}

.fadeIn {
  animation-name: fadeIn;
  animation-duration: 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>