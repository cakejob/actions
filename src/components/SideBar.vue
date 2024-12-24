<template>
  <aside
    class="fixed text-[#8a9299] min-w-[250px] left-0 bottom-0 z-10 h-screen top-[84px] border-gray-50 print:hidden dark:bg-zinc-800 dark:border-neutral-700"
  >
    <span><i class="fa-solid fa-gauge-high"></i> 求人管理</span>
    <ul>
      <li><a href="">全ての求人</a></li>
      <li><a href="">公開中</a></li>
    </ul>

    <span><i class="fa-regular fa-circle-user"></i> 冊子原稿一覧</span>
    <ul>
      <li><NuxtLink to="/users">All Jobs</NuxtLink></li>
      <li><a href="">承認待ち</a></li>
      <li><a href="">Pending Approval</a></li>
    </ul>

    <span><i class="fa-regular fa-clipboard"></i> 企業管理</span>
    <ul>
      <li><a href=""> 企業登録</a></li>
      <li><a href="">Register an account</a></li>
    </ul>

    <span><i class="fa-solid fa-recycle"></i> 代理店管理</span>
    <ul>
      <li><a href="">Account List</a></li>
      <li><a href="">Register an account</a></li>
    </ul>

    <span><i class="fa-solid fa-coins"></i> 設定</span>
    <ul>
      <li><a href=""> 職種管理</a></li>
      <li><a href="">Register an account</a></li>
    </ul>
  </aside>
</template>
