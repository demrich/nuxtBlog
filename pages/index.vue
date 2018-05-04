
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
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/'
    }).then( res => {
      return  {
        posts: res.data.stories.map(blogPost => {
        return {
          title: blogPost.content.title,
          previewText: blogPost.content.summary,
          thumbnailURL: blogPost.content.thumbnail,
          id: blogPost.slug
        }
      })
      }
    })
    
  }

  // data() {
  //   return {
  //     posts:[
  //       {
  //       title:'A New Beginning',
  //       previewText: 'This will be awesome. Don\'t miss it!',
  //       thumbnailURL: 'https://dummyimage.com/250X250/000/fff',
  //       id: 'a-new-beginning'

  //     },
  //     {
  //       title:'A Second Beginning',
  //       previewText: 'This will still be awesome.',
  //       thumbnailURL: 'https://dummyimage.com/250X250/000/fff',
  //       id: 'a-second-beginning'
  //     },
  //     {
  //       title:'A Third Beginning',
  //       previewText: 'Can you even have three beginnings?',
  //       thumbnailURL: 'https://dummyimage.com/250X250/000/fff',
  //       id: 'a-third-beginning'
  //     }
  //     ]
  //   }
  // }

}
</script>
