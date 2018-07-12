import { compose } from 'recompose'
import withLayout from './withLayout'
import withDataProvider from './withDataProvider'
import withThemeProvider from './withThemeProvider'


export default (WrappedComponents) => compose(
  withDataProvider,
  withThemeProvider,
  withLayout,
)(WrappedComponents)