<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import {db} from './firebase/firestore'
import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc, query, orderBy  } from "firebase/firestore";



const todoCollection = collection(db, "todos")
const todoQuery = query(todoCollection, orderBy('date', "desc"));

const todos = ref([])
const newTodoText = ref('')

// add todo
const addTodo =() => {
 addDoc(todoCollection, {
  text: newTodoText.value,
  done: false,
  date: Date.now()
})
newTodoText.value = ''
}

// delete todo
const deleteTodo = (id) => {
  deleteDoc(doc(todoCollection , id));

}

// done todo
const doneTodo = (id) => {
const index = todos.value.findIndex(todo => todo.id === id)
// todos.value[index].done = !todos.value[index].done

 updateDoc (doc(todoCollection , id), {
  done: !todos.value[index].done
});
}

// fetch todo from firestore
onMounted(() => {
onSnapshot(todoQuery, (querySnapshot) => {
  const fetchTodo = [];
  querySnapshot.forEach((doc) => {
    const todo = {
      id: doc.id,
      text: doc.data().text,
      done: doc.data().done,
    }
    fetchTodo.push(todo)
  })
  todos.value = fetchTodo
})
})
</script>

<template>
  <div
    class="todo m-auto text-center items-center mt-12 border-2 border-gray-400 rounded-md h-auto max-w-md"
  >

    <div class="pt-4">
      <h3 class="text-gray-500 text-2xl font-semibold">RealTime Todo App</h3>
      <hr class="text-gray-300 mx-4 mt-3">
    </div>


    <form 
      @submit.prevent="addTodo"
      class="mt-6 mb-6"
    >
     <input
       v-model="newTodoText"
       class="bg-gray-200 p-2 outline-none w-72 rounded-sm text-gray-500"
       placeholder="Add a todo"
       type="text"
     >
      <button 
      class="button bg-gray-500 p-2 rounded-md uppercase ml-2 text-white">
      Add Todo
    </button>
    </form>


    <div 
    v-for="todo in todos"
    class="mx-6">
      <div  :class="{'bg-purple-200 text-purple-600 line-through': todo.done}"
      class=" flex justify-between bg-gray-100 p-2 rounded-md text-lg text-gray-500 font-medium mb-2">
       {{todo.text}}

       <button
       @click="doneTodo(todo.id)"
         :class="todo.done ? 'bg-purple-600' : 'bg-gray-400'"
         class="bg-gray-400 rounded-md p-1 text-white text-sm">Check</button
       >
       <button
       @click="deleteTodo(todo.id)" 
       class="bg-red-400 rounded-md p-1 text-white text-sm">
       Delete
      </button>
      </div>
    </div>
  </div>

  <RouterView />
</template>

