import Theme from '../styles/theme'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
export default App
