<template>
  <section class="container block">
    <div>
      <nuxt-link :to="'/blog/' + id">
        <article class="post-preview">
          <div :style="{backgroundImage: 'url(' + thumbnailImage + ')'}" class="post-preview-thumbnail"></div>
          <div class="post-preview-content">
            <h1>{{ title }}</h1>
            <p>{{ excerpt }}</p>

          </div>
        </article>
      </nuxt-link>


    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      excerpt: {
        type: String,
        required: true,
      },
      thumbnailImage: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true,
      }
    }
  }

</script>

