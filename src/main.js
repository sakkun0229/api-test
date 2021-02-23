// Dog APIのサンプル
const img = document.getElementById('img')
const url = 'https://dog.ceo/api/breeds/image/random'

axios
  .get(url)
  .then(function (response) {
    console.log(response)
    img.src = response.data.message
  })
  .catch(function (response) {
    console.log(response)
  })

// WP APIのサンプル
wpUrl = 'https://ja.wordpress.org/wp-json/wp/v2/posts?_embed'

new Vue({
  el: '#app',
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    axios
      .get(wpUrl)
      .then((response) => {
        console.log(response)
        this.posts = response.data
        console.log(this.posts)
      })
      .catch((response) => {
        console.log(response)
      })
  },
})
