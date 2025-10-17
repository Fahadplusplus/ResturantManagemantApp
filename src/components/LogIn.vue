<template>
  <div class="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-center mb-6">Login In</h2>

    <form @submit.prevent="submitForm">
     

      <div class="mb-1">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          v-model="userDetails.email"
          id="email"
          type="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your email"
        />
      </div>
   

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          v-model="userDetails.password"
          id="password"
          type="password"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your password"
        />
      </div>
    

     
      <button
        @click.prevent="login"
        type="submit"
        class="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Log In
      </button>
    </form>

    <p class="mt-4 text-center text-sm text-gray-600">
      Don't have an account?
      <RouterLink to="/SignUp">
          <button   class="text-blue-600 hover:text-blue-700">Sign Up</button>
      </RouterLink>
      
    </p>
  </div>
</template>

<script setup>
import { reactive, ref,onMounted } from "vue";
import axios from "axios";
import { RouterLink,useRouter} from "vue-router";

const router = useRouter()

const userDetails = reactive({
  email: "",
  password: "",
  
});
 
async function login(){
    console.log("click");
    console.log(userDetails.email);
    console.log(userDetails.password);
    let result = await axios.get(`http://localhost:3000/users?email=${userDetails.email}&password=${userDetails.password}`)
    console.log(result);
    if(result.status == 200 && result.data.length > 0){
           localStorage.setItem("user-info",JSON.stringify(result.data))
          router.push("/home")
    }
    
    
    
    
}




  onMounted(()=>{
      let user = localStorage.getItem('user-info')
   if(user){
    router.push("/home")
   }

  })
</script>
