<template>
  <div class="cmp-button">
    <button
      @click="$emit('button-click')"
      v-text="title"
      id="btnSubmit"
      class="cmp-button__button"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped lang="scss">
$btnColor: rgb(45, 214, 206);
.cmp-button {
  max-width: 496px;
  display: flex;
  justify-content: right;
  margin-top: 20px;
  &__button {
    margin-right: 20px;
    border-radius: 8px;
    border: 1px solid $btnColor;
    background-color: $btnColor;
    color: white;
    padding: 10px 20px;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    outline: 1px solid lightgray;
    &:hover {
      background-color: rgb(30, 138, 132);
      cursor: pointer;
    }
  }
}
</style>
