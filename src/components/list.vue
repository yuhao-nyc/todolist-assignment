<template>
  <div>
    <div class="row mb-4">
      <div class="col-6 mt-2">
        You already finished {{ completedCount }} {{ completedCount > 1 ? 'tasks' : 'task'}}!
      </div>
      <div class="col-6 text-right">
        <div class="btn-group" role="group">
            <button 
              type="button" 
              class="btn btn-outline-primary" 
              @click="showCompletedList = true"
              data-test="completedFilter"
            >
              Completed
            </button>
            <button type="button" class="btn btn-outline-primary" @click="showCompletedList = false">View All</button>
        </div>
      </div>
    </div>

    <div class="alert alert-warning mt-4" role="alert" v-if="createNewErrorMessage">
      Oops..seems like new task name is empty :(
    </div>

    <div class="input-group mb-4">
        <input 
          type="text" 
          class="form-control" 
          placeholder="new todo name" 
          v-model="newTodoName"
          data-test="todoNameInput"
        >
        <input 
          type="text" 
          class="form-control" 
          placeholder="new todo description" 
          v-model="newTodoDesc"
          data-test="todoDescInput"
        >
        <div class="input-group-append">
            <button 
              class="btn btn-outline-secondary" 
              @click="createNew"
              data-test="addNewTodo"
            >
              Add
            </button>
        </div>
    </div>
    
    <div v-if="showCompletedList">
      <transition-group name="todolist">
        <button
            type="button"
            class="list-group-item list-group-item-action todolist-item"
            v-for="(todo, index) in completedList"
            v-bind:key="index"
            data-test="todoList"
        >
          <ListItem
            :todo = todo
            v-on:deleteTodo="deleteTodo"
          >
          </ListItem>
        </button>
      </transition-group>
    </div>

    <div v-if="!showCompletedList">
      <transition-group name="todolist">
        <button
            type="button"
            class="list-group-item list-group-item-action todolist-item"
            v-for="(todo, index) in todoList"
            v-bind:key="index"
            data-test="todoList"
        >
          <ListItem
            :todo = todo
            v-on:deleteTodo="deleteTodo"
          >
          </ListItem>
        </button>
      </transition-group>
    </div>

  </div>
</template>
<script>
/* eslint-disable */
import ListItem from './ListItem.vue'

export default {
  components: {
    ListItem
  },
  computed: {
    completedList() {
      return this.todoList.filter(todo => {
        return todo.completed
      })
    },
    completedCount() {
      return this.todoList.filter(todo => {
        return todo.completed
      }).length
    }
  },
  data(){
    return {
      todoList: [
          {
              title: 'Buy milk',
              desc: 'Buy whole milk',
              completed: true
          },
          {
              title: 'Jogging',
              desc: 'River park jogging tonight',
              completed: false
          },
          {
              title: 'Dinner with Jon',
              desc: 'Meet Jon for dinner at 8pm',
              completed: false
          },
      ],
      newTodoName: '',
      newTodoDesc: '',
      showCompletedList: false,
      createNewErrorMessage: false
    }
  },
  methods: {
    createNew() {
        if (this.newTodoName === '') {
          this.createNewErrorMessage = true
        } else {
          this.todoList.push(
              {
                  title: this.newTodoName,
                  desc: this.newTodoDesc,
                  completed: false
              }
          )
          this.newTodoName = '',
          this.newTodoDesc = ''
          this.createNewErrorMessage = false
        }

    },
    deleteTodo(todo) {
      this.todoList.splice(this.todoList.indexOf(todo), 1)
    }
  }
}
</script>
<style scoped>
.todolist-enter-active, .todolist-leave-active {
  transition: all 500ms;
}
.todolist-enter, .todolist-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>