
<template>
  <section class="blog-blocks">
    <PostPreview
    v-for="post in posts"
    :key="post.id" 
    :title="post.title"
    :excerpt="post.previewText"
    :thumbnailImage="post.thumbnailURL"
    :id="post.id" />
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";
export default {
  components: {
    PostPreview
  },
  data() {
    return {
      posts:[
        {
        title:'A New Beginning',
        previewText: 'This will be awesome. Don\'t miss it!',
        thumbnailURL: 'https://dummyimage.com/300X300/000/fff',
        id: 'a-new-beginning'

      },
      {
        title:'A Second Beginning',
        previewText: 'This will still be awesome.',
        thumbnailURL: 'https://dummyimage.com/300X300/000/fff',
        id: 'a-second-beginning'
      }
      ]
    }
  }
}
</script>
