import { mount } from "@vue/test-utils";

import ActionButton from "./ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Button text",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Button text");
  });

  it("applies one of several CSS styles to the button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Button text",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
