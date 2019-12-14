<template>
  <div class="my-3">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/page/">卡片1</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name:'卡片2'}">卡片2</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page/child3">卡片3</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/page/child4">卡片4</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
