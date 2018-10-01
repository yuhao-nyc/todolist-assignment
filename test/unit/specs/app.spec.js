/* eslint-disable */
import Vue from 'vue';
import app from 'src/app.vue';

describe('app', () => {
  it('should render app title', () => {
    const Constructor = Vue.extend(app);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('[data-test="title"]').textContent)
      .to.equal('Todo List');
  });
});
