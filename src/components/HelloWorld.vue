<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 :class="{ [$style.red]: counter < 0 }">{{ counter }}</h2>
    <v-btn color="success" @click="increment()">Increment</v-btn>
    <v-btn color="error" @click="decrement()">Decrement</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { appModule } from "@/store/modules/app";

@Component
export default class HelloWorld extends Vue {
  @Prop() msg!: string;

  get counter() {
    return appModule.counter;
  }

  increment() {
    appModule.increment();
  }

  decrement() {
    appModule.decrement();
  }
}
</script>

<style module lang="scss">
.red {
  color: red;
}

h1 {
  background-color: $primaryColor;
}
</style>
