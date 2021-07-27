<template>
  <div class='w-full bg-gunn-50'>
    <nav class='w-full flex-col md:flex-row flex md:px-4 bg-gunn-500'>
      <a class='flex flex-row mx-auto md:mx-0 mb-2 md:mb-0 md:mr-5 py-3'>
        <img class='h-10 w-10 mr-3' src='https://cdn.discordapp.com/icons/736075025299537980/53f874b8a1e7eb4675ec819f49a89446.webp?size=256'/>
        <span class='block my-auto text-white font-bold tracking-wide text-3xl mr-5 md:mr-0'>Gunn Math Circle</span>
      </a>
      <span @click='showNav=!showNav' class='flex top-4 right-5 cursor-pointer h-10 w-10 rounded-md hover:bg-gunn-600 absolute md:hidden justify-center items-center text-white text-2xl'>
        &times;
      </span>
      <div :class='[!showNav? "hidden md:flex":"flex"]' class='flex-col  md:flex-row md:flex-grow'>
        <a class='block md:h-full md:inline-flex justify-center items-center  md:px-5 text-center py-2 md:py-0 text-white  hover:underline hover:bg-gunn-600' :href='href' v-for='{name, href} in navLinks'>
          {{name}}
        </a>
      </div>

    </nav>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data:()=>({
    showNav:false,
    navLinks:[
      {
        name:'Officers',
        href:'/officers'
      },
      {
        name:'Contests',
        href:'/contests'
      },
      {
        name:'About',
        href:'/about'
      }
    ]
  })
}
</script>
<style>


</style>
