<template>
  <div id="top">
    <div class="topIND">
      <div class="titutoTOP">Indices Financieros</div>
      <div class="fecha txt16">
        <img src="@/assets/ico_fecha.png" />
        {{date | moment('dddd DD [de] MMMM') | upperCase}}
      </div>
      <div class="hora txt16">
        <img src="@/assets/ico_hora.png" />
        {{date | moment('hh:mm A')}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data: () => {
    return {
      date: new Date(),
      test: '',
      timer: null
    };
  },
  mounted() {
    this.timer = setInterval(this.getDate, 1000);
  },
  methods: {
    getDate() {
      this.date = new Date();
    }
  },

  filters: {
    upperCase: value => {
      return value.toUpperCase();
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.topIND {
  width: 960px;
  height: 100px;
  display: flex;
  align-items: center;
}

.titutoTOP {
  font-size: 24px;
  color: #cabe9b;
  font-family: 'DIN_bold';
  margin-left: 50px;
  margin-right: 220px;
}

.fecha {
  width: 250px;
  margin-right: 70px;
}
.hora {
  width: 120px;
}

.txt16 {
  color: #acacac;
  font-size: 16px;
  font-family: 'DIN_Regular';
  display: flex;
  align-items: center;
}
.txt16 img {
  margin-right: 20px;
}
</style>
