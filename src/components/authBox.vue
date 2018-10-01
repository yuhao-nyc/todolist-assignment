<template>
  <div v-if="!authedStore">

    <div v-if="!signUpBox">
      <h2 class="mb-4">Log In</h2>

      <div class="form-group">
        <label>User Name</label>
        <input v-model="username" type="text" class="form-control" placeholder="Enter user name">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" placeholder="Password">
      </div>

      <div class="col-4 pl-0">
        <button type="submit" class="btn btn-primary mt-4 btn-lg btn-block" @click="authUser">Login</button>
      </div>

      <div class="alert alert-warning mt-4" role="alert" v-if="errorMessage">
        Sorry your username and password do not match our records. Please double check
      </div>
    </div>

    <div v-if="signUpBox">

      <h2 class="mb-4">Sign Up a new account</h2>
      <div class="form-group">
        <label>Email Address (optional)</label>
        <input type="email" class="form-control" placeholder="Enter your email address">
      </div>

      <div class="form-group">
        <label>User Name</label>
        <input type="text" v-model="usernameStoreInput" class="form-control" placeholder="Enter user name">
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="passwordStoreInput" class="form-control" placeholder="Password">
      </div>

      <div class="col-4 pl-0">
        <button type="submit" class="btn btn-primary mt-4 btn-lg btn-block" @click="submitSignUp">Sign Up</button>
      </div>

      <div class="alert alert-warning mt-4" role="alert" v-if="signUpErrormessage">
        Please fill up all the information above!
      </div>
    </div>

  </div>
</template>
<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'authed',
      'usernameStore',
      'passwordStore'
    ]),
    authedStore: {
      get() {
        return this.authed
      },
      set(newValue) {
        this.setAuthed(newValue)
      }
    },
    usernameStoreInput: {
      get() {
        return this.usernameStore
      },
      set(newValue) {
        this.setUsernameStore(newValue)
      }
    },
    passwordStoreInput: {
      get() {
        return this.passwordStore
      },
      set(newValue) {
        this.setPasswordStore(newValue)
      }
    }
  },
  data() {
    return {
      username: null,
      password: null,
      errorMessage: false,
      signUpBox: true,
      signUpErrormessage: false
    }
  },
  methods: {
    authUser() {
      if (this.username === this.usernameStore && this.password === this.passwordStore) {
        this.setAuthed(true)
        this.errorMessage = false
      } else {
        this.errorMessage = true
      }
    },
    submitSignUp() {
      if(this.usernameStoreInput === null || this.passwordStore === null) {
        this.signUpErrormessage = true
      } else {
        this.signUpBox = false
        this.signUpErrormessage = false
      }
    },
    ...mapActions([
      'setAuthed',
      'setUsernameStore',
      'setPasswordStore'
    ]),
  }
}
</script>
