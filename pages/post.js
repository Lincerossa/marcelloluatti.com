import React, { Component } from 'react'

import posts from '../data/posts'

const getPost = ({slug}) => {
  return posts.find(post => post.slug === slug)
}

export default class Post extends Component {

  render(props){
    console.log("props", this.props)
    const { url } = this.props

    const { query: { slug } } = url
    const post = getPost({slug})

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