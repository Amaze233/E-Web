// @ClassName: Lizi
// @Author: XIAO SIYU
// @Date: 2021/12/13 15:42
// @Version: 1.0
// @Description: 粒子特效组件


<template>
  <vue-particles
      color="#555"
      :particleOpacity="0.7"
      :particlesNumber="150"
      shapeType="circle"
      :particleSize="4"
      linesColor="#555"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
      class="lizi"
  />
</template>

<script>
export default {
  name: "Lizi"
}
</script>

<style scoped>
.lizi{
  position:fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

</style>