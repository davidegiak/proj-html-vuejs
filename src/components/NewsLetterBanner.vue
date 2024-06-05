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
    <div class="my-bg-red ">
        <div class="container-lg d-flex align-items-center p-5 m-auto row">
            <span class="col-6 round-font">Subscrive Now to Our Newsletter !</span>
            <div class="col-6 mail-input">
                <input type="mail" placeholder="Email Adress...">
                <button>
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
span {
    color: white;
    font-size: 2.3rem;
}

.mail-input {
    position: relative;
}

input {
    width: 80%;
    margin-left: 1rem;
    border-radius: 50px;
    padding: 1rem 2.5rem;
    border: none;
    height: 60px;
    transition: 0.3s;
    outline: none;
    margin-left: 4rem;
}

button {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border: none;
    background: #E9D758;
    color: white;
    position: absolute;
    right: 8.4%;
    transition: 0.4s;

    background-color: #e9d758;
    border-radius: 50%;
    position: absolute;
    /* right: 0;
    top: 0; */
}

button:hover {
    background: #E56768;
    transform: rotate(360deg);
    box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.247);
}

.mail-input:hover input {
    width: 70%;
}
</style>
