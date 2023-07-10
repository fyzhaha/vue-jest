import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";

describe("HelloWorld.vue", () => {
  it("tes init data", () => {
    expect(HelloWorld.data().msg).toBe("vue test");
  });
  //created
  it("test msg data after created", () => {
    let vm = new Vue(HelloWorld).$mount();
    expect(vm.msg).toBe("aftermounted");
  });
  //mounted
  it("test msg1 data after mounted", () => {
    let vm = new Vue(HelloWorld).$mount();
    expect(vm.msg1).toBe("test mounted");
  });

  // click event
  it("test click event", () => {
    let wrapper = mount(HelloWorld);
    expect(wrapper.vm.msg).toBe("aftermounted");
    wrapper.find(".btn").trigger("click");
    expect(wrapper.vm.msg).toBe("click over");
  });
});
