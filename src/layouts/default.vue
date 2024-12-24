<template>
  <SideBar />
  <Header />
  <div class="main-content group-data-[sidebar-size=sm]:ml-[70px]">
    <div class="page-content">
      <div class="container-fluid px-[0.625rem]">
        <slot />
      </div>
    </div>
  </div>
</template>
<!-- https://themesbrand.com/minia-tailwindcss/layouts/index.html -->
