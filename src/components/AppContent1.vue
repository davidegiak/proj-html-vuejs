<!-- COMPONENTE SINGOLO -->
<script>
import AppComponent1 from './AppComponent1.vue';

// SCRIPT
export default {
  components: {
    AppComponent1,
  },
  data() {
    return {
      iconLibrary: 'img/Books-icon.png',
      cap: '/img/Graduation-Illustration.png'
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<template>
  <!-- TEMPLATE html-->
  <div class="bg-white">
    <!-- 1' SEZIONE -->
    <div class="container d-flex pt-5 pb-5">
      <!-- LEFT -->
      <div class="left">
        <img class="img-lib" :src="iconLibrary" alt="">
        <div class="pb-3">
          <h2 class="round-font black">Thousands of courses
            for any type of student</h2>
        </div>
        <div class="pb-3 black">
          <p>At EduPrime, it doesn’t matter what domain you wish to pursue a career in. Here you can find a course that
            satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked
            as the most versatile university in the world, thanks to the number of courses it provides.</p>
        </div>
        <button class="button">Browse through courses</button>
      </div>
      <div class="right">
        <img class="img" :src="cap" alt="">
      </div>
    </div>
    <!-- 2' SEZIONE -->
    <div>
      <div>
        <h2 class="round-font black text-center pt-5 pb-3">Faculties available at EduPrime</h2>
      </div>
      <p class="text-center black pb-5">A single university with a load of courses, tailored<br>
        to satisfy any student’s needs.</p>
    </div>
  </div>
  <!-- App Component -->
  <AppComponent1 />


</template>

<!-- CON SCOPED DICHIARO CSS SOLO AL ATTUALE COMPONENTE/file -->
<style scoped>
/* STILE */

.little {
  width: 25%;
}

.bg-white {
  background-color: white;
}

.left {
  width: 60%;
}

.right {
  width: 50%;
}

.container {
  width: 1200px;
}

.img-lib {
  height: 3rem;
}

.img {
  width: 100%;
}

button {
  font-size: 1.2rem !important;
}

h2 {
  font-size: 3.3rem;
}

p {
  opacity: 0.7;
}

.button {
  padding: 16px 43px !important;
  background-color: #e9d758;
  margin-left: 20px;
  color: #fff;
  border-radius: 32px;
  border: 1px solid transparent;
  font-weight: 600;
  transition: 0.3s ease;
}

.button-white {
  padding: 16px 43px !important;
  background-color: transparent;
  margin-left: 20px;
  color: #fff;
  border-radius: 32px;
  border: 1px solid white;
  font-weight: 600;
  transition: 0.3s ease;
}

.button-white:hover {
  padding: 16px 43px !important;
  background-color: #e9d758;
  margin-left: 20px;
  color: #fff;
  border-radius: 32px;
  border: 1px solid transparent;
  font-weight: 600;
}

.button:hover {
  padding: 16px 43px !important;
  background-color: #E56768;
  margin-left: 20px;
  color: #fff;
  border-radius: 32px;
  border: 1px solid white;
  font-weight: 600;
}


.btn {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid transparent;
}
</style>
