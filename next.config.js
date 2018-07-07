const posts = require("./data/posts")

const postsRoutes = posts && posts.length > 0 && posts.reduce((acc,post) => {
  return {
    ...acc,
    [`/post/${post.slug}`]: {page: '/post',  query: post}
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