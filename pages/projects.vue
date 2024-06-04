<template>
    <section id="projects">
        <div id="projects-head-info">
            <h2>Projects</h2>
            <h5>A small sample of my previous work</h5>
        </div>
        <section id="cards-container">
            <section class="card slide-in-left">
                <div class="card-title">
                    <h4>Space Odyssey</h4>
                </div>
                <div class="card-sub-title">A space exploration & info site with NASA live news feed and 3 level quiz</div>
                <div class="card-body">
                    <img src="@/assets/spaceodyssey.webp" alt="No Image">
                </div>
                <div class="card-tech">
                    <p>Nuxt 2 & NASA API</p>
                </div>
                <div class="card-link">
                    <a href="http://www.space-odyssey.surge.sh" target="_blank">Link</a>
                </div>
            </section>
            <section class="card slide-in-right">
                <div class="card-title">
                    <h4>Workout Buddy</h4>
                </div>
                <div class="card-sub-title">A training app for training and diet advice and recording of stats & progress</div>
                <div class="card-body">
                    <img src="@/assets/workoutbuddy.webp" alt="No Image" loading="lazy">
                </div>
                <div class="card-tech">
                    <p>Nuxt, Firebase & Charts</p>
                </div>
                <div class="card-link">
                    <a href="https://workoutbuddy.surge.sh/" target="_blank">Link</a>
                </div>
            </section>
            <section class="card slide-in-left">
                <div class="card-title">
                    <h4>Pocket Office</h4>
                </div>
                <div class="card-sub-title">Simple mobile appointments, meetings, lists, notes and diary app</div>
                <div class="card-body">
                    <img src="@/assets/pocketoffice.webp" style="max-width: 300px; margin: 0 auto;" alt="No Image">
                </div>
                <div class="card-tech">
                    <p>Vue 2.6 & Firebase</p>
                </div>
                <div class="card-link">
                    <a href="http://pocket-office.surge.sh/" target="_blank">Link</a>
                </div>
            </section>
            <section class="card slide-in-right">
                <div class="card-title">
                    <h4>Doctors Surgery Website</h4>
                </div>
                <div class="card-sub-title">GP Practice</div>
                <div class="card-body">
                    <img src="@/assets/gp-practice.webp" alt="No Image" loading="lazy">
                </div>
                <div class="card-tech">
                    <p>Nuxt</p>
                </div>
                <div class="card-link">
                    <a href="http://www.gp-practice.surge.sh" target="_blank">Link</a>
                </div>
            </section>
            <section class="card slide-in-left">
                <div class="card-title">
                    <h4>NuxtWeather</h4>
                </div>
                <div class="card-sub-title">A weather app</div>
                <div class="card-body">
                    <img src="@/assets/nuxtweather.webp" alt="No Image" loading="lazy">
                </div>
                <div class="card-tech">
                    <p>Nuxt 3, Tailwind, Openweather API</p>
                </div>
                <div class="card-link">
                    <a href="http://www.nuxtweather.surge.sh" target="_blank">Link</a>
                </div>
            </section>
            <section class="card slide-in-right">
                <div class="card-title">
                    <h4>Elite Rentals</h4>
                </div>
                <div class="card-sub-title">A Luxury Proprty Rental Site</div>
                <div class="card-body">
                    <img src="@/assets/eliterentals-home.png" alt="No Image" loading="lazy">
                </div>
                <div class="card-tech">
                    <p>Wordpress, Custom Theme, ACF, Elementor, Theme Builder</p>
                </div>
                <div class="card-link">
                    <a href="" target="_blank">Link</a>
                </div>
            </section>
            <section class="card slide-in-right">
                <div class="card-title">
                    <h4>Audio Nirvana</h4>
                </div>
                <div class="card-sub-title">A Hifi Retail site</div>
                <div class="card-body">
                    <img src="@/assets/audio-nirvana-home.png" alt="No Image" loading="lazy">
                </div>
                <div class="card-tech">
                    <p>Wordpress, ACF, Elementor, Theme Builder</p>
                </div>
                <div class="card-link">
                    <a href="" target="_blank">Link</a>
                </div>
            </section>
            <section class="card slide-in-right">
                <div class="card-title">
                    <h4>Cosmic News</h4>
                </div>
                <div class="card-sub-title">A Wordpress News & Opinion Site</div>
                <div class="card-body">
                    <img src="@/assets/cosmicnews.jpg" alt="No Image" loading="lazy">
                </div>
                <div class="card-tech">
                    <p>Wordpress, Elementor, Polls</p>
                </div>
                <div class="card-link">
                    <a href="" target="_blank">Link</a>
                </div>
            </section>
        </section>
    </section>
</template>

<style scoped>
@import url('~/assets/animations.css');

#projects {
    color: white;
    margin-top:30px;
}

#projects-head-info {
    text-align: center;
}

#cards-container {
    display:flex;
    flex-wrap: wrap;
    /* width: 100vw;
    padding: 5vw; */
}

h1, h4 {
    margin:0;
}
.card {
    margin-bottom:2em;
    background: rgb(48,48,48);
    background: linear-gradient(0deg, rgba(48,48,48,1) 0%, rgba(112,125,129,1) 96%);
    width: 100vw;
    max-width: 750px;
    border-radius: 10px;
}

.card-title {
    margin:0;
}

.card-sub-title {
    background-color: rgb(10, 10 ,10);
    min-height: 60px;
    padding:5px;
    display:flex;
    justify-content: center;
    align-items:center;
    text-align: center;
}

.card-tech {
    background-color: black;
    text-align: center;
    padding:5px;
}

.card-link {
    color: orangered;
    padding:10px;
    border: none;
}

.card-body img {
    height:100%;
    aspect-ratio: 15 / 9;
}

section {
    border: none;
}

/**** MEDIUM VIEW ****/
@media (min-width:800px) {
    #cards-container {
    display:flex;
        margin: 30px 15px;
        justify-content: space-evenly;
    }

    .card {
        width: 100%;
        max-width: 600px;
    }
    
}

@media screen and (min-width: 1200px) {
    #cards-container {
        margin: 50px;
        justify-content: space-evenly;
        min-width: 90vw;
    }

    .card {
        max-width: 750px;
    }
}  
</style>