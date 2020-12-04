<template>
  <div id="list-item" class="indices fadeIn">
    <div class="empresa item">{{data.nemotecnico}}</div>
    <div class="flechaAMA item"></div>
    <!--<div class="ultimo item">-</div>-->
    <div class="item">
      <div
        :class="[{ number: animated }, variation]"
        class="variation_number"
        @animationend="animated = false"
      >{{data.variacion_porcentaje | round(2)}}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
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
}

.indices {
  height: 35px;
  font-size: 17px;
  font-family: 'DIN_medium';
  color: #fff;
  display: flex;
  justify-content: space-around;
}

.item {
  margin: 0 auto;
  align-self: center;
  flex: 1;
  display: flex;
  justify-content: center;
}

.empresa {
  justify-content: flex-start;
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