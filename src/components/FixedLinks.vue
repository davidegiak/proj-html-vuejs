<script>
export default {

}
</script>

<template>
    <section class="d-flex justify-content-between p-3">
        <div class="left-cont d-flex flex-column gap-2">
            <div class="myBadge d-flex px-4 py-2">
                <div class="svgOne"></div>
                <span>Purchase theme</span>
            </div>
            <div class="myBadge d-flex px-4 py-2">
                <div class="svgTwo"></div>
                <span>Releated Themes</span>
            </div>
        </div>
        <div class="right-cont">
        </div>
    </section>
</template>

<style scoped>
section{
    position: fixed;
    bottom: 0;
}
.svgOne{
    background-image: url('/public/img/svg/svg-3.svg');
    background-size: contain;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
}
.svgTwo{
    background-image: url('/public/img/svg/svg-2.svg');
    background-size: contain;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
}
.myBadge{
    background: #454545;
    box-shadow: 0 17px 10px -12px rgba(0, 0, 0, .4);
}
</style>