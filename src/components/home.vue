<template>
  <Header />
  <div class="text-center mt-4 xl:text-5xl text-2xl my-10 font-bold  ">
    Hello <span class="font-semibold">{{ fullname }}</span>, welcome to the Dashboard!
  </div>

  <div class="p-6">
    <div class="flex justify-between items-center lg:mx-20 xl:mx-40 2xl:mx-60">
        <h2 class="text-2xl font-bold mb-4">Restaurant List</h2>
        <RouterLink to="/add">
            <button class="text-white hover:bg-orange-600 px-6 bg-orange-500 py-1 mb-4 rounded"> ADD</button>
        </RouterLink>
        
    </div>
    
<div class="overflow-x-auto lg:mx-20 xl:mx-40 2xl:mx-60 2xl:text-2xl">
      <table class="w-full table-auto  border-collapse border border-gray-400">
      <thead class="bg-gray-200">
        <tr>
          <th class="border border-gray-400  px-4 py-2">ID</th>
          <th class="border border-gray-400 px-4 py-2">Name</th>
          <th class="border border-gray-400 px-4 py-2">Location</th>
          <th class="border border-gray-400 px-4 py-2">Contact</th>
          <th class="border border-gray-400 px-4 py-2">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
          <td class="border border-gray-400 px-4 py-2">{{ restaurant.id }}</td>
          <td class="border border-gray-400 px-4 py-2">{{ restaurant.name }}</td>
          <td class="border border-gray-400 px-4 py-2">{{ restaurant.location }}</td>
          <td class="border border-gray-400 px-4 py-2">{{ restaurant.phone }}</td>
          <td class="border border-gray-400 px-4 py-2">
            <RouterLink :to="`/update/` + restaurant.id">
              <img src="" alt="">
            </RouterLink> 
            <button @click="deleteResturant(restaurant.id)"> <img src="" alt=""></button></td>
        </tr>
      </tbody>
    </table>
</div>

  </div>
  

</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const fullname = ref("");
const restaurants = ref([]);

onMounted(() => {
 loadData()
});


async function deleteResturant(id){

  if(window.confirm("Are you sure you want to delete this student?")){
    console.log(id);

  const result = await axios.delete("http://localhost:3000/resturant/"+ id)
  if(result.status=200){

    loadData()
  }

}
  
  
}



async function loadData() {

  try {
    const res = await axios.get("http://localhost:3000/resturant");
    restaurants.value = res.data;
  } catch (error) {
    console.error("Failed to load restaurants:", error);
  }
  
}


onMounted(() => {
  const user = localStorage.getItem("user-info");

  if (!user) {
    router.push("/signup");
    return;
  }

  try {
    const parsed = JSON.parse(user);
    fullname.value = parsed.name; 
  } catch (error) {
    console.error("Error parsing user-info:", error);
    router.push("/signup");
  }
});
</script>
