<template>
  <v-app>
    <v-main>
      <light-speed/>
    </v-main>
  </v-app>
</template>

<script>
import LightSpeed from './components/LighSpeed.vue';

export default {
  name: 'App',

  components: {
    LightSpeed,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background:rgba(245, 209, 4, 0.774);
}
</style>