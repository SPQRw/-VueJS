<template>
  <div>
    <nav>
      <router-link to="/purchases">Внесение покупок</router-link>
      <router-link to="/incomes">Внесение доходов</router-link>
      <router-link to="/statistics">Статистика</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
nav {
  margin-bottom: 20px;
}
</style>