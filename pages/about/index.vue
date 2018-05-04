<template>
  <section id="about-page" v-editable="blok">

    <div class="container">
          <h1>{{ title }}</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 body">
          <p>{{ content }}</p>
        </div>

        </div>
      </div>
  </section>
</template>

<script>
  export default {
    asyncData(context) {
      return context.app.$storyapi.get('cdn/stories/about', {
              version: context.isDev ? 'draft' : 'published',
              })
        .then(res => {
          console.log(res.data.story);
          return {
            blok: res.data.story.content,
            title: res.data.story.content.title,
            content: res.data.story.content.body
          }
        })
    },
    mounted(){
      this.$storyblok.init();
      this.$storyblok.on('change', () => {
        location.reload(true);
      })
    } 
  }
</script>
