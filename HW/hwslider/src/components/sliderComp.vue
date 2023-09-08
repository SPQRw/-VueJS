<template>
  <div>
    <button @click="prevSlide">Prev</button>
    <button @click="nextSlide">Next</button>
    <slide-comp
      v-for="(slide, index) in slides"
      :key="index"
      :title="slide.title"
      :src="slide.src"
      :text="slide.text"
      v-show="currentSlide === index"
    ></slide-comp>
  </div>
</template>

<script>
import slideComp from "./slideComp.vue";

export default {
  components: {
    slideComp,
  },
  data() {
    return {
      slides: [
        {
          title: "Slide 1",
          text: "This is slide 1",
          src: "../assets/tree-736885_1280.jpg",
        },
        {
          title: "Slide 2",
          src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F999%2Fcpsprodpb%2F15951%2Fproduction%2F_117310488_16.jpg&tbnid=Hc5jHkS6Vw5sZM&vet=12ahUKEwiKvuP97JiBAxWbLBAIHRGKC84QMygDegQIARBX..i&imgrefurl=https%3A%2F%2Fwww.bbc.co.uk%2Fnews%2Fin-pictures-56211135&docid=aPImLvUOjpk0SM&w=999&h=749&q=picture&ved=2ahUKEwiKvuP97JiBAxWbLBAIHRGKC84QMygDegQIARBX",
          text: "This is slide 2",
        },
        {
          title: "Slide 3",
          src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F999%2Fcpsprodpb%2F15951%2Fproduction%2F_117310488_16.jpg&tbnid=Hc5jHkS6Vw5sZM&vet=12ahUKEwiKvuP97JiBAxWbLBAIHRGKC84QMygDegQIARBX..i&imgrefurl=https%3A%2F%2Fwww.bbc.co.uk%2Fnews%2Fin-pictures-56211135&docid=aPImLvUOjpk0SM&w=999&h=749&q=picture&ved=2ahUKEwiKvuP97JiBAxWbLBAIHRGKC84QMygDegQIARBX",
          text: "This is slide 3",
        },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      }
    },
  },
};
</script>
