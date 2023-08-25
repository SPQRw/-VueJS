// let va = Vue.createApp({
//   data() {
//     return {
//       name: "",
//     };
//   },
//   methods: {
// Eye(data) {
//   console.log(data);
// },
//   },
// });
// va.component("user-card", {
//   template: `
//   <div>
//   <h1> Hello world {{counter}}</h1>
//   <button @click="count">+1</button>
//   </div>`,
//   data() {
//     return {
//       counter: 0,
//     };
//   },
//   methods: {
//     count() {
//       this.counter++;
//     },
//   },
// });
// va.component("global-text", {
//   props: ["text"],
//   template: `
//     <p>{{text}}</p>`,
// });

// va.component("event-test", {
//   template: `
//     <button @mouseover="doSomething">click</button>`,
//   methods: {
//     doSomething() {
//       this.$emit("something-happened", "click");
//     },
//   },
// });

// va.component("first-list", {
//   template: `
//    <textarea v-model = "name"></textarea>
//     <button @click="doSomething">Click</button>`,
//   methods: {
//     doSomething() {
//       this.$emit("something-happened", "text");
//     },
//   },
// });
// va.mount("#root");
let app = Vue.createApp({
  el: "#app",
  data: {
    tasks: [],
  },
  flag_rewrite: false,
  watch: {
    tasks: {
      handler: function (newVal) {
        if (this.flag_rewrite) {
          axios({
            method: "post",
            url: "/files/todo-checklist/ajax.php",
            data: {
              action: "set-storage",
              "data-storage": JSON.stringify(newVal),
            },
          })
            .then(function (response) {
              if (response.data == "error") {
                alert("Ошибка: не удалось сохранить данные");
              }
            })
            .catch(function () {
              alert("Ошибка: не удалось сохранить данные");
            });
        }
        if (!this.flag_rewrite) this.flag_rewrite = true;
      },
      deep: true,
    },
  },
});
app.component("task-list", {
  template: "#task-list",
  props: {
    tasks: { default: [] },
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({
          title: this.newTask,
          completed: false,
        });
        this.newTask = "";
      }
    },
    completeTask(task) {
      task.completed = !task.completed;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});

app.component("task-item", {
  template: "#task-item",
  props: ["task"],
  computed: {
    className() {
      let classes = ["tasks__item__toggle"];
      if (this.task.completed) {
        classes.push("tasks__item__toggle--completed");
      }
      return classes.join(" ");
    },
  },
});
