<script></script>
<template>
    <div class="border-2 border-gray-400 rounded-md max-w-md m-auto my-10 text-center items-center h-auto">
        <div class="my-4">
            <h1 class="text-gray-500 text-2xl font-medium tracking-wide">Create an account</h1>
            <p class="text-md font-light text-gray-400">To acces your todos</p>
            <hr class="text-gray-300 my-3 mx-4">
        </div>

        <div class="mx-2">
        <label
           for="name"
           class="text-gray-500 text-md font-medium"
           >Your Name:</label
         >
         <input 
         type="text"
         placeholder="Eg Hakeem paul"
         class="border-2 border-gray-400 w-full p-1 rounded-md outline-none text-gray-600"
         >
         <label
           for="email"
           class="text-gray-500 text-md font-medium"
           >Your Email:</label
         >
         <input 
         type="text"
         placeholder="Eg yourname@gmail.com"
         class="border-2 border-gray-400 w-full p-1 rounded-md outline-none text-gray-600"
         >
         <label
           for="password"
           class="text-gray-500 text-md font-medium"
           >Password:</label
         >
         <input 
         type="password"
         placeholder="Eg 123456"
         class="border-2 border-gray-400 w-full p-1 rounded-md outline-none text-gray-600"
         >
        </div>


        <!-- use other ways of login -->

      <div class="flex items-center justify-center space-x-2 my-6 mx-4">
      <div class="w-full h-[1px] bg-gray-300"></div>
        <p class="shrink-0 text-gray-500">Or continue with</p>
      <div class="w-full h-[1px] bg-gray-300 "></div>
      </div>

      <div class="my-6 flex gap-4 justify-center text-center items-center">
       <div class="border border-gray-400 rounded-md p-2 w-32">
        google
       </div>
       <div class="border border-gray-400 rounded-md p-2 w-32">
        facebok
       </div>
       <div class="border border-gray-400 rounded-md p-2 w-32">
        Github
       </div>
      </div>
    </div>
</template>