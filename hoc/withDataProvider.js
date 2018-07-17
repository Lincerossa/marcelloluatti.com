import React, { Component } from 'react'
import posts from '../data/posts'
import projects from '../data/projects'

const { Provider, Consumer } = React.createContext()

class MyProvider extends Component {

  constructor(){
    super()
    this.state={
      posts,
      projects,
      query: null,
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch({query, data}){
    
    if(data !== 'posts' && data !== 'projects') return 

    if(query) {

      this.setState({
        query
      }, () => {
        if(data === 'posts'){
          this.setState({
            posts: posts.filter(post => post.content.indexOf(query) > -1 || post.title.indexOf(query) > -1 || post.subtitle.indexOf(query) > -1),
          })
          return
        }
        if(data === 'projects'){
          this.setState({
            projectz: projectz.filter(project => project.content.indexOf(query) > -1 || project.title.indexOf(query) > -1 || project.subtitle.indexOf(query) > -1),
          })
          return
        }
      })
    }

    if(data === 'projects'){
      this.setState({
        query: null,
        projects
      })
      return
    }

    if(data === 'posts'){
      this.setState({
        query: null,
        posts
      })
      return
    }

    return

  }

  render(props){
    const { WrappedComponent } = this.props
    const { query, posts, projects } = this.state
    return (
      <Provider value={{posts, projects, query, handleSearch: this.handleSearch }}>
        <WrappedComponent {...props} />
      </Provider>
    )
  }
}


const WithDataProvider = WrappedComponent => props => {
  return (
    <MyProvider {...props} WrappedComponent={WrappedComponent} />
  )
}


export const DataConsumer = Consumer
export default WithDataProvider