import { shallowMount } from "@vue/test-utils";
import Form from "@/components/Form.vue";
import Button from "@/components/Button.vue";

describe("Testing props form title containing the correct title", () => {
  it("renders props.title when passed", () => {
    const title = "Customer Alliance Form";
    const wrapper = shallowMount(Form, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});

describe("Testing props button title containing the correct title", () => {
  it("renders props.title when passed", () => {
    const title = "Submit";
    const wrapper = shallowMount(Button, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});

describe("Testing button component", () => {
  it("Find button submit and simulate click", () => {
    const wrapper = shallowMount(Button);
    const submitButton = wrapper.find("#btnSubmit");
    submitButton.trigger("click");
  });
});
