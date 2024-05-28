<template>
    <div class="container">
        <section id="about-icons">
            <img src="~/assets/images/vue3.jpg" alt="Vue 3" id="about-icon-1" class="slide-in-left img-fluid">
            <img src="~/assets/images/nuxt.png" alt="Nuxt" id="about-icon-2" class="slide-in-top  img-fluid">
            <img src="~/assets/images/quasar.png" alt="Quasar" id="about-icon-3" class="slide-in-right  img-fluid">
        </section> 
        <section id="about-text" class="slide-in-bottom">
            <h5>JamesWebStudio is a web development company founded & run by myself, <span>Nigel James Wheeldon</span></h5>
            <h5>a full stack web developer from Birmingham England</h5>
            <p class="mt-5">I have been involved in various positions in the IT industry and have over 5 years in web development experience</p>
            <p>Specialising in Ecommerce, Business and Educational websites I use modern web development techniques combined with state of the art tooling, frameworks and libraries
                to achieve high performing, functional and intuitive web sites and applications
            </p>
            <p>Functionality, performance and simplicity are key to a great user experience, conversions and repeat visits</p>
            <p>I am a keen Vue.js supporter and I have included some Youtube videos on the front end frameworks I prefer to use so you can see if they are a good fit for your needs</p>
            <nuxt-link to="/contact" class="link">Contact us for more information</nuxt-link>
        </section>
        <section id="about-videos">
            <div class="slide-in-left">
                <h5>An introduction to Vue 3</h5>
                <h6>my favourite Javascript Framework</h6>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/A5cVyjrKx_Q" title="Vue 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <h5>Nuxt 3</h5>
                <h6>the next big thing in web development</h6>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/noq-ZHTD2Cg" title="Nuxt 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="slide-in-right">
                <h5>Quasar</h5>
                <h6>the complete Vue 3 framework</h6>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VMskuNmQBqE" title="Quasar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    </div>
</template>

<style scoped>
    @import url(~/assets/animations.css);
    .container {
        padding-top:30px;
        padding:0;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
        overflow: hidden;
    }

    #about-icons {
        padding:20px 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }

    #about-icons img {
        width: 100%;
        max-width: 350px;
        aspect-ratio: 16 / 9;
    }

    #about-text {
        padding: 50px 5px;
        text-align:center;
        font-size: 1.2rem;
    }

    #about-videos {
        width: 100vw;
        max-width:100vw;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        padding: 30px 0;
        row-gap: 50px;
        margin-bottom:30px;
    }

    iframe {
        width: 100vw;
        max-width: 400px;
        padding:0;
        height: 100%;
    }

    h5, h6, p {
        /* font-family: Calibri Montserrat, sans-serif; */
        letter-spacing: 2px;
        line-height: 35px;
        margin: 0 auto;
    }

    p {
        margin-bottom: 15px;
    }

    span {
        font-style: italic;
    }

    .link {
        color: orange;
    }

    @media screen and (min-width:768px) {
        #about-icons {
            gap: 20px;
        }

        #about-videos {
            gap :20px;
            margin-bottom: 60px;
        }

        #about-text {
            padding: 60px 10vw;
            /* font-family: Calibri, Montserrat, Arial; */
        }

        #about-text h5 {
            font-size: 1.6rem;
            line-height: 45px;
        }

        #about-text p {
            font-size: 1.3rem;
        }

        


    }
</style>