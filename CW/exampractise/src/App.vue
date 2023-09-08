<template>
  <div>
    <nav>
      <router-link to="/purchases" class="nav_link"
        >Внесение покупок</router-link
      >
      <router-link to="/incomes" class="nav_link">Внесение доходов</router-link>
      <router-link to="/statistics" class="nav_link">Статистика</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<style>
nav {
  width: 100%;
  height: auto;
  border: solid 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #1d1d1d;
}
.nav_link {
  margin-bottom: 20px;
  margin-top: 20px;
  width: 250px;
  height: auto;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #1d1d1d;
  text-transform: uppercase;
  font-size: 18px;
  font-family: sans-serif;
  color: aliceblue;
}
.nav_link:active {
  text-decoration: underline;
  color: rgb(134, 1, 1);
  transform: scale(1.02);
  transition: all ease 1s linear;
  background-color: rgb(61, 139, 139);
  border-radius: 10px;
}
</style>
