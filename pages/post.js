import React, { Component } from 'react'


import posts from '../data/posts'


const getPost = ({slug}) => {

  console.log({posts, slug})
  return posts.find(post => post.slug === slug)
}

export default class Post extends Component {
  static async getInitialProps(context) {
    const { query: { slug} } = context
    const post = getPost({slug})

    return {
      post
    }

  }


  render(props){
    const { post } = this.props

    if(!post) return <div>nessun post corrisponde allo slug</div>

    const { title, content } = post
    return (
    
      <div>
        { title && <h1>{title}</h1>}
        { content && <p>{content}</p>}


      </div>
    )
  }


}