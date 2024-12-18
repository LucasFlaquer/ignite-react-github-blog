import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme'
import { Home } from './pages/home'
import { GlobalStyles } from './styles/global-styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}
