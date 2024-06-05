<!-- COMPONENTE SINGOLO -->
<script>
// SCRIPT
export default {
  data() {
    return {

      arrayObject: [
        { name: 'Law Faculty', littleIcon: 'img/Gavel-v2.png', icon: 'img/Gavel-Illustration-e1556884768193.png', paragraph: 'Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.' },
        { name: 'Economy', littleIcon: 'img/Coins-tabs-v2.png', icon: 'img/Economy.png', paragraph: 'Economics focuses on the behaviour and interactions of economic agents and how economies work. Microeconomics analyzes basic elements in the economy, including individual agents and markets, their interactions, and the outcomes of interactions, including unemployment of resource.' },
        { name: 'Medicine', littleIcon: 'img/Medicine-tabs-v2.png', icon: 'img/Medicine.png', paragraph: 'Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.' },
        { name: 'Computer Science', littleIcon: 'img/Computer-tabs-v2.png', icon: 'img/Computer-Science.png', paragraph: 'Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation software systems.' },
        { name: 'Graphic Design', littleIcon: 'img/Palette-tabs-v2.png', icon: 'img/Graphic-Design.png', paragraph: 'Graphic design is the process of visual communication and problem-solving through the use of typography, photography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term ``graphic design`` is used synonymously.' },
      ],

      active: 0,
    }
  },
  methods: {
    activeSec(index) {
      this.active = index
    }
  },
  mounted() {

  },
}
</script>

<template>
  <!-- TEMPLATE html-->
  <div class="bg-white">
    <!-- --WRAPPER SUPERIORE ACTIVE-- -->
    <div class="wrapper-box mb-5">
      <div v-for="element, i in arrayObject" class="box red round-font position-relative" @click="activeSec(i)"
        :class="{ active: i == active }">
        <!-- FONT AWSOME PER LA FRECCIA IN BASSO -->
        <div class="arrow d-none position-absolute" :class="{ activeSvg: i == active }"><i
            class="fa-solid fa-caret-down fa-2x red"></i></div>

        <div class="d-flex justify-content-center">
          <img :src="element.littleIcon" :class="{ activeImg: i == active }" alt="">
        </div>
        <div>
          {{ element.name }}
        </div>
      </div>
    </div>
    <!-- PARTE INFERIORE -->
    <div class="d-flex align-items-center justify-content-end container mb-5">
      <div class="left d-flex justify-content-center">
        <img :src="arrayObject[active].icon" alt="">
      </div>
      <div class="right">
        <h2 class="round-font black">{{ arrayObject[active].name }}</h2>
        <p>{{ arrayObject[active].paragraph }}</p> <br>
        <button class="button round-font">Read More</button>
      </div>
    </div>
  </div>
</template>

<!-- CON SCOPED DICHIARO CSS SOLO AL ATTUALE COMPONENTE/file -->
<style scoped>
/* STILE */

.wrapper-box {
  display: flex;
  justify-content: center;
  height: 10rem;
  border-top: 1px solid rgb(225, 225, 225);
  border-bottom: 1px solid rgb(225, 225, 225);
}

.active {
  background-color: #E56768 !important;
  color: white;
}

.activeImg {
  filter: invert(100%) brightness(100) !important;
}

.activeSvg {
  color: #E56768;
  display: block !important;
}

.box {
  height: 10rem;
  width: 13rem;
  background-color: #ffffff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgb(225, 225, 225);
  font-size: 1.3rem;
}

.arrow {
  bottom: -26px;
  left: 50%;
  transform: translateX(-50%);
}

.bg-white {
  background-color: white;
}

.left {
  width: 50%;
}

.right {
  width: 50%;
}

.container {
  width: 50%;
}

img {
  width: 50%;
}

button {
  font-size: 1.2rem !important;
}

h2 {
  font-size: 3.3rem;
}

p {
  opacity: 0.7;
  color: black;
}

.button {
  padding: 16px 43px !important;
  background-color: #e9d758;
  color: #fff;
  border-radius: 32px;
  border: transparent;
  font-weight: 600;
  transition: 0.3s ease;
}

.button:hover {
  padding: 16px 43px !important;
  background-color: #E56768;
  color: #fff;
  border-radius: 32px;
  border: 1px solid white;
  font-weight: 600;
}

.btn {
  background-color: rgba(0, 0, 0, 0);
  border: transparent;
}
</style>
