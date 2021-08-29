import { ThemeProvider } from 'styled-components';
import GlobalReset from '../styles/global';
import theme from '../styles/theme';
import { useGlobalContext } from '../Context';

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
