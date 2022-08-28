<template>
  <the-headers title="RememberMe"></the-headers>
 <the-resource></the-resource>
</template>

<script>
import TheResource from "./Resource/TheResource.vue"
import TheHeaders from "./Layout/TheHeader.vue"

export default {
  components: {
    TheResource,
    TheHeaders
      },
  data() {
    return {
     
    };
  },
  methods: {
    
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>