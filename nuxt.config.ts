// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    movieKey:process.env.MOVIE_API_KEY,
  },
  app: {
    pageTransition: {name: "page", mode: "out-in"},
    // * runtime configuration section as app 
    head: {
      charset: "UTF-8",
      bodyAttrs: {
          class: 'body',
          'data-spy': 'scroll',
      },
      title: "movie-app",
      meta: [
          { "http-equiv": "X-UA-Compatible" , content:"IE=edge"},      
          { name: 'description', content: 'My amazing site.' }
      ],
      link: [
          { rel: "stylesheet",type: "text/css", href: "https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" }
      ],
      noscript: [ 
          { children: 'JavaScript is required' }
      ]
  }
  }
})
