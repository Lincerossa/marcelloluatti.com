import React, { Component } from 'react'
import posts from '../data/posts'
import projects from '../data/projects'
import debounce from 'debounce'
const { Provider, Consumer } = React.createContext()

class MyProvider extends Component {

  constructor(){
    super()
    this.state={
      posts,
      projects,
      query: null,
    }
    this.prepareHandleSearch = this.prepareHandleSearch.bind(this)
    this.handleSearch = debounce(
      this.handleSearch.bind(this),
      1000
    )
  }

  handleSearch({query, data}){

    if(data !== 'posts' && data !== 'projects') return 

    if(query) {

      this.setState({
        query
      }, () => {
        if(data === 'posts'){
          this.setState({
            loading: false,
            posts: posts.filter(post => post.content.indexOf(query) > -1 || post.title.indexOf(query) > -1 || post.subtitle.indexOf(query) > -1),
          })
          return
        }
        if(data === 'projects'){
          this.setState({
            loading: false,
            projectz: projectz.filter(project => project.content.indexOf(query) > -1 || project.title.indexOf(query) > -1 || project.subtitle.indexOf(query) > -1),
          })
          return
        }
      })
      return
    }

    if(data === 'projects'){
      this.setState({
        query: null,
        loading: false,
        projects
      })
      return
    }

    if(data === 'posts'){
      this.setState({
        query: null,
        loading: false,
        posts
      })
      return
    }

    return

  }


  prepareHandleSearch(e) {
    this.setState({
      loading: true,
    })

    this.handleSearch(e)
  }

  



  render(props){
    const { WrappedComponent } = this.props
    const { query, posts, projects,loading } = this.state

    return (
      <Provider value={{posts, projects, query, loading, handleSearch: this.prepareHandleSearch }}>
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