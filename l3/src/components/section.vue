<template>
<div class="section">
      <div class="sec_tex mar_lef">常用</div>
      <ul class="dh">
        <li><router-link to="./">Repo列表</router-link></li>
        <li style="color: #2277da"><router-link to="./sel">组件搜索</router-link></li>
      </ul>
      <div class="sec_tex mar_lef" @click="dialogVisible = true">
        我创建的Repo
      </div>
      <ul>
        <li><router-link to="./mav">maven_repo1</router-link>
        <li>maven_repo2</li>
        <li>maven_repo3</li>
      </ul>
      <div class="sec_tex mar_lef">我收藏的Repo</div>
      <ul>
        <li>maven_repo4</li>
        <li>maven_repo5</li>
        <li>maven_repo6</li>
      </ul>
    </div>
</template>
<script>
</script>

<style>
</style>