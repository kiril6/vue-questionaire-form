<template>
  <div
    :class="
      type === 'square'
        ? 'cmp-radio-group cmp-radio-group--square'
        : 'cmp-radio-group'
    "
  >
    <h5
      v-text="title"
      class="cmp-radio-group__title"
      :class="isRequired ? 'cmp-radio-group--required' : ''"
    />
    <template v-if="type === 'radio'">
      <div v-for="(item, i) in [1, 2, 3, 4, 5]" :key="i">
        <input
          v-model="inputValue"
          :id="'Radio' + item"
          name="Radios"
          type="radio"
          :value="item"
          @change="onChange($event), getValue({ title, inputValue })"
          :disabled="readOnly"
        />
        <label
          :for="'Radio' + item"
          v-text="item"
          :class="radioButtonIsInvalid ? 'cmp-radio-group--invalid' : ''"
        />
      </div>
      <div
        v-for="item in subQuestions"
        :key="item.questions.id"
        class="cmp-radio-group__textarea"
      >
        <textarea
          v-if="item.values.indexOf(inputValue) > -1"
          rows="2"
          :id="item.values"
          :placeholder="item.questions[0].label"
        ></textarea>
      </div>
    </template>

    <template v-if="type === 'square'">
      <div v-for="(item, i) in ageGroup" :key="i">
        <input
          v-model="inputValue"
          :id="'Square' + (i + 1)"
          name="Squares"
          type="radio"
          :value="item"
          @change="onChange($event), getValue({ title, inputValue })"
          :disabled="readOnly"
        />
        <label
          :class="i === 0 ? 'first' : '' || i === 7 ? 'last' : ''"
          :for="'Square' + (i + 1)"
          v-text="item"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RadioGroup extends Vue {
  @Prop() private title!: string;
  @Prop() private type!: string;
  @Prop({ type: Function }) private getValue!: object;
  @Prop() private isRequired!: boolean;
  @Prop() private subQuestions!: object;
  @Prop() private radioButtonIsInvalid!: boolean;

  inputValue = 0;
  showComment = false;
  readOnly = false;
  ageGroup = [
    "<20",
    "20-29",
    "30-39",
    "40-49",
    "50-59",
    "60-69",
    "70-79",
    "80+",
  ];

  onChange(event) {
    let data = event.target.value;
    this.inputValue = data;
    this.inputValue !== 0 ? (this.readOnly = true) : (this.readOnly = false);
  }
}
</script>

<style scoped lang="scss">
.cmp-radio-group {
  &__title {
    width: 100%;
    display: inline-block;
    font-size: 1em;
  }
  input[type="radio"],
  input[type="checkbox"] {
    opacity: 0;
    display: none;
    margin: 0;
  }
  input[type="radio"] + label,
  input[type="checkbox"] + label {
    cursor: pointer;
    float: left;
    background: #efefef;
    color: #aaa;
    border: 1px solid #ccc;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0);
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    &--invalid {
      border: 1px solid red;
    }
  }

  input[type="radio"]:checked + label,
  input[type="checkbox"]:checked + label {
    background: rgb(45, 214, 206);
    border-color: #444;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
    color: white;
    border-radius: 50%;
  }

  &__textarea {
    &:empty {
      display: none;
    }
    width: 100%;
    display: inline-block;
    margin-top: 20px;
    textarea {
      width: 70%;
      @media only screen and (min-width: 600px) {
        width: 260px;
      }
      border-radius: 10px;
      border: 1px solid gray;
      padding: 5px 10px;
      &:focus {
        outline: 1px solid lightgray;
      }
    }
  }
  &.cmp-radio-group--square {
    input[type="radio"] + label,
    input[type="checkbox"] + label {
      padding: 10px 5px;
      height: 20px;
      width: 60px;
      border-radius: 0;
      margin-right: 0;
      &.first {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      &.last {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }

    input[type="radio"]:checked + label,
    input[type="checkbox"]:checked + label {
      padding: 10px 5px;
    }
  }
  .cmp-radio-group--required::after {
    content: " (required)";
    color: gray;
  }
}
</style>
