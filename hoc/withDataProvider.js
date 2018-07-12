import React from 'react'
import posts from '../data/posts'
import projects from '../data/projects'

const { Provider, Consumer } = React.createContext()

const WithDataProvider = WrappedComponent => props => {
  return (
    <Provider value={{posts, projects}}>
      <WrappedComponent {...props} />
      </Provider>
  )
}


export const DataConsumer = Consumer
export default WithDataProvider