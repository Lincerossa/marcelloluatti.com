import React from 'react'
import Layout from '../layout'



const WithLayout = WrappedComponent => props => {
  return (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  )
}

export default WithLayout