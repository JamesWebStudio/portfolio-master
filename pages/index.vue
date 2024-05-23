<template>
<div id="home">
    <section id="intro" class="scale-in-center"> 
        <img src="/images/logo.webp" alt="JamesWebStudio" class="img-fluid" />
        <div>
            <h3 class="text-focus-in mt-4"><span>Welcome to JamesWebStudio</span></h3>
            <p>I'm Nigel James a full stack web developer at JamesWebStudio</p>
            <p>Availiable for front end, back end or full stack projects</p>
            <nuxt-link to="/contact"><button class="btn heartbeat custom-btn">Contact Us</button></nuxt-link>
            <section id="tech-icons">
                <div class="tech-icon">JAVASCRIPT</div>
                <div class="tech-icon">VUE</div>
                <div class="tech-icon">NUXT</div>
                <div class="tech-icon">QUASAR</div>
                <div class="tech-icon">NODE</div>
                <div class="tech-icon">ADONIS</div>
                <div class="tech-icon">WORDPRESS</div>
                <div class="tech-icon">Responsive Web Design</div>
                <div class="tech-icon">SQL Server mySQL MongoDB</div>
                <div class="tech-icon">Progressive Web Applications</div>
                <div class="tech-icon">BOOTSTRAP</div>
                <div class="tech-icon">HTML & CSS</div>
            </section>
        </div>
    </section>
    <section id="services" class="container slide-in-bottom">
        <div class="card slide-in-right-1">
            <div class="card-title">
                <h3>Modern Web Development</h3>
            </div>
            <div class="card-body">
                <p>Using the latest technologies I create modern and functional websites and applications</p>
                <p>All my work is fully responsize and works equally well on all screen sizes from mobile to large desktop devices</p>
                <p>I use state of the art frameworks and libraries like Vue, Nuxt, Quasar, Node, Express and Adonis</p>
                <p>I am experienced with various SQL and noSQL databases, including SQL Server, mySQL, and MongoDB</p>
                <p>Contact me to discuss your requirments</p>
            </div>
        </div>
        <div class="card slide-in-right-2">
            <div class="card-title">
                <h3>Wordpress Development</h3>
            </div>
            <div class="card-body">
                <p>Whether its a plain website, a personal blog or a full blown ecommerce application Wordpress is a great tool to use</p>
                <p>Easy to use, powerful with a massive selection of themes and plugins it is not surprising that over 35% off all websites use Wordpress</p>
                <p>With excellent support for SEO and security it’s a fully-featured and extendable CMS and web development platform used by major companies like TechCrunch, 
                    Rolling Stone, Sony, CNN, Disney, Time Magazine and Vogue</p>
                <p>Contact me to find out if Wordpress is the right choice for you</p>
            </div>
        </div>
        <div class="card slide-in-right-3">
            <div class="card-title">
                <h3>SEO Services</h3>
            </div>
            <div class="card-body">
                <p><span>S</span>earch <span>E</span>ngine <span>O</span>ptimization makes your site more visible to all common search engines</p>
                <p>Standard on-page SEO is included in all our work but we provide specialized off-page SEO services to help maximise the search rankings for your site or application</p>
                <p></p>
            </div>
        </div>
        <div class="card slide-in-right-4">
            <div class="card-title">
                <h3>Website Optimization</h3>
            </div>
            <div class="card-body">
                <p>Already have a website?</p>
                <p>Performance not as good as you hoped or expected</p>
                <p>I can review your site and make any improvements to increase speed, performance and user experience</p>
                <p>This will lead to increased sales, repeat visits and visitor engagement. This will also help with SEO rankings making your site more visible to search engines</p>
            </div>
        </div>
    </section>
    
</div>
</template>

<script setup>
    
</script>

<style scoped>
@import url('~/assets/animations.css');

#home {
    position: relative;
    min-width: 100vw;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}

.row {
    padding: 0;
    margin:0;
}

img {
    width:100%;
    max-width:540px;
    margin: 0 auto;
}

#services {
    padding-top:40px;
}

h2 {
    margin-bottom:30px;
    text-align: center;
    letter-spacing:2px;
    font-size: clamp(1.2rem, 2.4rem, 3rem);
}

h3 {
    margin:0;
}

#intro {
    color: white;  
    font-size: 1.2em;
    font-weight: 800;
    letter-spacing:2px;
    text-align: center;
    padding:0;
    font-family: Roboto, Tangerine Georgia, 'Times New Roman', Times, serif;
    margin-bottom:50px;
   
}

#intro p, #intro h2 { 
    margin-top: 30px;
    text-shadow: 2px 0 black;
    padding: 10px;
}

span {
    font-weight: 900;
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(217,176,107,1) 0%, rgba(170,114,37,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

#about-link {
    font-size: 1.4em;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
}

.card {
    margin-bottom: 2em;
    background: rgb(48,48,48);
    background: linear-gradient(0deg, rgba(48,48,48,1) 0%, rgba(112,125,129,1) 96%);
    padding:0;
}

.card-title {
    width: 100%;
}

.card-body {
    padding: 10px;
}

.card-body p span {
    color: red;
    text-decoration: italic;
    font-size: 2em;
    margin-right: 2px;
}

.card-body p {
    letter-spacing:2px;
    line-height: 25px;
    text-align: center;
    border-radius: 2px solid orange;
}

#tech-icons {
    display: none;
}
   
/***** Large View *****/
@media screen and (min-width:1000px) {
    #home {
        display: grid;
        grid-template-columns: 25vw 1fr;
        grid-template-areas: "intro services";
        column-gap: 20px;
        width: 100vw;
        max-width: 100vw;
        padding: 0 3em;
        overflow-x: hidden;
    }

    #services {
        display: flex;
        flex-direction:column;
        align-items: flex-start !important;
        justify-content: flex-start !important;
        row-gap: 30px;
        padding-top:0;
        grid-area: services;
        height: 100%;
    }

    #intro {
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        grid-area: intro;
        height: 100%;
    }

    #intro img {
        width: 90%;

    }

    .card {
        width: 100%;
    }

    #tech-icons {
        display: flex;
        margin-top: 60px;
        position: relative;
        flex-wrap: wrap;
        justify-content: center; 
        align-items: center;
    }

    .tech-icon {
        font-size: 1rem;
        padding:5px;
        width: 140px;
        height: 140px;
        border-radius: 50%;  
        background: black;
        background: var(--title-background-gradient);
        margin: 10px;
        display:flex;
        align-items:center;
        justify-content: center;
        border: 2px solid rgb(170,114,37);
        box-shadow: inset 3px;
        box-shadow: 2px 32px 100px #888888;
    }

    .tech-icon:nth-of-type(1) {
        animation: roll-in-blurred-left 1.4s ease-in;
    }

    .tech-icon:nth-of-type(2) {
        animation: roll-in-blurred-left 1.8s ease-in;
    }

    .tech-icon:nth-of-type(3) {
        animation: roll-in-blurred-left 2.2s ease-in;
    }

    .tech-icon:nth-of-type(4) {
        animation: roll-in-blurred-left 2.6s ease-in;
    }

    .tech-icon:nth-of-type(5) {
        animation: roll-in-blurred-left 3s ease-in;
    }

    .tech-icon:nth-of-type(6) {
        animation: roll-in-blurred-left 3.4s ease-in;
    }

    .tech-icon:nth-of-type(7) {
        animation: roll-in-blurred-left 3.8s ease-in;
    }

    .tech-icon:nth-of-type(8) {
        animation: roll-in-blurred-left 4.2s ease-in;
    }

    .tech-icon:nth-of-type(9) {
        animation: roll-in-blurred-left 4.6s ease-in;
    }

    .tech-icon:nth-of-type(10) {
        animation: roll-in-blurred-left 5s ease-in;
    }

    .tech-icon:nth-of-type(11) {
        animation: roll-in-blurred-left 5.4s ease-in;
    }

    .tech-icon:nth-of-type(12) {
        animation: roll-in-blurred-left 5.8s ease-in;
    }

}

</style>