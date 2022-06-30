import Theme from '../styles/theme'

const App = ({ Component, pageProps }) => (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
export default App
