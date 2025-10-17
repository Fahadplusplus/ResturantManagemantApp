<template>
    <nav class="bg-orange-500 py-4 font-bold text-white">
        <div class="flex justify-between mx-4 ">
            <div>Resturant Management</div>
            <div class=" flex  w-72 justify-between">
                <RouterLink to="/home">
                     <p>Home </p>
                </RouterLink>
                
                <RouterLink to="/contact">
                        <p>Contact</p>
                </RouterLink>
                <RouterLink to="/about">
                          <p>about </p>
                </RouterLink>
                
                       <button @click="logout">Log Out</button> 
                
               
              
                
            </div>
        </div>
    </nav>
    
</template>

<script setup>
import { RouterLink,useRouter } from 'vue-router';
 const router = useRouter()

function logout(){
    localStorage.clear()
    router.push("/")
    
}
</script>

