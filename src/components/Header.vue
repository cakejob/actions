<template>
  <header
    id="header"
    class="fixed dark:bg-zinc-800 top-0 left-0 right-0 items-center z-10"
  >
    <div class="flex w-full">
      <div class="flex items-center topbar-brand">
        <div class="flex items-center justify-between shrink">
          <img class="pr-2" src="/images/white.svg" alt="Dorapita system" />
          <span class="app-name">Awesome</span>
        </div>

        <button type="button" class="px-4">
          <i class="fa-solid fa-bars show-bar"></i>
        </button>
      </div>
      <!--End Box-->

      <div
        class="flex w-full text-white justify-between items-center ltr:pl-6 rtl:pr-6"
      >
        <div>
          <form class="app-search xl:block">
            <div class="relative inline-block">
              <input
                type="text"
                value=""
                placeholder="Search...."
                class="pl-4 pr-[40px] bg-[#f8f9fa] max-w-[230px] h-9 placeholder:text-13"
              />
              <button type="button" class="bg-violet-500 px-2.5 py-1.5 rounded">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
        <!--End Search Box-->
        <div class="flex items-center">
          <div>
            <button type="button">
              <img src="/images/flag.jpeg" class="h-4" alt="language" />
            </button>
          </div>
          <div>
            <div class="relative">
              <div class="relative px-4">
                <button type="button">
                  <i class="fa-regular fa-bell"></i>
                </button>
                <span
                  class="absolute bg-red-500 px-1 left-6 top-2.5 rounded-full text-xs"
                >
                  2
                </span>
              </div>
            </div>
          </div>
          <!-- End Notify box-->
          <div class="flex">
            <div class="relative dropdown">
              <button type="button" class="bg-gray-50/30 px-3">
                <img
                  src="/images/avatar-1.jpg"
                  alt="avatar"
                  class="border-[3px] rounded-full w-9 h-9"
                />
                <span class="xl:block">北海道</span>
                <i class="fa-solid fa-angle-down"></i>
              </button>
            </div>
          </div>
        </div>
        <!--End Box Header right -->
      </div>
      <!--End Box-->
    </div>
  </header>
</template>
