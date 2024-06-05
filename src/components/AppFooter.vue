<script>
import storeDave from '../data/storeDave.js'
export default {
    data() {
        return {
            storeDave,
        }
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
                <img class="w-100" src="/img/theme_eduprime_logo.png" alt="">
                <p>EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.</p>
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
                    <input type="text" placeholder="search...">
                    <a href="#"><i class="fa-solid fa-magnifying-glass mb-2"></i></a>
                </div>
                <h4 class="round-font">Search categoris</h4>  
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
}

a {
    color: white;
    text-decoration: none;
    transition: 300ms ease;
}
li:hover a{
    color: #e9d758;
}
.leftCont{
    width: 25rem;
}
.rightCont{
    position: relative;
    width: 26rem;
}
input{
    border: transparent;
    border-radius: 30px;
    padding: 1rem;
    width: 100%;
}
.fa-magnifying-glass{
    background-color: #e9d758;
    padding: 1.3rem;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 0;
    /* background-color: #e9d758;
    border: none;
    color: #fff;
    padding: 1.3rem;
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    width: 45px;
    height: 45px;
    transition: 0.4s; */
}
.fa-magnifying-glass:hover{
    background-color: #e56768;
}
.fa-brands{
    font-size: 1.2rem;
    border: 3px solid #e9d758;
    border-radius: 50%;
    transition: 300ms ease;
}

.fa-brands:hover {
    background-color: #e9d758;
    cursor: pointer;
}
.fa-instagram{
    padding: 0.8rem 1rem 0.8rem 1rem;
}
.fa-twitter{
    padding: 0.8rem 1rem 0.8rem 1rem;
}
.fa-facebook-f{
    padding: 0.8rem 1.2rem 0.8rem 1.2rem;
}
.btLinks{
    border: 1px solid white;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 30px;
    transition: 300ms ease;
    font-size: 0.8rem;
}

.btLinks:hover{
    background-color: #e9d758;
    border: 1px solid transparent
}
.finalP{
    color: #e9d758;
    text-align: end;
    margin-top: 1rem;
}
</style>