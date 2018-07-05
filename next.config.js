const posts = require("./data/posts")

const postsRoutes = posts && posts.length > 0 && posts.reduce((acc,post) => {
  const { slug, title, content } = post
  return {
    ...acc,
    [`/post/${post.slug}`]: {page: '/post',  query: { slug, title, content }}
  }
},{})



// next.config.js
module.exports = {
  exportPathMap: async function (defaultPathMap) {
    
    console.log("postsRoutes", postsRoutes)
    return {
      '/': { page: '/' },
      ...postsRoutes,
    }
  }
}