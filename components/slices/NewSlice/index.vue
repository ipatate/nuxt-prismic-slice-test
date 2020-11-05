<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text
      class="max-w-sm mx-auto"
      :field="slice.primary.description"
    />
    <prismic-image class="max-w-sm mx-auto" :field="slice.primary.Image" />
  </section>
</template>
<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>
