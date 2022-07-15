<template>
  <div class="cmp-input">
    <h5
      v-text="title"
      class="cmp-input__title"
      :class="isRequired ? 'cmp-input--required' : ''"
    />
    <template v-if="type === 'email'">
      <input
        @blur="getValue({ title, inputValue })"
        v-model="inputValue"
        type="email"
        :readonly="readOnly['email']"
        class="cmp-input__input"
      />
      <div v-text="validateEmail" class="cmp-input__validate" />
    </template>
    <template v-if="type === 'password'">
      <input
        @blur="getValue({ title, inputValue })"
        v-model="inputValue"
        type="password"
        :readonly="readOnly['password']"
        class="cmp-input__input"
      />
      <div v-text="validatePassword" class="cmp-input__validate" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Input extends Vue {
  @Prop() private title!: string;
  @Prop() private type!: string;
  @Prop({ type: Function }) private getValue!: object;
  @Prop() private isRequired!: boolean;
  @Prop() private readOnly!: boolean;
  @Prop() private validateEmail!: string;
  @Prop() private validatePassword!: string;

  inputValue = "";

  setReadOnly() {
    if (this.inputValue.length > 0) {
      this.readOnly = true;
    }
  }
}
</script>

<style scoped lang="scss">
.cmp-input {
  &__title {
    width: 100%;
    display: inline-block;
    font-size: 1em;
  }
  &__input {
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid gray;
    width: calc(100% - 100px);
    max-width: 440px;
    &:focus {
      outline: 0.1em solid lightgray;
    }
  }
  &--required::after {
    content: " (required)";
    color: gray;
  }
  &__validate {
    padding-top: 4px;
    color: red;
    font-weight: bold;
    text-indent: 4px;
    &:empty {
      display: none;
    }
  }
}
</style>
