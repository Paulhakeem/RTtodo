<script setup>
import { ref } from "vue"
import { useRouter, RouterLink } from "vue-router"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const router = useRouter()
const google = new GoogleAuthProvider()

const loginDetails = ref({
  email: '',
  password: '',
});

// password login
const todoLogin = () => {
    createUserWithEmailAndPassword(
    getAuth(),
    loginDetails.value.email,
    loginDetails.value.password
  ).then(() => {
    loginDetails.value = {
      email: '',
      password: '',
    }
    router.push({
        path: '/about'
    })
  })
  .catch(error => {
    alert(error.message)
  })
}

// google login
const googleLogin = () => {
  signInWithPopup(getAuth(), google)
    .then(() => {
      router.push({
        path: "/about",
      });
    })
    .catch((error) => {
      alert(error.message);
    });
};

</script>

<template>
  <div
    class="todo border-2 border-gray-400 rounded-md max-w-md m-auto my-14 text-center items-center h-auto"
  >
    <div class="my-4">
      <h1 class="text-gray-500 text-2xl font-medium tracking-wide">
        Create your todo account
      </h1>
      <p class="text-md font-light text-gray-400">To acces your todos or 
        <span class="underline font-bold cursor-pointer">
            Login
        </span>
    </p>
      <hr class="text-gray-300 my-3 mx-4" />
    </div>
    <!-- login form -->
    <form @submit.prevent="todoLogin">
      <div class="mx-2">
        <label for="name" class="text-gray-500 text-md font-medium"
          >Your Name:</label
        >
        <input
          type="text"
          placeholder="eg Hakeem paul"
          class="border border-gray-400 w-full p-2 rounded-md outline-none text-gray-600"
        />
        <label for="email" class="text-gray-500 text-md font-medium"
          >Your Email:</label
        >
        <input
        v-model="loginDetails.password"
          type="email"
          placeholder="eg yourname@gmail.com"
          class="border border-gray-400 w-full p-2 rounded-md outline-none text-gray-600"
        />
        <label for="password" class="text-gray-500 text-md font-medium"
          >Password:</label
        >
        <input
        v-model="loginDetails.password"
          type="password"
          placeholder="eg 123456"
          class="border border-gray-400 w-full p-2 rounded-md outline-none text-gray-600"
        />
        <button class="my-4 bg-gray-600 p-2 w-full text-white rounded-md">
          Login
        </button>
      </div>
    </form>

    <!-- use other ways of login -->

    <div class="flex items-center justify-center space-x-2 my-4 mx-4">
      <div class="w-full h-[1px] bg-gray-300"></div>
      <p class="shrink-0 text-gray-500">Or continue with</p>
      <div class="w-full h-[1px] bg-gray-300"></div>
    </div>

    <div class="my-6 flex gap-4 justify-center text-center items-center mb-6">
      <button 
      class="border border-gray-400 rounded-md p-2 w-32 cursor-pointer"
      @click="googleLogin"
      >Google</button>
      <button 
      class="border border-gray-400 rounded-md p-2 w-32 cursor-pointer">Facebok</button>
      <button 
      class="border border-gray-400 rounded-md p-2 w-32 cursor-pointer">Github</button>
    </div>
  </div>
</template>
