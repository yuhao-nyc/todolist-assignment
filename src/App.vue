<template>
    <div class="container todolist-container">

        <transition name="component-fade" mode="out-in">
            <AuthBox></AuthBox>
        </transition>

        <transition name="component-fade" mode="out-in">
            <div v-if="authedStore">
                <h2 data-test="title">Todo List</h2>
                <div class="list-group">
                    <List></List>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
import List from './components/List.vue'
import AuthBox from './components/AuthBox.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: { 
        List,
        AuthBox 
    },
    computed: {
        ...mapGetters([
            'authed'
        ]),
        authedStore: {
            get() {
                return this.authed
            },
            set(newValue) {
                this.setAuthed(newValue)
            }
        },
    }
}
</script>
<style scoped>
    .todolist-container {
        max-width: 680px; 
        margin-top: 5%;
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity 400ms ease-in;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>