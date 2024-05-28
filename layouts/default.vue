<template>
    <div id="mainLayout" style="background-color: black; background: url('/images/background-texture2.jpg'); background-repeat: no-repeat; background-size:cover; background-attachment: fixed;">
        <Html lang="en-GB">
            <Head>
                <Title>Nigel Wheeldon@JamesWebStudio</Title>
                <Meta name="description" content="JamesWebStudio - Functionality and Simplicity by Design" />
                <Meta name="description" content="Web Developer from Birmingham" />
                <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css?family=Calibri:400,700,400italic,700italic" rel="stylesheet">

            </Head>
        </Html>
        <Nav />
        <slot />
        <Footer class="footer" />
    </div>
</template>

<style scoped>
#mainLayout {
    display:flex; 
    flex-direction: column;
    background-color: rgb(18, 18, 19);
    width: 100vw;
    position: relative;
    font-family: Calibri, Montserrat, arial;
}

#mainLayout img {
    position: absolute;
    top: 0; 
    left:0;
    height: 100%;
    z-index: -1;
}

.footer {
    display: none;
}
</style>