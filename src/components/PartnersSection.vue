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
    <div class="myContainer text-center">
        <h1 class="black round-font my-5">Partners</h1>
        <p class="black m-auto my-5">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy.</p>
        <div class="d-flex justify-content-around gap-5 my-5">
            <div v-for="x in storeDave.partners" class="myPartners my-5">
                <img class="" :src="x.url" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.myContainer {
    width: 1200px;
    margin: 0 auto;
}
.myPartners{
    height: 50px;
    opacity: 0.4;
    transition: 0.4s;
    cursor: pointer;
}
.myPartners:hover {
    opacity: 1;
    transform: scale(1.05);
}
img {
    height: 100%;
}
p{
    width: 30rem;
}
</style>