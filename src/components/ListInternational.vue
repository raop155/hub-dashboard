<template>
  <div id="list">
    <div class="tituloIND">
      <div class="tituloempresa">{{title}}:</div>
    </div>
    <!--------END-TITULOIND------->
    <div ref="thelist" id="items">
      <ListItemInternational v-for="item in items" :key="item.nemotecnico" :data="item" />
    </div>
  </div>
</template>

<script>
import ListItemInternational from './ListItemInternational.vue';

export default {
  name: 'ListInternational',
  components: {
    ListItemInternational
  },
  props: {
    title: String,
    items: [Array, Object]
  },
  data: () => {
    return {
      test: null,
      timer: null,
      position: 0
    };
  },
  mounted() {
    console.log('this.$refs.thelist', this.$refs.thelist);
    this.$refs.thelist.scrollTop = 0;

    this.timer = setInterval(this.moveList, 60000 * 0.5);
  },
  updated: function() {
    console.log('List updated!', this.title);
  },
  methods: {
    moveList() {
      this.position++;
      var parts = Math.ceil(this.items.length / 6);
      if (this.position >= parts) {
        this.position = 0;
      }

      this.$refs.thelist.scrollTop = this.position * 360;

      console.log('this.position', this.position);
      console.log('parts', parts);
      console.log('scrollTop', this.position * 360);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
#list {
}

#items {
  height: 360px;
  overflow-y: hidden;
  scroll-behavior: smooth;
}

.tituloIND {
  width: 400px;
  height: 23px;
  background-color: #353534;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #959595;
  margin-bottom: 10px;
}

.tituloempresa {
  width: 200px;
  height: 23px;
  background-color: #999999;
  color: #353534;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
}

.tituloultimo {
  width: 140px;
  text-align: center;
  flex: 1;
}

.titulovariabilidad {
  text-align: center;
  flex: 1;
}
</style>