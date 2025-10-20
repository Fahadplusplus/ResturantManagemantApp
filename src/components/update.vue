<template>
    <Header />
    <div class="text-center mt-10 text-2xl font-bold">
      Update Resturant
    </div>

  <div class="max-w-xl mx-auto bg-white p-6 mt-6 rounded shadow">
    <h2 class="text-xl font-bold mb-4">Update Restaurant</h2>
    <form >
      <div class="mb-4">
        <label class="block text-sm font-medium">Name</label>
        <input v-model="resDetails.name" type="text" class="w-full border px-3 py-2 rounded"  />
         <span v-if="isName" class="text-red-500">*Enter A Valid Name</span>
      </div>
     
      <div class="mb-4">
        <label class="block text-sm font-medium">Location</label>
        <input v-model="resDetails.location" type="text" class="w-full border px-3 py-2 rounded"  />
        <span v-if="isLocation" class="text-red-500">*Enter A Valid Location</span>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium">Contact</label>
        <input v-model="resDetails.phone"  type="number" class="w-full border px-3 py-2 rounded"  />
        <span v-if="isPhone" class="text-red-500">*Enter A Valid phone number</span>
      </div>
      <button @click.prevent="updateRestaurant"
        type="submit"
        class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Update Restaurant
      </button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute,useRouter } from 'vue-router';
import Header from './Header.vue';
import { reactive,ref,onMounted } from 'vue';
import LogIn from './LogIn.vue';

const route = useRoute()
const router = useRouter()
let isName = ref(false)
let isLocation = ref(false)
let isPhone = ref(false)

const restaurantId = route.params.id

const resDetails= reactive({
    name:"",
    location:"",
    phone:""
  })

  onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/resturant/${restaurantId}`);
    const data = response.data;

    resDetails.name = data.name;
    resDetails.location = data.location;
    resDetails.phone = data.phone;
  } catch (error) {
    console.error('Failed to load restaurant data:', error);
  }
});


 async function updateRestaurant()
  {
    
    
  
    isName.value = false
    isLocation.value = false
    isPhone.value = false

     if (resDetails.name.length < 3 || !/^[A-Za-z\s]+$/.test(resDetails.name)) {
    isName.value = true;
  }
  if (resDetails.location.length < 3) {
    isLocation.value = true;
  }
  if (resDetails.phone.length < 9) {
    isPhone.value = true;
  }
  if (
    !isName.value &&
    !isLocation.value &&
    !isPhone.value 
  )
      try {
       let result  = await axios.put(`http://localhost:3000/resturant/${restaurantId}`, {
             name: resDetails.name,
        location: resDetails.location,
        phone: resDetails.phone
        });
        
        
          router.push("/home")
        
      } catch(error) {
         console.error('Error submitting form:', error);
            alert('Failed to submit data.');
      }


    }
    






</script>

