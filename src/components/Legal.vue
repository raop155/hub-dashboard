<template>
  <div id="legal">
    <div class="bottomIND">
      <div class="barra">
        <div class="datobarra">
          <img class="icodivisa" src="@/assets/ico_divisa.png" width="29px" height="28px" />
          <div class="textobottom">
            <div class="txt9B">Mercado Abierto {{date | moment('L')}}</div>
            <div class="txt9BL">
              Fuente: Bolsa de Comercio de Santiago, CME, Nasdaq,
              Finmarkets La validez de la información contenida en el portal de información de mercados es la vigente en la fecha de su última actualización.
            </div>
          </div>
        </div>
        <div class="logo"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Legal',
  date: new Date(),
  data: () => {
    return {
      date: new Date(),
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
.txt9B {
  font-size: 9px;
  font-family: 'DIN_medium';
  color: #fff;
}
.txt9BL {
  font-size: 9px;
  color: #959595;
}

.bottomIND {
  width: 100%;
  height: 50px;
}

.barra {
  width: 100%;
  height: 100%;
  background-color: #373736;

  display: flex;
  align-items: center;
}
.datobarra {
  width: 600px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-right: 90px;
}
.logo {
  height: 41px;
  width: 154px;
  /*background-color: #999999;*/
  background-image: url(../assets/logo_santander.png);
  background-repeat: no-repeat;
  background-position: center;
}
.icodivisa {
  margin-right: 15px;
}
</style>