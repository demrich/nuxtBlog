import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            title: res.data.story.content.title,
            content: res.data.story.content.body    
        },
      });
  }

export default {
    asyncData(context) {
        return context.app.$storyapi.get('cdn/stories/about', {
          version: 'draft' })
          .then(res => {
            createStore;
          })
      } 
}
