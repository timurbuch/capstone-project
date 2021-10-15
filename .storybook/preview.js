import GlobalStyle from "../src/GlobalStyles/GlobalStyles"
import { MemoryRouter } from "react-router"
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <>
    <MemoryRouter>
      <GlobalStyle />
      <Story />
    </MemoryRouter>
    </>
  )
]