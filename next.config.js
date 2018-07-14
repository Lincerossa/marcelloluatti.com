const posts = require("./data/posts")
const projects = require("./data/projects")

const getRoutesFromData = ({data, path, page}) => data.reduce((acc, resource) => {
  return {
    ...acc,
    [`${path}/${resource.slug}`]: {page, query: resource}
  }
},{})









// next.config.js
module.exports = {  
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/posts': { page: '/posts' },
      '/projects': { page: '/projects'},
      ...getRoutesFromData({data: posts, path: "/post", page: "/post"}),
      ...getRoutesFromData({data: projects, path: "/project", page: "/project"}),
      ...getRoutesFromData({data: projects, path: "/project", page: "/project"}),
    }
  }
}