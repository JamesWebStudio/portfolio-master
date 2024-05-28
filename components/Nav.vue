<template>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <div class="container-fluid">
        <img src="/images/logo.webp" alt="" style="aspect-ratio: 1 / 1" />
        <a class="navbar-brand" href="/">JamesWebStudio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mt-2 mb-2" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <nuxtLink class="nav-link active" aria-current="page" to="/">Home</nuxtLink>
                </li>
                <li class="nav-item">
                    <nuxtLink class="nav-link" to="about">About Us</nuxtLink>
                </li>
                <li class="nav-item">
                    <nuxtLink class="nav-link" to="projects">Projects</nuxtLink>
                </li>
                <li class="nav-item">
                    <nuxtLink class="nav-link" to="contact">Contact</nuxtLink>
                </li>
                <li class="nav-item">
                    <nuxtLink class="nav-link" to="resume">Resume</nuxtLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script setup>
    
</script>

<style scoped> 
nav {
    width: 100vw;
    overflow-x: hidden;
}
.container-fluid {
    display: flex;
    align-items: center;
}

.container-fluid img {
    height: 48px;
    width: 48px;
    padding:0;
    margin-right:10px;
    margin-top: 0;
}
.navbar-toggler {
        float:right;
    }
.ml-auto {
    margin-left: auto;
}

.nav-link {
    background: linear-gradient(90deg, rgba(217,176,107,1) 0%, rgba(170,114,37,1) 100%) !important;
    background-clip: text;
    margin: 0 10px;
    padding:10px;
    color: black;
    font-weight: 700;
    font-size: 1.2rem;
    width: 100px;
    text-align: center;
}

.nav-link:hover {
    opacity: 0.2;
}

.router-link-active {
    opacity: 0.6;
}

@media screen and (min-width: 600px) {
    nav { 
        margin-bottom: 20px;
    }
}

@media screen and (min-width:1100px) {
    .container-fluid {
        padding: 0 10em;
        display: flex;
    }

    .container-fluid img {
        width: 90px;
        height:68px;
    }

    nav {
        margin-bottom: 50px;
    }

}
</style>