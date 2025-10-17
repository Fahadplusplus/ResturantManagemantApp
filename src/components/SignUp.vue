<template>
  <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-center mb-6">Create Account</h2>

    <form @submit.prevent="submitForm">
      <div class="mb-1">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Full Name</label
        >
        <input
          v-model="userDetails.name"
          id="name"
          type="text"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your full name"
        />
      </div>
      <span v-if="isName" class="text-red-700">*Enter a valid Name</span>

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
      <span v-if="isEmail" class="text-red-700">*Enter a valid Name</span>

      <div class="mb-1">
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
      <span v-if="isPass" class="text-red-700">*Enter a valid Name</span>

      <div class="mb-1">
        <label
          for="confirmPassword"
          class="block text-sm font-medium text-gray-700"
          >Confirm Password</label
        >
        <input
          v-model="userDetails.confirmPassword"
          id="confirmPassword"
          type="password"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Confirm your password"
        />
      </div>
      <span v-if="isConfirmPass" class="text-red-700">*Enter a valid Name</span>

      <button
        @click.prevent="HandelSubmit"
        type="submit"
        class="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Sign Up
      </button>
    </form>

    <p class="mt-4 text-center text-sm text-gray-600">
      Already have an account?
      <a href="/login" class="text-blue-600 hover:text-blue-700">Log in</a>
    </p>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";

const userDetails = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

let isName = ref(false);
let isEmail = ref(false);
let isPass = ref(false);
let isConfirmPass = ref(false);

function HandelSubmit() {
  isName.value = false;
  isEmail.value = false;
  isPass.value = false;
  isConfirmPass.value = false;

  if (userDetails.name.length < 3 || !/^[A-Za-z]+$/.test(userDetails.name)) {
    isName.value = true;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.email)) {
    isEmail.value = true;
  }
  if (userDetails.password.length < 5) {
    isPass.value = true;
  }
  if (userDetails.password != userDetails.confirmPassword) {
    isConfirmPass.value = true;
  }

  if (
    !isName.value &&
    !isEmail.value &&
    !isPass.value &&
    !isConfirmPass.value
  ) {
    async function submitForm() {
      try {
        await axios.post('http://localhost:3000/users', {
             "name": userDetails.name,
        "email": userDetails.email,
        "password": userDetails.password
        });
        alert("data sent");
        userDetails.name = "";
        userDetails.email = "";
        userDetails.password = "";
        userDetails.confirmPassword = "";
      } catch(error) {
         console.error('Error submitting form:', error);
            alert('Failed to submit data.');
      }
    }
    submitForm()
  }
}
</script>
