<script setup lang="ts">

</script>

<template>
  <div class="login-page flex justify-center items-center min-h-screen m-5">

    <div class="login-wrapper card bg-base-200 p-2 shadow-2xl">
      <div class="login-header text-center text-2xl font-bold p-2">
        Login
      </div>
      <div class="card-body login-elements">
        <label class="input input-bordered flex items-center gap-2">
          <icon name="material-symbols:mail-outline-rounded" size="1.2rem" class="pr-2 border-r-2 w-6" />
          <input type="text" class="grow" placeholder="Email" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <icon name="material-symbols:password-rounded" size="1.2rem" class="border-r-2 pr-2 w-6"/>
          <input type="password" class="grow" placeholder="Password" />
        </label>
        <button class="btn btn-neutral w-full">Login</button>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>