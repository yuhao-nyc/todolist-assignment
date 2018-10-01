/* eslint-disable */
import Vue from 'vue';
import listItem from 'src/components/listItem.vue';
import { deleteTodo } from 'src/components/list.vue';

describe('listItem component', () => {
  let vm = {};

  beforeEach(() => {
    const Constructor = Vue.extend(listItem);
    vm = new Constructor().$mount();
  });

  //TODO
  //most of below code are suedo code. 
  //just show my basic idea how to implete unit tests
  it('should delete selected todo task from existing list', () => {
    const testTodoList = [
      {
        title: 'test title',
        desc: 'test desc',
        completed: false,
      },
    ];

    testTodoList.deleteTodo(0);
    expect(testTodoList.results.not.include('test title'));
  });

  //todo edit list
});
