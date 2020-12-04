<template>
  <div class="calugaDato fadeIn">
    <!--<div :class="trend(index.monto_acumulado)"></div>-->
    <div class="gray"></div>
    <ul>
      <li class="txtcalugaB">{{index.nemotecnico}}:</li>
      <li class="txtcalugaB">{{index.monto_acumulado | currencyFormat}}</li>
      <!--<li :class="trendVariation(index.monto_acumulado)">-%</li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
      // var formatted = '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      var formatted = value
        .toFixed(0)
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
      return formatted;
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
  margin: 8px 0 0px 0;
  font-size: 17px;
  font-family: 'DIN_medium';
  color: #fff;
}

.txtcalugaV {
  font-size: 17px;
  font-family: 'DIN_medium';
  color: #93b367;
}
.txtcalugaR {
  font-size: 17px;
  font-family: 'DIN_medium';
  color: #f3484d;
}

ul li {
  list-style: none;
  margin-bottom: 5px;
}
ul {
  margin: 0px;
  padding: 0px;
  text-align: center;
  width: 150px;
  margin-left: 10px;
  margin-top: 20px;
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