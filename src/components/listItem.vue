<template>
  <div>
    <div v-if="!isEditingList" class="row">
      
        <div class="col-1">
          <input 
              type="checkbox" 
              v-model="todo.completed"
          >
        </div>

        <div 
          class="col-5"
          :class="todo.completed ? 'text-primary' : ''"
        >
          <h5>{{ todo.title }}</h5>
          <p class="mb-0">{{ todo.desc }}</p>
        </div>

        <div class="col-6 text-right">
            <button 
              type="button" 
              class="btn btn-primary" 
              @click="isEditingList = true"
              data-test="editTask"
            >
              Edit
            </button>
            <button 
              type="button" 
              class="btn btn-warning" 
              @click="deleteTodo(todo)"
              data-test="deleteTask"
            >
              Delete
            </button>
        </div>

    </div>

    <div class="input-group mb-3" v-if="isEditingList">
        <input type="text" class="form-control" placeholder="todo name" v-model="todo.title">
        <input type="text" class="form-control" placeholder="todo description" v-model="todo.desc">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" @click="isEditingList = false">Finish</button>
        </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isEditingList: false
    }
  },

  methods: {
    deleteTodo(todo) {
      this.$emit('deleteTodo', todo);
    }
  }
}
</script>