<script>
import storeDave from '../data/storeDave.js'
export default {
    data() {
        return {
            storeDave,
            iconHover: false
        }
    },
    methods: {
    },
    mounted() {
        console.log(storeDave.info)
    }
}
</script>

<template>
    <div class="myBgRed">
        <div class="myCont d-flex justify-content-center gap-5 py-5">
            <div class="leftCont">
                <img class="w-100 pb-3" src="/img/theme_eduprime_logo.png" alt="">
                <p>EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities,
                    courses, secondary schools etc.</p>
                <div class="d-flex flex-row gap-4">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <ul>
                <li>
                    <h4 class="round-font mb-4"> {{ storeDave.headOne }} </h4>
                </li>
                <li v-for="links in storeDave.getLinks" class="mb-2">
                    <a :href="links.url"> {{ links.link }} </a>
                </li>
            </ul>
            <ul>
                <li>
                    <h4 class="round-font mb-4"> {{ storeDave.headTwo }} </h4>
                </li>
                <li v-for="links in storeDave.netLinks" class="mb-2">
                    <a :href="links.url"> {{ links.link }} </a>
                </li>
            </ul>
            <div class="rightCont d-flex flex-column gap-2">
                <div>
                    <input :class="{ 'w-75': iconHover }" type="text" placeholder="search...">
                    <a href="#"><i @mouseover="iconHover = true" @mouseleave="iconHover = false"
                            class="fa-solid fa-magnifying-glass mb-2"></i></a>
                </div>
                <h4 class="round-font my-4">Search categoris</h4>
                <div class="d-flex flex-wrap gap-2 justify-content-end">
                    <a class="btLinks" href="#">ECONOMY</a>
                    <a class="btLinks" href="#">DESIGN</a>
                    <a class="btLinks" href="#">COACHING</a>
                    <a class="btLinks" href="#">BUSINESS</a>
                    <a class="btLinks" href="#">MEDICINE</a>
                    <a class="btLinks" href="#">LAW</a>
                    <a class="btLinks" href="#">FITNESS</a>
                </div>
                <p class="finalP"> ModelTheme. All rights reserved. </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.myBgRed {
    background-color: #e56768;
}

.myCont {
    width: 1200px;
    margin: 0 auto;
}

ul {
    list-style: none;
    width: 13.5rem;
}

a {
    color: white;
    text-decoration: none;
    transition: 300ms ease;
}

li:hover a {
    color: #e9d758;
}

.leftCont {
    width: 25rem;
}

.rightCont {
    position: relative;
    width: 26rem;
}

input {
    border: transparent;
    border-radius: 30px;
    padding: 1rem;
    width: 100%;
    transition: .3s;
    outline: transparent;
}

.fa-magnifying-glass {
    background-color: #e9d758;
    padding: 1.3rem;
    border-radius: 50%;
    position: absolute;
    right: -1px;
    top: -1px;
    transition: ease .3s;
}

.fa-magnifying-glass:hover {
    background-color: #e56768;
    transform: rotate(1turn);
    box-shadow: rgba(2, 2, 2, 0.5) 0 0 20px 5px;
}

.fa-brands {
    font-size: 1.2rem;
    border: 3px solid #e9d758;
    border-radius: 50%;
    transition: .3s ease;
}
.fa-brands:hover {
    background-color: #e9d758;
    cursor: pointer;
    transform: rotate(1turn);
}
.fa-instagram {
    padding: 0.8rem 1rem 0.8rem 1rem;
    transition: .3s ease;
}
.fa-instagram:hover {
    background: rgb(131, 58, 180);
    background: linear-gradient(214deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
    border: 3px solid white;
}
.fa-twitter {
    padding: 0.8rem 1rem 0.8rem 1rem;
    transition: .3s ease;
}
.fa-twitter:hover {
    background-color: #1C9CEA;
    border: 3px solid white;
}

.fa-facebook-f {
    padding: 0.8rem 1.2rem 0.8rem 1.2rem;
    transition: .3s ease;
}
.fa-facebook-f:hover{
    background-color: #0866FF;
    border: 3px solid white;
}

.btLinks {
    border: 1px solid white;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 30px;
    transition: 300ms ease;
    font-size: 0.8rem;
}

.btLinks:hover {
    background-color: #e9d758;
    border: 1px solid transparent
}

.finalP {
    color: #e9d758;
    text-align: end;
    margin-top: 1rem;
}
</style>