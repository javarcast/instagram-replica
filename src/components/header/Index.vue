<template>
  <header class="header">
    <div class="nav">
      <div class="header-left">
        <img class="header-logo" src="@/assets/images/logo.png" alt="">
      </div>
      <div class="header-middle">
        <input class="header-search" type="text" placeholder="Buscar">
        <font-awesome-icon class="header-search-icon" icon="search"/>
      </div>
      <nav class="header-nav">
        <ul>
          <li v-for="item of menu" :key="item.name">
            <router-link to="/">
              <font-awesome-icon class="nav-item" :icon="item.icon"/>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <img class="nav-profile" src="@/assets/images/person2.png" alt="">
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import menu from '@/data/menu';

export default {
  name: 'HeaderBar',
  data() {
    return {
      menu,
    };
  },
};
</script>
<style scoped>
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(219,219,219,1);
  }
  .header .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    max-width: 975px;
    padding: 0 20px;
    width: 100%;
    height: 60px;
  }
  .header-left {
    flex: 1 0 127px;
  }

  .header-logo {
    height: 3.3rem;
    margin-top: 7px;
  }
  .header-middle{
    position: relative;
    flex: 0 1 auto;
  }
  .header-nav {
    flex: 1 0 127px;
  }

  .header-search {
    border: 0;
    background: rgb(239,239,239,1);
    font-size:1rem;
    height: 3rem;
    text-overflow: ellipsis;
    border-radius: 8px;
    height: 36px;
    width: 268px;
    z-index: -1;
    min-width: 125px;
    padding: 3px 16px;
  }
  .header-search::placeholder {
    padding-left: 30px;
    font-weight: 200;
    font-size: 1em;
    color: rgba(142,142,142,1);
  }
  .header-search-icon {
    color: rgba(142,142,142,1);
    font-weight: 100;
    font-size: 15px;
    z-index: 10000;
    position: absolute;
    top: 30%;
    left: 20px;
  }
  .header-nav ul {
    display: flex;
    align-content: center;
    justify-content: center;
    padding-left: 24px;
  }

  .nav-item{
    height: 1.5rem;
    margin: 0 0.7rem;
    color: rgba(38,38,38,1);
  }

  .nav-profile {
    height: 1.5rem;
    border-radius: 100px;
    margin-left: 0.7rem;
  }

</style>
