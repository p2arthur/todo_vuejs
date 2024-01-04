const todoApp = {
  data() {
    return { todo_list: [], newTodo: { text: null, done: false } };
  },

  //Lifecycle hooks
  //----------------------------------------------------------------------------
  beforeCreate() {
    console.log('before create');
  },

  created() {
    const todo_list = localStorage.getItem('todo_list');

    this.todo_list = todo_list ? JSON.parse(todo_list) : this.todo_list;
  },

  beforeUpdate() {
    console.log('before update');
  },
  //----------------------------------------------------------------------------
  methods: {
    addTodo: function () {
      if (this.newTodo.text) {
        this.todo_list.push(this.newTodo);
        this.newTodo = {
          done: false,
        };
        localStorage.setItem('todo_list', JSON.stringify(this.todo_list));
      } else {
        alert('To-do text is required');
      }
    },

    toggleTodo: function (item) {
      item.done = !item.done;
      console.log(item.done);
    },

    removeAllTodos: function () {
      this.todo_list = [];
    },
  },
};

//Create app using vue
Vue.createApp(todoApp).mount('#app');
