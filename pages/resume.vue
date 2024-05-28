<template>
    <div id="resumeLayout">
        <header class="header">
            <div id="header-info">
                <h1 class="mb-4">Nigel Wheeldon</h1>
                <h3 class="mb-3">Full Stack Web Developer</h3>
                <div id="social-icons">
                    <img src="../assets/icons8-linkedin-188.png" width="64" height="64" alt="LinkedIn">
                    <img src="../assets/icons8-github-64.png" alt="Github">
                    <img src="../assets/icons8-facebook-64.png" alt="Facebook">
                </div>
            </div>
            <div id="header-contact">
                <div>
                    <img src="../assets/icons8-email-64.png" alt="Email">
                    <h4>jameswebstudio@outlook.com  nigeljames14@outlook.com</h4>
                </div>
                <div>
                    <img src="../assets/icons8-phone-94.png" alt="Phone">
                    <h4>0748 158 9587</h4>
                </div>
                <div>
                    <img src="../assets/icons8-web-94.png" alt="Web">
                    <h4><a href="https://jameswebstudio.uk" target=" _blank">www.jameswebstudio.uk</a></h4>
                </div>
                <div>
                    <img src="../assets/icons8-location-94.png" alt="Location: ">
                    <h4>Birmingham, England</h4>
                </div>
            </div>
        </header>
        <div id="main-section" class="nospace">
            <div id="summary">
                <h3>Summary</h3>
                <p>
                    With over 8 years of experience as a web developer, I have a diverse portfolio of websites and applications tailored to meet the unique needs of various clients across multiple industries. 
                    My expertise lies in creating high-performance, user-friendly, and visually appealing digital solutions using state-of-the-art technologies and frameworks including HTML, CSS, JavaScript, Vue, Nuxt, Node.js, MongoDB, and Wordpress.
                    <br>
                    My track record includes successful completion of E-commerce and Business projects, transforming initial mockups and wireframes into final production sites or applications that not only meet client specifications but also exceed end-user expectations. 
                    I have enhanced user engagement on several websites by implementing responsive design, optimizing checkout pages, and improving overall performance through asset and feature optimization. 
                    <br>
                    Driven by my passion for web development, I am constantly learning new skills and technologies to deliver exceptional results. My commitment to crafting intuitive, functional, and aesthetically 
                    pleasing websites and applications ensures that I consistently meet the unique requirements of both clients and end-users.
                </p>
            </div>
            <br>
            <div id="skills">
                <h3 style="text-align: left;">Skills</h3>
                <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>Vue 3, Nuxt 3, Quasar, Typescript</li>
                    <li>Node.js, Express, Adonis</li>
                    <li>Responsive Web Design</li>
                    <li>Progressive Web Applications</li>
                    <li>SQL & Databases</li>
                    <li>Rest API's</li>
                    <li>Wordpress</li>
                    <li>SEO</li>
                    <li>Github</li>
                    <li>Bootstrap, Tailwind</li>
                    <li>Supabase, Firebase</li>
                    
                </ul>
            </div>
            <div id="experience">
                <h3>Experience</h3>
                <p>As a freelance web developer I have been involved in various projects for business and individuals.<br><br>
                    I created the <strong>Space-Odyssey</strong> web site for a school for teaching 11 to 16 year olds about Astronomy, this included a live NASA news feed and a 3 level quiz as a bonus.<br> 
                    This was very well received and proved to be beneficial and appreciated by the students. <a href="http://space-odyssey.surge.sh/" target="_blank">link</a><br><br>
                    A <strong>GP Practice</strong> web site with a clean intuitive design, as requested given the ages of many of the practice's clients, with a contact form and a recent surgery news feed.
                    <a href="http://gp-practice.surge.sh/" target="_blank">link</a><br><br>
                    A <strong>Workout Buddy</strong> app for a fitness gym. This was designed to be educational with regards nutrition and exercises to get the best results as well
                    as it's main function to be used to monitor and keep a record of workouts performed so that the trainees progress could be viewed and monitored. 
                    The workout-buddy app proved to be a useful and educational for beginners and more experienced trainees alike.
                    <a href="https://workoutbuddy.surge.sh/" target="_blank">link</a><br><br>
                    I have created a number of Wordpress sites including E-Commerce & Business web sites.
                    I use a variery of tools to achieve these and other projects including Javascript, Vue, Nuxt, Adonis, Supabase, Firebase, Bootstrap, Tailwind, Express and more..
                </p>
            </div>
            <div id="education">
                <h3>Education</h3>
                <p>I have successfully accomplished an extensive array of online and vocational courses in critical areas such as programming, database development, 
                    and web design, earning notable qualifications including City & Guilds and NVQs.<br>
                    In addition to these, I hold A levels in Mathematics and Economics. 
                    My academic foundation is further strengthened by four GCSEs in Mathematics, English Language, History, and Physics</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: false
    })
</script>
<style scoped>
@font-face {
    font-family: "Calibri";
    src: url("assets/fonts/CalibreMedium.otf") format("truetype");
    /* font-family: "Montserrat";
    src: url("assets/fonts/Monserrat/static/Montserrat-SemiBold.ttf") format("truetype"); */
}

#resumeLayout {
    font-family: 'Calibri';
}

.header {
    text-align: center;
    line-height: 40px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

.header-info h1 {
    font-size: 36px;
    font-weight: 800;
}

#header-info {
    display:flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-evenly;
    color: white;
    padding-top: 30px;
    width: 100vw;
}

#social-icons {
    display:flex;
    gap: 15px;
    justify-content: center;
    margin-bottom:20px;
}

#header-contact {
    display: flex;
    flex-direction: column;
    padding:20px;
    width: 100vw;
}

#header-contact div img {
    height: 36px;
    width: 36px;
    margin-bottom: 5px;
}

#header-contact div h4 {
    font-size: 1rem;

    a {
        color: white;
    }

    a:hover {
        color: orange;
    }
}

#summary, #experience, #education, #skills {
    padding: 10px;
    letter-spacing: 2px;
    line-height: 24px;
    max-width: 1400px;
    margin: 0 auto;
}

#summary h3, #experience h3, #education h3, #skills h3 {
    font-size: 1.4rem;
    letter-spacing: 2px;
    line-height: 50px;
    text-align: left;
    font-weight: 900;
    margin-bottom: 30px;
    
}

#summary p, #experience p, #education p {
    line-height: 40px;
}

#skills {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

#skills ul {
    padding:5px;
    margin:0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

#skills ul li {
    list-style: none;
    font-size: 1rem;
    padding-bottom: 15px;
    letter-spacing: 2px;
    
}

#skills h3 {
    font-weight: bold; 
    letter-spacing: 2px;
    text-align: left;
    margin-bottom: 20px;
} 

@media screen and (min-width: 800px) {
    #header-contact div h4 {
        margin-bottom: 20px;
        font-size: 1.2rem;
    }
}

@media screen and (min-width:1000px) {
    #main-section {
        display: grid;
        grid-template-columns: 1fr minmax(200px 30%);
        padding: 0 15vw;
    }    

    #summary {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
    }

    #experience {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
    }

    #education {
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
    }

    #skills {
        grid-row-start: 1;
        grid-row-end: 4;
        grid-column-start: 2;
        grid-column-end: 3;
        align-items: start;
    }
}

@media print {
    #resumeLayout {
        width: 21cm;
        color: black;
        background-color: white;
    }
    
}
</style>



