<script>
import Store from '../data/StoreVladi.js';
export default {

    data() {
        return {
            Store,
        }
    },
    methods: {

    },
    mounted() {

    }


}
</script>


<template>
    <div>
        <div class="row">
            <!-- asdasdasd -->
            <div v-for="elemento in Store.latestBlogs" class="col-4 card-container">
                <div class="card">
                    <div class="card-img">
                        <img :src=elemento.img alt="">
                    </div>
                    <div class="card-data">
                        <h4 class="round-font black">{{ elemento.title }}</h4>
                        <p class="my-lightgrey info">{{ elemento.content }}</p>
                        <p class="date my-red">
                            {{ elemento.date }}
                            <button>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped>
img {
    width: 120%;
    object-fit: fill;
    transition: 0.3s;
}

.card-img:hover img {
    transform: scale(1.03);
    filter: sepia(0.1);
    filter: brightness(1.05);
}

.card-container {
    min-height: 30rem;
    padding: 1rem;
}

.card {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    border: none;
    box-shadow: 0px 5px 40px 5px rgba(122, 122, 122, 0.158);
}

.card-img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.card-data {
    padding: 1.5rem;
}

.date {
    padding-top: 2rem;
}

button {
    background-color: #e9d758;
    border: none;
    color: #fff;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    width: 45px;
    height: 45px;
    transition: 0.4s;
}

button:hover {
    background: #E56768;
    transform: translate(5px);
}

p {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
