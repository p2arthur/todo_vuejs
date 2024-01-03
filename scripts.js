const todoApp = {
  data() {
    return { todo_list: [], newTodo: { text: null, done: false } };
  },
  methods: {
    addTodo: function () {
      console.log(this.newTodo);
      console.log('addTodo');
      this.todo_list.push(this.newTodo);
    },

    toggleTodo: function (item) {
      item.done = !item.done;
      console.log('toggleTodo');
    },

    removeAllTodos: function () {
      this.todo_list = [];
    },
  },
};

//Create app using vue
Vue.createApp(todoApp).mount('#app');
