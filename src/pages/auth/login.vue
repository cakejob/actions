<template>
  <div class="flex">
    <div class="m-auto">
      <section class="h-screen">
        <div class="logo">
          <img
            src="https://rc.dorapita.com/img/front/new_dorapita/dorapita_logo.svg"
            height="100"
            alt="a sunrise over a mountain range"
          />
        </div>
        <form class="m-auto container-box" @submit.prevent="">
          <div>
            <span>ログイン</span>
          </div>
          <div class="mt-6 mb-6">
            <input
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>
          <div class="mb-6">
            <input
              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          >
            Login
          </button>
          <div class="forget">
            <span>パスワードを忘れた場合はこちら</span>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, useHead } from '#imports';

definePageMeta({
  layout: false,
});

useHead({
  title: "Test login title",
});
</script>

<style lang="scss">
body {
  background:#e2e2e2;
}
.main {
  font-size: 24px;

  .nav li {
    float: left;
  }
}
.logo {
  margin-bottom: 20px;
  img {
    width: 100px;
    margin: auto;
    margin-top: 50px;
  }
}
.container-box {
  min-width: 31.25rem;
  background: #fff;
  border-radius: 5px;
  border: solid 0.313rem #ccc;
  overflow: hidden;
  padding: 20px;

  .forget {
    margin-top: 20px;
  }
}
</style>
