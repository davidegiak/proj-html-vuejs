<script>
export default {

}
</script>

<template>
    <section class="d-flex ms-4 mb-4">
        <div class="left-cont d-flex flex-column gap-2">
            <div class="myBadge up d-flex px-4 py-2 gap-2">
                <div class="svgOne">
                    <img class="svOne" src="/img/svg/svg-3.svg" alt="">
                </div>
                <span>Purchase theme</span>
            </div>
            <div class="myBadge down d-flex px-4 py-2 gap-2">
                <div class="svgTwo">
                    <img src="/img/svg/svg-2.svg" alt="">
                </div>
                <span>Releated Themes</span>
            </div>
        </div>
    </section>
    <section class="me-3 mb-3">
        <div class="right-cont align-self-end">
            <i class="fa-regular fa-envelope p-4 fs-4 rounded-circle"></i>
        </div>
    </section>
</template>

<style scoped>
section{
    position: fixed;
    width: 100%;
}
.svgOne{
    width: 20px;
    height: 20px;
}
.svgTwo{
    width: 20px;
    height: 20px;
}
.myBadge{
    background: #454545;
    box-shadow: 0 17px 10px -12px rgba(0, 0, 0, .4);
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
}
.myBadge:hover{
    transform: translateY(-5px);
}
.up:hover {
    background-color: #81b441;
}
.up:hover .svOne{
    filter: brightness(1000000%);
}
.down:hover {
    background-color: #d77864;
}
.fa-envelope{
    background-color: #0d6efd;
    position: fixed;
    transition: 0.3s;
    cursor: pointer;
    right: 0;
    bottom: 0;
    margin-bottom: 1rem;
    margin-right: 1rem;
}
.fa-envelope:hover {
    background-color: #0550c1;
}
.left-cont{
    position: fixed;
    bottom: 0;
    left: 0;
    margin-bottom: 1rem;
    margin-left: 1rem;
}
</style>