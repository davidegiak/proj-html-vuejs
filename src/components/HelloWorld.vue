<script>

export default {
  data() {
    return {
      isClicked: false,
      isSmooth: true,
      valore1: "",
      valore2: "",
      valore3: "",
      valore4: "",
      bambi:'&#128150'
    }
  },
  methods: {
    dragging(value) {
      if (!this.isClicked) return;
      //stampa un "dragging" ogni pixel percorso su asse x (numero messaggi sulla destra della console)"
      console.log('dragging...')
      // al movimento del mouse scrolla a sx quanto il valore di "mosue-move" sull asse x
      //movementX è una proprieta onlyread di "mousemove"
      document.getElementById('carousel').scrollLeft -= value.movementX
    },
    // richiamo questa funzione con "@mouseup vedi template e fondopagina"
    mouseRelease() {
      this.isClicked = false;
      this.isSmooth = true;
    },

// ho fatto una modifica sui in modo "andare a capo" una volta arrivato alla "fine"
// questa parte la spiego direttamente in pagina, il codice è abbastanza autoesplicativo
    Right() {
      const carousel = document.getElementById('carousel');
      const distanzaScrollabile = carousel.scrollWidth - carousel.clientWidth;
      const distanzaScrollata = carousel.scrollLeft
      
      if (distanzaScrollata >= distanzaScrollabile) {
        carousel.scrollLeft = 0;
        console.log("Tornato all'inizio");
      } else {
        carousel.scrollLeft += 440;
        console.log("scrollDX");
      }
    },
    
    Left() {
      const carousel = document.getElementById('carousel');
      const distanzaScrollata = carousel.scrollLeft

      if (distanzaScrollata <= 0) {
        carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
        console.log("Tornato alla fine");
      } else {
        carousel.scrollLeft -= 440;
        console.log("scrollSX");
      }
    },


  },
  created() {
    setInterval(() => {
      const carousel = document.getElementById('carousel');

      this.valore1 = carousel.scrollWidth
      this.valore2 = carousel.clientWidth;
      this.valore3 = carousel.scrollWidth - carousel.clientWidth
      this.valore4 = carousel.scrollLeft

     if(carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth){
       document.getElementById("heart").innerHTML = "&#128148" 
     }
     else if(carousel.scrollLeft == 0){
      document.getElementById("heart").innerHTML = "&#128150" 
     }
     else{
      document.getElementById("heart").innerHTML = "&#128558" 
     }
    }, 20)
  },
  mounted() {

  }
}
</script>


<template>
  <div class="debug">
    <div>
      <h2>scroll Width : {{ valore1 }}</h2>
      <p>la scroll width è lo sapzio totale scrollabile, ovvero la width dell elemento che contiene tutte le forto</p>
    </div>
    <div>
      <h2>carousel Width : {{ valore2 }}</h2>
      <p> il carousel width è lo spazio visibile (in questo caso 1100px - 4px per i vordi)</p>
    </div>
    <div>
      <h2>max scroll: {{ valore3 }}</h2>
      <p>il max scrollable distance (ovvero i px di scroll che si possono fare) sara quindi lo spazio scrollabile massimo meno lo spazio visualizzato</p>
    </div>
    <div>
      <h2>pixel scrollati : {{ valore4 }}</h2>
      <p id="heart">&#128148</p>
    </div>
  </div>

  <div class="container">
    <button @click="Left()">prev</button>
    <div @mousemove="dragging" 
         @mousedown="isClicked = !isClicked, isSmooth = !isSmooth" 
         @mouseup="mouseRelease()"
         id="carousel" :class="{ smooth: isSmooth, slow: isSmooth }">
      <div id="element-container">
        <div class="elemento">foto 1</div>
        <div class="elemento">foto 2</div>
        <div class="elemento">foto 3</div>
        <div class="elemento">foto 4</div>
        <div class="elemento">foto 5</div>
        <div class="elemento">foto 6</div>
        <div class="elemento">foto 7</div>
        <div class="elemento">foto 8</div>
      </div>
    </div>
    <button @click="Right()">next</button>
  </div>
</template>



<style scoped>
.debug{
border: 2px dashed purple;
width: 1100px;
margin: auto;
margin-top: 2rem;
padding: 1rem;
text-align: center;
}
.debug div{
  margin-bottom: 1rem;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 69vh;
}

.slow {   
  transition: scroll-left 0.6s ease; /* Adjust duration as needed */ 
}

#carousel {
  width: 1100px;
  height: 330px;
  border: 2px dashed green;
  background: rgba(172, 255, 47, 0.329);
  display: flex;
  align-items: center;
  overflow-x: hidden;
}

/* classe per scrollare SMOOTH */
/* lo metto come classe separata perche non va daccordo col "drag-scroll" */
.smooth {
  scroll-behavior: smooth;
}


#element-container {
  display: flex;
  width: 1750px;
}

button {
  border: 2px dashed fuchsia;
  background: rgba(255, 0, 255, 0.199);
  margin: 2rem;
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.elemento {
  border: 2px dashed #F87102;
  background: rgb(255, 212, 132);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  /* background: rgba(255, 166, 0, 0.288); */
}
</style>



<!-- nel codice viene usato "@mousdown" e non "@click" lascio la documentazione di MDN -->


<!-- "movementX" spieghato su MDN (le prime 2 righe dicono gia tutto) -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementX -->

<!-- ._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.- -->

<!-- "mousedown" sempre su mdn (anche qua le prime righe spiegano gia abbastanza) -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event -->

<!-- ._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.- -->

<!-- per "mouseup" sempre su MDN ( <3 MDN ) -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event -->

<!-- ._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.- -->

<!-- documentazione scrollwidth -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth -->

<!-- ._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.- -->

<!-- il clientwidth è praticamente lo spazio che è possibile vedere -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth -->