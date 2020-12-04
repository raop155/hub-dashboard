<template>
  <div id="list-item" class="fadeIn">
    <div class="name">{{data.nemotecnico}}</div>
    <div class="linea"></div>
    <div class="indices">
      <div class="item calendar">
        <img src="@/assets/ico_calendario.png" />
        <span class="calendar__text">{{data.fecha | parseDate}}</span>
      </div>
      <div class="item hour">
        <img src="@/assets/ico_reloj.png" />
        <span class="hour__text">{{data.fecha | parseHour}}</span>
      </div>
      <div class="item value">
        <span class="value__text">{{data.valor | currencyFormat}}</span>
      </div>
      <div class="item variation">
        <div
          :class="[{ number: animated }, variation]"
          class="variation_number"
          @animationend="animated = false"
        >{{data.variacion_porcentaje | round(2)}}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItemInternational',
  props: {
    data: [Array, Object]
  },
  data: () => {
    return {
      variation: null,
      animated: false
    };
  },
  mounted() {
    this.trend(this.data.variacion_porcentaje);
  },
  computed: {
    variationChange() {
      return this.data.variacion_porcentaje;
    }
  },
  methods: {
    trend(value) {
      if (value > 0) {
        this.variation = 'green';
      } else if (value < 0) {
        this.variation = 'red';
      } else {
        this.variation = 'gray';
      }
    },
    animate() {
      this.animated = true;
    }
  },
  filters: {
    round: function(value, decimal) {
      // value = (Math.round(value * 100) / 100).toFixed(decimal);
      value = value.toFixed(decimal);
      return value;
    },
    parseDate: function(value) {
      // value = (Math.round(value * 100) / 100).toFixed(decimal);
      value = value.split('T')[0];

      // var year = value.split('-')[0];
      var month = value.split('-')[1];
      var day = value.split('-')[2];

      value = day + '/' + month;
      return value;
    },
    parseHour: function(value) {
      // value = (Math.round(value * 100) / 100).toFixed(decimal);
      value = value.split('T')[1].split('.')[0];

      var hours = value.split(':')[0];
      var minutes = value.split(':')[1];
      // var seconds = value.split(':')[2];

      value = hours + ':' + minutes;

      return value;
    },
    currencyFormat: function(value) {
      return (
        value
          //.toString()
          .toFixed(2) // always two decimal digits
          .replace('.', ',') // replace decimal point character with ,
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      ); // use . as a separator
    }
  },
  watch: {
    variationChange: function(newVal, oldVal) {
      //data: function(newVal) {

      console.log(
        this.data.nemotecnico,
        'Prop changed: ',
        newVal,
        ' | was: ',
        oldVal
      );

      this.trend(newVal);
      this.animate();
    }
  },
  updated: function() {
    // console.log('ListItem updated!', this.data.nemotecnico);
  }
};
</script>

<style scoped>
#list-item {
  height: 50px;
  font-size: 17px;
  font-family: 'DIN_UltraLight';
  color: #fff;
  margin-bottom: 10px;
}

.indices {
  display: flex;
  justify-content: space-around;
}

.calendar {
  display: flex;
  align-items: center;
}

.calendar__text {
  padding-top: 5px;
  margin-left: 5px;
}

.hour {
  display: flex;
  align-items: center;
}

.hour__text {
  padding-top: 5px;
  margin-left: 5px;
}

.value {
  display: flex;
  align-items: center;
}

.value__text {
  padding-top: 5px;
  margin-left: 5px;
}

.name {
  font-family: 'DIN_medium';
}

.linea {
  height: 1px;
  width: 100%;
  background-color: #4c4c4c;
}

.item {
  margin: 0 auto;
  align-self: center;
  flex: 1;
  display: flex;
  justify-content: center;
}

.flechaAMA {
  height: 33px;
  width: 30px;
  background-image: url(../assets/flecha_amarillo.png);
  background-position: center;
  background-repeat: no-repeat;
}
.ultimo {
  text-align: center;
}

.variation_number {
  font-family: 'DIN_medium';
  font-size: 15px;
  width: 70px;
  height: 28px;
  border-radius: 20px;
  text-align: center;
  line-height: 28px;
  margin: 0 auto;
  transition: background-color 1s;
}
.green {
  background-color: #93b367;
}

.red {
  background-color: #f3484d;
}

.gray {
  background-color: #ccc;
}

.number {
  animation-name: glow;
  animation-duration: 0.5s;
  /*animation-iteration-count: 3;*/
}

.number {
  animation-name: glow;
  animation-duration: 0.5s;
  /*animation-iteration-count: 3;*/
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

@keyframes glow {
  100% {
    background-color: #fff;
  }
}
</style>