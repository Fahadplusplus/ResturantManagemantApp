<template>
    <nav class="bg-orange-500 py-4 font-bold text-white ">
        <div class="flex justify-between items-center mx-4 lg:mx-20 xl:mx-40 2xl:mx-60">
            <div class="xl:text-2xl 2xl:text-5xl" >Resturant Management</div>
            <button v-if="menu" @click.stop="openMenu" class="sm:hidden"> <img class="h-10" src="/src/assets/bars-solid-full (1).svg" alt=""></button>
             <button v-if="cross" @click.stop="closeMenu" class="sm:hidden"> <img class="h-10" src="/src/assets/xmark-solid-full.svg" alt=""></button>
            <div  class="hidden  sm:flex  sm:w-72 sm:justify-between 2xl:text-2xl  2xl:w-96">
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
     <div  v-if="isMenu" class="bg-orange-500 text-center font-bold text-white">
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
    
</template>

<script setup>
import { ref } from 'vue';
    import { RouterLink,useRouter } from 'vue-router';
 const router = useRouter()
 let isMenu= ref(false)
 let menu= ref(true)
  let cross = ref(false)

function logout(){
    if(window.confirm("do you want to log out")){
          localStorage.clear()
    router.push("/")
    }
  
    
}

function openMenu() {
   isMenu.value = true
   menu.value = false
   cross.value = true
   
}
function closeMenu() {
   isMenu.value = false
   cross.value = false
   menu.value = true
   
}
</script>

