<script>
import storeDave from '../data/storeDave.js'
export default {
    data() {
        return {
            storeDave,
        }
    }
}
</script>

<template>
    <div class="myBgRed">
        <div class="myCont d-flex gap-4 justify-content-center">
            <div class="leftCont">
                <img class="w-100" src="/public/img/theme_eduprime_logo.png" alt="">
                <p>EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.</p>
            </div>
            <ul>
                <li>
                    <h4 class="round-font"> {{ storeDave.headOne }} </h4>
                </li>
                <li v-for="links in storeDave.getLinks">
                    <a :href="links.url"> {{ links.link }} </a>
                </li>
            </ul>
            <ul>
                <li>
                    <h4 class="round-font"> {{ storeDave.headTwo }} </h4>
                </li>
                <li v-for="links in storeDave.netLinks">
                    <a :href="links.url"> {{ links.link }} </a>
                </li>
            </ul>
            <div class="rightCont">
                <input type="text" placeholder="search...">
                <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                <h3 class="round-font">Search categoris</h3>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.myBgRed {
    background-color: #e56768;
}

.myCont {
    width: 1600px;
    margin: 0 auto;
}

ul {
    list-style: none;
}

a {
    color: white;
    text-decoration: none;
}
.leftCont{
    width: 25rem;
}
.rightCont{
    position: relative;
}
input{
    border: transparent;
    border-radius: 30px;
    padding: 1rem;
    width: 20rem;
}
.fa-magnifying-glass{
    background-color: #e9d758;
    padding: 1.2rem;
    border-radius: 50%;
    position: relative;
    right: 3.4rem;
}
</style>