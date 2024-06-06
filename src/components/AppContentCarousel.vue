<script>
import store from '../data/StoreVladi.js'

export default {
    data() {
        return {
            isClicked: false,
            isSmooth: true,
            store,
        }
    },
    methods: {
        dragging(value) {
            if (!this.isClicked) return;
            console.log('dragging...')
            document.getElementById('carousel').scrollLeft -= value.movementX
        },
        mouseRelease() {
            this.isClicked = false;
            this.isSmooth = true;
        },

        Right() {
            const carousel = document.getElementById('carousel');
            const distanzaScrollabile = carousel.scrollWidth - carousel.clientWidth;
            const distanzaScrollata = carousel.scrollLeft
            if (distanzaScrollata >= distanzaScrollabile) {
                carousel.scrollLeft = 0;
                console.log("Tornato all'inizio");
            } else {
                carousel.scrollLeft += 440;
                console.log("scrollDX");
            }

        },

        Left() {
            const carousel = document.getElementById('carousel');
            const distanzaScrollata = carousel.scrollLeft

            if (distanzaScrollata <= 0) {
                carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
                console.log("Tornato alla fine");
            } else {
                carousel.scrollLeft -= 440;
                console.log("scrollSX");
            }

        },


    },
    created() {

    },
    mounted() {

    }
}
</script>


<template>


    <div class="title black">
        <h1 class="round-font">Management</h1>
        <p>A team of expert teachers that are leading our university! Meet our staff and become a student at EduPrime
            this year!
        </p>
    </div>

    <div class="container">

        <button class="sx" @click="Left()">
            <i class="fa-solid fa-chevron-left"></i>
        </button>

        <!-- la documentazione su questi "@events" è in fondo alla pagina -->
        <div id="carousel" 
        :class="{ smooth: isSmooth, slow: isSmooth }"
        @mousemove="dragging" 
        @mousedown="isClicked = !isClicked, isSmooth = !isSmooth" 
        @mouseup="mouseRelease()">


            <div class="black" v-for="elemento in store.carouselData" id="element-container">
                <div class="elemento">
                    <div class="img-container">
                        <img :src="elemento.img" alt="">
                        <div class="on-element">
                            <i class="fa-solid fa-envelope"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div class="name round-font">{{ elemento.name }}</div>
                    <div class="task my-lightgrey">{{ elemento.task }}</div>
                </div>

            </div>
        </div>

        <button class="dx" @click="Right()">
            <i class="fa-solid fa-chevron-right"></i>
        </button>

    </div>

</template>


<style scoped>

.name {
    font-size: 1.3rem;
    font-weight: 650;
}

.task {
    font-size: 0.95rem;
}

img {
    width: 100%;
}

.container,
.title {
    text-align: center;
    caret-color: transparent;
}

.title {
    position: relative;
}

h1 {
    padding: 3rem 0;
    font-size: 3rem;
}

p {
    width: 45%;
    margin: auto;
}

.container {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

#carousel {
    width: 1100px;
    height: 330px;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    scroll-snap-type: x;
    caret-color: transparent;
    margin: 0 2rem;
}

.smooth {
    scroll-behavior: smooth;
}


#element-container {
    display: flex;
    width: 1750px;
}

button {
    border: none;
    background: #E56768;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s;
}

button:hover{
    background: #E9D758;
}
.dx:hover{
    transform: translate(3px);
}
.sx:hover{
    transform: translate(-3px);
}

.img-container {
    width: 170px;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
}

.elemento {
    padding: 2.2rem;
}

.on-element{
    width: 170px;
    height: 170px;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    transform: scale(0.3);
    transition: 0.3s ease;
    border-radius: 50%;
    color: #FFFFFF00;
    background: #ffffffce;
    background: none;
}
.img-container:hover .on-element{
    transform: scale(1.2);
    background: #ffffffce;
    color: #434959;
}
.elemento i{
    cursor: pointer;
    transition: 0.15s;
    font-size: 1rem;
}

.elemento i:hover{
    color: #E56768;
}

.red{
    
}
</style>
