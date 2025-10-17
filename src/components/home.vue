<template>
  <Header />
  <div class="text-center mt-4">
    Hello <span class="font-semibold">{{ fullname }}</span>, welcome to the Dashboard!
  </div>

  <div class="p-6">
    <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold mb-4">Restaurant List</h2>
        <RouterLink to="/add">
            <button class="text-white hover:bg-orange-600 px-6 bg-orange-500 py-1 mb-4 rounded"> ADD</button>
        </RouterLink>
        
    </div>
    

    <table class="w-full table-auto border-collapse border border-gray-400">
      <thead class="bg-gray-200">
        <tr>
          <th class="border border-gray-400 px-4 py-2">ID</th>
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
          <td class="border border-gray-400 px-4 py-2">{{ restaurant.Contact }}</td>
          <td class="border border-gray-400 px-4 py-2"> edit delete</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const fullname = ref("");
const restaurants = ref([]);

onMounted(async () => {
 
  try {
    const res = await axios.get("http://localhost:3000/resturant");
    restaurants.value = res.data;
  } catch (error) {
    console.error("Failed to load restaurants:", error);
  }
});


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
