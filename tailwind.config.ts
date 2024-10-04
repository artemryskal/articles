import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [],
  theme: {
    colors: {
      primary: '#EDECFF',
      body: '#FFFFFF',
      text: '#333333',
      lighter: '#656565',
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
