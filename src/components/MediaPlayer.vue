<template>
  <div id="mediaPlayer">
    <video ref="videoRef" autoplay loop muted>
      Your browser does not support HTML5 video.
      <source :src="video" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'MediaPlayer',
  data: () => {
    return {
      video: require('../assets/12_26_WALL_960X1080.mp4')
    };
  },
  mounted() {
    this.$refs.videoRef.play();
  }
};
</script>

<style scoped>
#mediaPlayer {
  position: absolute;
  height: 100%;
}
</style>