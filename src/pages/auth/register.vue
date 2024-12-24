<template>
  <div class="flex">
    <section class="sm:container m-auto mt-6">
      <div class="">
        <div class="input-group mb-6">
          <input type="text" name="title" />
        </div>
        <div class="input-group mb-6">
          <input type="text" name="description" />
        </div>
        <div class="input-group">
          <input type="submit" value="submit" />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>
