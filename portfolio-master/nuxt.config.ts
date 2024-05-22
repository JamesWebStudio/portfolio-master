// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
          meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'title', content: 'JamesWebStudio' }
          ],
          script: [
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' }
          ],
          link: [
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
                crossorigin: "anonymous",
                type: 'text/css'
            },
            { 
                rel: 'stylesheet',
                href: 'style.css',
                type: 'text/css'
            },
            
            {
                rel: "icon",
                type: "image/x-icon", 
                href: "/favicon/favicon-16x16.png"
            },
            {
              rel: "icon",
              type: "image/x-icon", 
              href: "/favicon/favicon-32x32.png"
            }
          ],
          noscript: [
            // <noscript>Javascript is required</noscript>
            { children: 'Javascript is required' }
          ]
        },
        pageTransition: { name: 'page', mode: 'out-in' },

    },
    modules: [    
      '@nuxt/image-edge',  
    ]
    
  })
