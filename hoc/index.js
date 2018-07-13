import { compose } from 'recompose'
import withLayout from './withLayout'
import withDataProvider from './withDataProvider'
import withThemeProvider from './withThemeProvider'


export default (options) => (WrappedComponents) => compose(
  withDataProvider,
  withThemeProvider,
  withLayout(options),
)(WrappedComponents)