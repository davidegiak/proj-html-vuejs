<script>

export default {

    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }


}
</script>


<template>
    <div class="row">
        <div class="info-row  col-6">
            <div class="info-row-ico">
                <img src="../assets/img/Exam-icon.png" alt="">
            </div>
            <h1 class="round-font">The most efficient examination method</h1>
            <p>
                EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation
                of our students. Every teacher from our university has an influence on how students are evaluated at
                his/her subject.
            </p>
            <button class="mt-1">Discover the Method</button>
        </div>
        <div class="img-container  col-6">
            <img src="/img/Exam-Illustration.png" alt="">
        </div>
    </div>


    <div class="row">
        <div class="img-container  col-6">
            <img src="/img/Girl-Illustration.png" alt="">
        </div>

        <div class="info-row  col-6">
            <div class="info-row-ico">
                <img src="/img/Exam-icon-1.png" alt="">
            </div>
            <h1 class="round-font">Variable fees for
                international students</h1>
            <p>
                EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation
                of our students. Every teacher from our university has an influence on how students are evaluated at
                his/her subject.
            </p>
            <button class="mt-1">Lists od Fees</button>
        </div>



    </div>
</template>


<style scoped>
h1 {
    font-size: 3.2rem;
    padding: 1rem 0;
}

.img-container {
    /* border: 2px dashed red; */
    min-height: 2rem;
    padding: 2rem;
}

img {
    width: 100%;
}

.info-row-ico {
    width: 60px;
}

p {
    width: 450px;
    /* border: 2px dashed red; */
    padding: 2rem 0;
}

button {
    color: #fff;
    padding: 23px 40px;
    border-radius: 35px;
    font-size: 14px;
    letter-spacing: .5px;
    background-color: #e56768;
    border: none;
    font-weight: 800;
    transition: 0.3s;
}

button:hover {
    background: #E9D758;
}

.row {
    margin-top: 2rem;
}
</style>
