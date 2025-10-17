<template>
    <Header />
    <div class="text-center mt-10 text-2xl font-bold">
      Add Resturant
    </div>

  <div class="max-w-xl mx-auto bg-white p-6 mt-6 rounded shadow">
    <h2 class="text-xl font-bold mb-4">Add New Restaurant</h2>
    <form >
      <div class="mb-4">
        <label class="block text-sm font-medium">Name</label>
        <input v-model="resDetails.name" type="text" class="w-full border px-3 py-2 rounded"  />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium">Location</label>
        <input v-model="resDetails.location" type="text" class="w-full border px-3 py-2 rounded"  />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium">Contact</label>
        <input v-model="resDetails.number"  type="text" class="w-full border px-3 py-2 rounded"  />
      </div>
      <button @click.prevent="addRestaurant"
        type="submit"
        class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Add Restaurant
      </button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import Header from './Header.vue';
import { reactive } from 'vue';

const router = useRouter()

const resDetails= reactive({
    name:"",
    location:"",
    phone:""
})

 async function addRestaurant() {
      try {
       let result  = await axios.post('http://localhost:3000/resturant', {
             "name": resDetails.name,
        "location": resDetails.location,
        "phone": resDetails.phone
        });
        resDetails.name = "";
        resDetails.location = "";
        resDetails.phone = "";
        
          router.push("/home")
        
      } catch(error) {
         console.error('Error submitting form:', error);
            alert('Failed to submit data.');
      }


    }
    






</script>

