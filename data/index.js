import React from 'react'
import posts from './posts'
import projects from './projects'

const { Provider, Consumer } = React.createContext()


export const DataProvider = ({ children }) => (
  <Provider value={{posts, projects}}>
    {children}
  </Provider>
)


export const DataConsumer = Consumer




