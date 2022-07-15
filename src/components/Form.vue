<template>
  <div class="cmp-form">
    <h2 v-text="title" class="cmp-form__title" />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  @Prop() private title!: string;
}
</script>

<style lang="scss">
.cmp-form {
  padding: 20px 40px;
  text-align: left;
  outline: none;
  user-select: none;
  position: relative;
  &__title {
    color: rgb(0, 128, 247);
    margin-bottom: 40px;
  }
  &__result {
    width: calc(100% - 60px);
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 0.8em;
    text-indent: 20px;
    &--success {
      background-color: lightgreen;
    }
    &--error {
      background-color: red;
      color: white;
    }
  }
}
</style>
