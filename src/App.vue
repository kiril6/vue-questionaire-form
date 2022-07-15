<template>
  <div id="app">
    <Form :title="formTitle">
      <ol>
        <li v-for="item in data.questions" :key="item.id">
          <component
            :is="
              item.type === 'rating' || item.type === 'age'
                ? 'RadioGroup'
                : 'Input'
            "
            :item="item"
            :title="item.label"
            :getValue="getInputValue"
            :type="
              item.type === 'rating'
                ? 'radio'
                : '' || item.type === 'age'
                ? 'square'
                : '' || item.type === 'password'
                ? 'password'
                : '' || item.type === 'email'
                ? 'email'
                : ''
            "
            :subQuestions="item.sub_questions"
            :isRequired="item.validation.required"
            :validateEmail="
              emailIsInvalid ? 'the email is not in correct format' : ''
            "
            :validatePassword="
              passwordIsInvalid
                ? 'please use at least one capital and one numeric character'
                : ''
            "
            :readOnly="readOnly"
            :radioButtonIsInvalid="radioButtonNotChoosed"
          />
        </li>
      </ol>

      <Button @button-click="submit()" title="Submit" />
      <div
        v-if="checkForm"
        :class="
          submitMessage.includes('Success')
            ? 'cmp-form__result cmp-form__result--success'
            : 'cmp-form__result cmp-form__result--error'
        "
        v-text="submitMessage"
      ></div>
      <!-- logic to show only if answer is provided -->
      <Modal v-if="answeredQuestions.length > 0" :date="showDate()">
        <ol>
          <li v-for="(item, i) in answeredQuestions" :key="i">
            <div v-text="item.title" />
            <div v-text="'- ' + item.inputValue" />
          </li>
        </ol>
      </Modal>
    </Form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from "./components/Form.vue";
import RadioGroup from "./components/RadioGroup.vue";
import Input from "./components/Input.vue";
import Button from "./components/Button.vue";
import Modal from "./components/Modal.vue";
import questionsData from "./assets/json/questions.json";

@Component({
  components: {
    Form,
    RadioGroup,
    Input,
    Button,
    Modal,
  },
})
export default class App extends Vue {
  mounted() {
    console.log(this.data.questions);
  }

  showDate() {
    const dt = new Date();
    return (
      "DATE OF EXPERIENCE " +
      dt.getFullYear() +
      "/" +
      (dt.getMonth() + 1) +
      "/" +
      dt.getDate()
    );
  }

  formTitle = "Customer Alliance Form";
  data = questionsData;
  checkForm = false;
  submitMessage = "";
  passwordIsInvalid = false;
  emailIsInvalid = false;
  radioButtonNotChoosed = false;
  someValue = "";
  answeredQuestions = [];
  readOnly = { email: false, password: false };

  getInputValue(someValue: object) {
    const regexPassword = /(?:[A-Z].*[0-9])|(?:[0-9].*[A-Z])/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      someValue.title.includes("password") &&
      someValue.inputValue.length > 0
    ) {
      if (regexPassword.test(someValue.inputValue)) {
        this.passwordIsInvalid = false;
        this.readOnly["password"] = true;
      } else {
        this.passwordIsInvalid = true;
        return;
      }
    } else if (
      someValue.title.includes("email") &&
      someValue.inputValue.length > 0
    ) {
      if (regexEmail.test(someValue.inputValue)) {
        this.emailIsInvalid = false;
        this.readOnly["email"] = true;
      } else {
        this.emailIsInvalid = true;
        return;
      }
    } else if (
      someValue.title.includes("feel") &&
      someValue.inputValue.length > 0
    ) {
      this.radioButtonNotChoosed = false;
    } else {
      this.radioButtonNotChoosed = true;
    }

    if (
      someValue.inputValue.length > 0 &&
      !this.answeredQuestions.filter((el) => el.title === someValue.title)
        .length
    ) {
      this.answeredQuestions.push(someValue);
    }
  }

  submit() {
    this.checkForm = true;
    if (
      this.emailIsInvalid ||
      this.passwordIsInvalid ||
      this.radioButtonNotChoosed
    ) {
      this.submitMessage =
        "Error - check error messages for correctness of the form";
    }
    if (this.answeredQuestions.length >= 2) {
      this.radioButtonNotChoosed = false;
      this.submitMessage = "Success - form has been sent successfully";
    } else {
      this.submitMessage = "Error - please complete the form";
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: lightgray;
  margin-top: 30px;
  margin-bottom: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  border-radius: 15px;
  width: 80%;
  margin: 0 auto;
  background-color: white;
  ol {
    padding-inline-start: 16px;
    font-size: 0.83em;
    li::marker {
      font-weight: bold;
      color: rgb(0, 128, 247);
    }
  }
}
</style>
