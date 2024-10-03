import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [],
  theme: {
    colors: {
      primary: '#EDECFF',
      body: '#FFFFFF',
      'body-text': '#333333',
      accent: '#FBF3EB',
    },
    extend: {
      fontFamily: {
        primary: ['Kaisei Decol', 'serif'],
        secondary: ['lato', 'serif'],
      },
    },
  },
  plugins: [],
}
