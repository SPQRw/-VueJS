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
const serializedObj = localStorage.getItem("obj");
const obj = JSON.parse(serializedObj);
console.log(obj);
export default {
  data() {
    return {
      categories: [
        { name: "Еда", amount: obj.amountFood },
        { name: "Развлечения", amount: obj.amountParty },
        { name: "Одежда", amount: obj.amountCLother },
      ],
    };
  },
};
</script>
