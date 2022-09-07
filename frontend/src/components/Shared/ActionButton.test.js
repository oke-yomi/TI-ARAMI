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
});
