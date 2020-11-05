<template>
  <div
    class="flex items-center justify-center min-h-screen mx-auto text-center"
  >
    <slice-zone type="page" uid="hello-new-slice" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  // async asyncData({ $prismic, error }) {
  //   try {
  //     const document = (await $prismic.api.getSingle('homepage')).data
  //     return {
  //       document
  //     }
  //   } catch (e) {
  //     error({ statusCode: 404, message: 'Page not found' })
  //   }
  // }
}
</script>
