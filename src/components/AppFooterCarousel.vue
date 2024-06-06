<script>
import store from '../data/StoreVladi.js'

export default {
    data() {
        return {
            isClicked: false,
            isSmooth: true,
            store,
            isAtLeft: true,
            onHover: false
        }
    },
    methods: {
        dragging(value) {
            if (!this.isClicked) return;
            console.log('dragging...')
            const footerCarosell = document.getElementById('footerCarosell');
            footerCarosell.scrollLeft -= value.movementX;

            let halfWay = (footerCarosell.scrollWidth - footerCarosell.clientWidth) / 2;

            if (footerCarosell.scrollLeft >= halfWay) {
                this.isAtLeft = false;
            } else {
                this.isAtLeft = true;
            }
        },
        mouseRelease() {
            this.isClicked = false;
            this.isSmooth = true;
        },

        Right() {
            const footerCarosell = document.getElementById('footerCarosell');

            footerCarosell.scrollLeft += (1500);
            this.isAtLeft = false
        },

        Left() {
            const footerCarosell = document.getElementById('footerCarosell');

            footerCarosell.scrollLeft -= (1500);

            let halfWay = (footerCarosell.scrollWidth - footerCarosell.clientWidth) / 2
            this.isAtLeft = true
        },
        goLeft() {
            const footerCarosell = document.getElementById('footerCarosell');
            footerCarosell.scrollLeft -= (1500);
        }
    },
    created() {
        setInterval(() => {
            const footerCarosell = document.getElementById('footerCarosell');

            this.valore1 = footerCarosell.scrollWidth;
            this.valore2 = footerCarosell.clientWidth;
            this.valore3 = footerCarosell.scrollWidth - footerCarosell.clientWidth;
            this.valore4 = footerCarosell.scrollLeft;
        }, 20)
    },

    mounted() {
        this.goLeft(),
            setInterval(() => {
                const footerCarosell = document.getElementById('footerCarosell');
                if (!this.onHover) {
                    if (this.isAtLeft) {
                        footerCarosell.scrollLeft += 1500;
                        this.isAtLeft = false;
                    } else {
                        footerCarosell.scrollLeft -= 1500;
                        this.isAtLeft = true;
                    }
                }
            }, 6000)
    }
}
</script>


<template>
    <div id="container">
        <div class="container-lg" @mouseleave="onHover = false" @mouseover="onHover = true">

            <div class="title">
                <h1 class="round-font">Thoughts from our students</h1>
            </div>

            <div id="footerCarosell" @mousemove="dragging" @mousedown="isClicked = !isClicked, isSmooth = !isSmooth"
                @mouseup="mouseRelease()" :class="{ smooth: isSmooth, scrollType: isSmooth }">

                <div id="element-container"><!--width 1750px(va in overflow)-->
                    <div v-for="elemento in store.testimonials" class="elemento black"
                        :class="{ scrollAlign: isSmooth }">
                        <div class="carta black">
                            <div class="d-flex top">
                                <div class="faculty img-container">
                                    <img :src="elemento.user_img" alt="">
                                </div>
                                <h2 class="round-font my-red">
                                    FACULTY OF
                                    {{ elemento.faculty.toUpperCase() }}
                                </h2>
                            </div>
                            <p>"{{ elemento.testimonial }}"</p>
                            <div class="d-flex pt-4">
                                <div class="student img-container">
                                    <img :src="elemento.user_img" alt="">
                                </div>
                                <div class="info black">
                                    <h2 class="round-font">{{ elemento.name }}</h2>
                                    <p class="my-lightgrey">CLASSE {{ elemento.class }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


        <div class=" dots">
            <button :class="{ red: isAtLeft }" id="sx"><i @click="Left()" class="fa-solid fa-circle"></i></button>
            <button :class="{ red: isAtLeft == false }" id="dx"><i @click="Right()"
                    class="fa-solid fa-circle"></i></button>
        </div>
    </div>

</template>



<style scoped>
h1 {
    font-size: 3rem;
}

.title {
    text-align: center;
    padding: 3rem;
}

#container {
    width: 100%;
    justify-content: center;
    background-image: url(img/background-wave3.png);
    background-color: #F7F8FA;
    /* background-color: #1a2f5a; */
    background-size: cover;
}

#footerCarosell {
    /* background-color: #1a2f5a; */
    margin: auto;
    width: 100%;
    height: 460px;
    overflow: hidden;
    transition: 2s ease;
    caret-color: transparent;
    padding: 1rem 0;
    /* scroll-snap-type: x mandatory; */
    /* padding-right: 0rem; */
}

/* SCROLL TYPE */
.scrollType {
    scroll-snap-type: x mandatory;
}

/* SCROLL ALIGN */
.scrollAlign {
    scroll-snap-align: start;
}

.smooth {
    scroll-behavior: smooth;
}

#element-container {
    display: flex;
    width: 200%;
    height: 100%;
    align-items: start;
    /* scroll-snap-align: start; */
}


.elemento {
    width: 50%;
    padding: 1rem;
    scroll-snap-align: start;
}

.carta {
    border: none;
    border-radius: 15px;
    height: 95%;
    padding: 3rem;
    box-shadow: 0px 5px 20px 5px rgba(122, 122, 122, 0.158);
    background: white;
}

.top h2 {
    width: 80%;
    font-size: 1.75rem;
    letter-spacing: 3px;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.carta>p {
    padding-top: 1rem;
}

.info h2 {
    font-size: 1.5rem;
    line-height: 20px;
}

.img-container {
    /* background: rgba(172, 255, 47, 0.418); */
    width: 80px;
    height: 80px;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

.student {
    border-radius: 50%;
    overflow: hidden;
}

.dots {
    justify-content: center;
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    caret-color: transparent;
}

button {
    background: none;
    border: none;
    color: #8888883d;
}

button:hover {
    color: #88888879;
}

.red {
    color: #E56768 !important;
}

img {
    width: 100%;
}
</style>
