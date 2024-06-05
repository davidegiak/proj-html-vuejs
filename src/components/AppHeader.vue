<!-- COMPONENTE SINGOLO -->
<script>
// SCRIPT
export default {
  data() {
    return {
      logo: 'img/theme_eduprime_logo.png',
      bgHeader: 'img/hero.png',
      jumboDesc: 'EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools etc.',
      wave: '/img/Wave-1.png',
      links: [
        { name: 'Home', actions: ['Action', 'Another action', 'Something else here'] },
        { name: 'Courses', actions: ['Action', 'Another action', 'Something else here'] },
        { name: 'About Us', actions: null },
        { name: 'News', actions: ['Action', 'Another action', 'Something else here'] },
        { name: 'Pages', actions: ['Action', 'Another action', 'Something else here'] },
        { name: 'Contact', actions: null },
        { name: 'Purchase', actions: null },
      ]
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
  <div class="container-header position-relative">
    <!-- SEZIONE HEADER -->
    <header class="p-4 d-flex justify-content-between align-items-center round-font">
      <div>
        <img class="logo" :src="logo" alt="">
      </div>
      <div class="left">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <!-- TEMPLATE PER CICLO DA DATA -->
            <template v-for="element, i in links">
              <div v-if="element.actions != null" class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <button class="btn  dropdown-toggle round-font" data-bs-toggle="dropdown" aria-expanded="false">
                      {{ element.name }}
                    </button>
                    <!-- AD OGNI ELEMENTO CICLO NELLE ACTION PER STAMPARLE IN PAGINA NEL DROPDOWN -->
                    <ul v-if="element.actions != null" class="dropdown-menu">
                      <li v-for="elemento in element.actions"><a class="dropdown-item" href="#">{{ elemento }}</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <!-- SE NON CONTIENE AZIONI NON CREO IL DROPDOWN -->
              <a v-if="element.actions == null" class="navbar-brand" href="#">{{ element.name }}</a>
            </template>

            <button class="button ms-3">VIEW COURSES</button>

          </div>
        </nav>
        <div class="gradient-header"></div>
      </div>
    </header>
    <!-- FINE NAVBAR -->
    <div class="container">
      <!-- INIZIO JUMBOTRON -->
      <div class="jumbo d-flex flex-columns align-items-center ">
        <h1 class="round-font pb-5 pt-5">Showcase your courses</h1>
        <p>{{ jumboDesc }}</p>
        <div>
          <button class="button round-font"><i class="fa-solid fa-magnifying-glass"></i> Search courses</button>
          <button class="button-white round-font ms-4">Apply for university</button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-red">
    <img class="wave" :src="wave" alt="">
  </div>

</template>

<!-- CON SCOPED DICHIARO CSS SOLO AL ATTUALE COMPONENTE/file -->
<style scoped>
/* STILE */

.container {
  width: 1200px;
}

* {
  font-size: 1.2rem;
}

.gradient-header {
  height: 12rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgb(2, 0, 36);
  background: linear-gradient(180deg, rgba(2, 0, 36, 0) 78%, rgba(209, 94, 94, 1) 98%);
}

.container-header {
  height: 40rem;
  background-image: url(../../img/hero.png);
  background-size: cover;
  background-position: bottom;
}

.logo {
  height: 4rem;
}

button {
  font-size: 1.2rem !important;
  color: white;
}

button:hover {
  color: #e9d758;
}

a:hover {
  color: #e9d758;
}

.dropdown a {
  color: black;
}


/* MODIFICA DI BOOTSTRAP  ALL HOVER APPARE IL DROPDOWN COME NEL SITO ORIGINALE*/
.dropdown-menu {
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

/* DROPDOWN TRANSITION NON FUNZIONANTE */
.nav-item:hover .dropdown-menu {
  display: block;
  opacity: 1;
}


h1 {
  font-size: 4rem;
}

.bg-red {
  background-color: #d15e5e;
}

.button {
  padding: 16px 43px !important;
  background-color: #e9d758;
  color: #fff;
  border-radius: 32px;
  border: 1px solid transparent;
  font-weight: 600;
  transition: 0.3s ease;
}

.button-white {
  padding: 16px 43px !important;
  background-color: transparent;
  color: #fff;
  border-radius: 32px;
  border: 1px solid white;
  font-weight: 600;
  transition: 0.3s ease;
}

.button-white:hover {
  padding: 16px 43px !important;
  background-color: #e9d758;
  color: #fff;
  border-radius: 32px;
  border: 1px solid transparent;
  font-weight: 600;
}

.button:hover {
  padding: 16px 43px !important;
  background-color: transparent;
  color: #fff;
  border-radius: 32px;
  border: 1px solid white;
  font-weight: 600;
}

.navbar {
  background-color: rgba(0, 0, 0, 0) !important;
}

.btn {
  background-color: rgba(0, 0, 0, 0);
  border: transparent;
}

.wave {
  object-fit: cover;
  width: 100%;
  height: 3rem;
  opacity: 1;
}

.jumbo {
  height: 100%;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.flex-columns {
  flex-direction: column;
}
</style>
