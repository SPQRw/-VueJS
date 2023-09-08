<template>
    <div>
      <h2>Статистика трат</h2>
      <table>
        <thead>
          <tr>
            <th>Категория</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.name">
            <td>{{ category.name }}</td>
            <td>{{ category.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
    const serializedObj = localStorage.getItem('obj');
    const obj = JSON.parse(serializedObj);
    console.log(obj.amount); 
    // console.log(obj.date); 
  export default {
    data() {
      return {
        categories: [
          { name: 'Еда', amount: obj.amount },
          { name: 'Одежда', amount: 2000 },
          { name: 'Развлечения', amount: 500 }
        ],      
     }
    }
  }
  </script>