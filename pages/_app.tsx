import { ThemeProvider } from 'styled-components';
import GlobalReset from '../src/styles/global';
import theme from '../src/styles/theme';
import { useGlobalContext } from '../src/Context';

function MyApp({ Component, pageProps }) {
  // const { isLoading } = useGlobalContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
