<template>
  <div class="cmp-modal">
    <slot></slot>
    <span v-text="date" class="cmp-modal__date" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Prop() private date!: string;
}
</script>

<style scoped lang="scss">
.cmp-modal {
  display: none;
  @media only screen and (min-width: 800px) {
    width: 160px;
    display: block;
    position: absolute;
    right: -48px;
    top: 20%;
    background-color: rgb(238, 238, 238);
    padding: 20px 20px;
    border-radius: 15px;
    box-shadow: 5px 5px 5px 7px rgba(#888888, 0.3);
    &__date {
      color: rgb(0, 128, 247);
      font-size: 0.55em;
      font-weight: bold;
      position: absolute;
      bottom: 10px;
      width: calc(100% - 40px);
      text-align: center;
      border-top: 2px solid rgb(207, 0, 0);
      padding-top: 10px;
    }
    ol {
      padding-inline-start: 8px;
      font-size: 1em;
      margin-top: 0;
      li {
        &::marker {
          font-weight: bold;
          color: rgb(0, 128, 247);
        }
        div:first-child {
          font-weight: bold;
        }
        padding: 4px 0;
        &:not(:last-of-type) {
          border-bottom: 1px dashed lightgray;
        }
      }
    }
  }
}
</style>
