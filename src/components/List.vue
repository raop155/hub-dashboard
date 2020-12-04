<template>
  <div id="list">
    <div class="tituloIND">
      <div class="tituloempresa">{{title}}:</div>
      <!--<div class="tituloultimo">ÚLTIMO:</div>-->
      <div class="titulovariabilidad">VARIABILIDAD:</div>
    </div>
    <!--------END-TITULOIND------->
    <ListItem v-for="item in items.slice(0, 10)" :key="item.nemotecnico" :data="item" />
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'List',
  components: {
    ListItem
  },
  props: {
    title: String,
    items: [Array, Object]
  },
  data: () => {
    return {
      test: null
    };
  },
  updated: function() {
    console.log('List updated!', this.title);
  }
};
</script>

<style scoped>
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