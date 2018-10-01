/* eslint-disable */
import Vue from 'vue';
import list from 'src/components/list.vue';
import { createNew } from 'src/components/list.vue';

describe('list component', () => {
  let vm = {};

  beforeEach(() => {
    const Constructor = Vue.extend(list);
    vm = new Constructor().$mount();
  });

  it('should render default content', () => {
    expect(vm.$el.querySelectorAll('[data-test="todoList"]').length).to.equal(3);
  });

  //TODO
  //most of below code are suedo code. 
  //just show my basic idea how to implete unit tests
  it('should add new todo list', () => {
    vm.$el.querySelector('[data-test="todoNameInput"]').type('test todo task');
    vm.$el.querySelector('[data-test="todoDescInput"]').type('test todo task desc');
    vm.$el.querySelector('[data-test="addNewTodo"]').simulate('click');
    expect(vm.$el.querySelectorAll('[data-test="todoList"]').length).to.equal(4);
    expect(vm.$el.querySelectorAll('[data-test="todoList"]').lastChild).textContent.to.equal('test todo task')
  });

  it('should filter completed items', () => {
    vm.$el.querySelector('[data-test="completedFilter"]').simulate('click');
    expect(vm.$el.querySelectorAll('[data-test="todoList"]')).to.equal(1);
  });

  const testTodoList = [
    {
      title: 'test title',
      desc: 'test desc',
      completed: false,
    },
  ];

  it('should push new todo task to existing list', () => {
    testTodoList.createNew(
      {
        title: 'new',
        desc: 'new desc',
        completed: false,
      },
    );
    expect(testTodoList.length.to.equal(2));
  });
});
